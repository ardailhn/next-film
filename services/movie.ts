export const fetchMovieApi = async (pathname: string, query: string = '') => {
    try {
        let url = `${process.env.API_URL}${pathname}?${query}`;
        const res = await fetch(url, { headers: { Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}` } });
        return res.json();
    } catch (error: any) {
        throw new Error(error)
    }
}

export const getSingleCategory = async (genreId: any) => {
    let pathname = `/discover/movie`;
    let query = `with_genres=${genreId}`;
    return fetchMovieApi(pathname, query);
}

export const getTopRatedMovies = async () => {
    let pathname = `/discover/movie`;
    let query = `sort_by=vote_average.desc`;
    return fetchMovieApi(pathname, query);
}

export const getPopularMovies = async () => {
    let pathname = `/discover/movie`;
    let query = `sort_by=popularity.desc`;
    return fetchMovieApi(pathname, query);
}

export const getCategories = async () => {
    let pathname = `/genre/movie/list`;
    return fetchMovieApi(pathname);
}

export const getMovie = async (movieId: any) => {
    let pathname = `/movie/${movieId}`;
    return fetchMovieApi(pathname);
}

export const getMovieVideos = async (movieId: any) => {
    let pathname = `/movie/${movieId}/videos`;
    return fetchMovieApi(pathname);
}
