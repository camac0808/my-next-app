import { useRouter } from "next/router";
import { fetchMovieDetail } from "@/utils/http";
import { CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import styles from "@/styles/Detail.module.css";
import Image from "next/image";
import StarRating from "@/components/star-rating";

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, error } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchMovieDetail(id),
    staleTime: Infinity, // 24시간 동안은 캐시된 데이터를 사용 (5초가 지나면 새로운 데이터를 가져옴)
    cacheTime: 1000 * 60 * 60 * 24, // 24시간 동안 캐시된 데이터를 보관 (5초가 지나면 캐시된 데이터는 삭제)
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
          alt={data.title}
          title={data.title}
          width={500}
          height={200}
        />
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.titleContainer}>
          <h2>{data.title}</h2>
          <div className={styles.releaseContainer}>
            <p>{data.release_date}</p>
            <div className={styles.starContainer}>
              <StarRating vote_average={data.vote_average} totalStars={5} fillColor="#0dbeaf" halfColor="#074a44" />
            </div>
          </div>
          <p>
            {data.genres.map((genre, index, array) => (
              <span key={genre.id}>{genre.name + (index !== array.length - 1 ? " / " : "")}</span>
            ))}
          </p>
        </div>

        <div className={styles.overviewContainer}>
          <p>{data.overview}</p>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>Play Movie</button>
            <button className={styles.button}>Trailer</button>
          </div>
        </div>
      </div>
    </div>
  );
}
