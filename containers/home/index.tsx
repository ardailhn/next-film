import Categories from '@/components/categories';
import FeaturedMovie from '@/components/featured-movie';
import MoviesSection from '@/components/movies-section';

export default function HomeContainer({ popularMovies = [], topRatedMovies = [], categories = [], selectedCategory }: any) {
    return (
        <div>
            <FeaturedMovie movie={topRatedMovies[0]} />
            <Categories categories={categories.slice(0, 5)} />
            {selectedCategory.movies.length > 0 &&
                <MoviesSection title={categories.find((genre: any) => genre.id === +selectedCategory.id)?.name} movies={selectedCategory.movies} />
            }
            <MoviesSection title="Top Rated Movies" movies={topRatedMovies.slice(1, 6)} />
            <MoviesSection title="Popular Movies" movies={popularMovies.slice(6, 11)} />
        </div>
    )
}