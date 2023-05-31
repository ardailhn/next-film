import HomeContainer from "@/containers/home";
import {
  getCategories, getPopularMovies,
  getSingleCategory, getTopRatedMovies
} from "@/services/movie";

export default async function HomePage({ params }: any) {

  const [
    { results: topRatedMovies },
    { results: popularMovies },
    { genres: categories }] = await Promise.all([
      getTopRatedMovies(),
      getPopularMovies(),
      getCategories()
    ]);

  let selectedCategory;
  if (params.category?.length > 0) {
    const { results } = await getSingleCategory(params.category[1]);
    selectedCategory = results;
  }
  
  return (
    <HomeContainer
      topRatedMovies={topRatedMovies}
      popularMovies={popularMovies}
      categories={categories}
      selectedCategory={{
        id: params.category?.[1] ?? '',
        movies: selectedCategory ? selectedCategory.slice(0, 10) : []
      }} />
  )
}
