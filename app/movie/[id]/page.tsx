import MovieContainer from "@/containers/movie";
import { getMovie, getMovieVideos } from "@/services/movie";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: any): Promise<Metadata> {
    const product = await getMovie(params.id);
    return { title: product.title, description: product.overview }
}

export default async function MoviePage({ params }: any) {

    const [movieDetail, { results: movieDetailWithVideo }] = await Promise.all([
        getMovie(params.id),
        getMovieVideos(params.id)
    ]);

    if (!movieDetail) {
        notFound();
    }

    return (
        <MovieContainer movie={{ ...movieDetail, videos: movieDetailWithVideo }} />
    )
}