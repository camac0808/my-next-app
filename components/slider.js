import styles from "@/styles/Slider.module.css";
import fetchNowPlayingMovies from "@/utils/http";
import { CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import SliderCard from "./slider-card";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ 
    delay: 5000,
    stopOnMouseEnter: true,
    stopOnInteraction: false,
  })]);

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

  if (emblaApi) {
    console.log(emblaApi.slideNodes());
  }
  console.log(data);

  return (
    <>
      <h1 className={styles.h1}>Now Playing</h1>

      <div className={styles.embla} ref={emblaRef}>
        <ul className={styles.embla__container}>
          {data.results.slice(0, 5).map((movie) => (
            <li className={styles.embla__slide} key={movie.id}>
              <SliderCard movie={movie} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
