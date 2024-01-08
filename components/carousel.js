import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Carousel.module.css";

export default function Carousel({ data }) {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 10,
    skipSnaps: false,
    containScroll: "trimSnaps",
    draggable: true,
    align: "center",
    slidesToScroll: 1,
  });

  return (
    <div className={styles.embla} ref={emblaRef}>
      <ul className={styles.embla__container}>
        {data.slice(0, 5).map((movie) => (
          <li className={styles.embla__slide} key={movie.id}>
            <Link href={`/detail/${movie.id}`}>
              <Image
                className={styles.image}
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
                title={movie.title}
                width={280}
                height={200}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
