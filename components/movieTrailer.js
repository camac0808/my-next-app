import { fetchMovieTrailer } from "@/utils/http";
import { CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

export default function MovieTrailer({ id }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["movieTrailer", id],
    queryFn: () => fetchMovieTrailer(id),
    staleTime: Infinity, // 24시간 동안은 캐시된 데이터를 사용 (5초가 지나면 새로운 데이터를 가져옴)
    cacheTime: 1000 * 60 * 60 * 24, // 24시간 동안 캐시된 데이터를 보관 (5초가 지나면 캐시된 데이터는 삭제)
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  console.log("trailer" + data.results[14].key);
  const youtubeKey = data.results[14].key;
  const youtubeUrl = `https://www.youtube.com/embed/${youtubeKey}`;
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={youtubeUrl}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
}
