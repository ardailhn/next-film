import FeaturedMovie from "@/components/featured-movie"

export default function MovieContainer({ movie }: any) {
    return (
        <FeaturedMovie movie={movie} isCompact={false} />
    )
}