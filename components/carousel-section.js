import fetchNowPlayingMovies from "@/utils/http";
import { CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Carousel from "./carousel";
import styles from "@/styles/Carousel.module.css";

export default function CarouselSection() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["nowPlayingMovies"],
    queryFn: fetchNowPlayingMovies,
    staleTime: Infinity, // 24시간 동안은 캐시된 데이터를 사용 (5초가 지나면 새로운 데이터를 가져옴)
    cacheTime: 1000 * 60 * 60 * 24, // 24시간 동안 캐시된 데이터를 보관 (5초가 지나면 캐시된 데이터는 삭제)
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  console.log(data);
  return (
    <>
      <h1 className={styles.title}>Now Playing</h1>
      <section className={styles.container}>
        <Carousel data={data.results} />
      </section>
    </>
  );
}
