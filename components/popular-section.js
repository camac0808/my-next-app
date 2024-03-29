import Card from "@/components/card";
import { useQuery } from "@tanstack/react-query";
import { CircularProgress } from "@mui/material";
import fetchPopularMovies from "@/utils/http";
import styles from "@/styles/Popular.module.css";
import Pagination from "@/components/pagination";

export default function PopularSection() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: fetchPopularMovies,
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
      <h1 className={styles.title}>Popular Movies</h1>

      <section>
        {data && (
          <ul className={styles.ul}>
            {data.results.slice(0, 9).map((movie) => (
              <Card movie={movie} key={movie.id} />
            ))}
          </ul>
        )}
        <Pagination />
      </section>
    </>
  );
}
