import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Card.module.css";
import StarSVG from "@/public/star.svg";

export default function Card({ movie }) {
  const { title, id, poster_path, vote_average, release_date } = movie;
  const posterPath = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const totalStars = 5;

  // 별 평점
  const starRating = (vote_average, totalStars) => {
    const starRating = Math.round(vote_average) / 2;

    const starArr = Array.from({ length: totalStars }, (_, index) => {
      if (index < starRating) {
        return <StarSVG key={index} fill="white" width={15} height={15} />;
      } else if (index === Math.ceil(starRating)) {
        return <StarSVG key={index} fill="gray" width={15} height={15} />;
      } else {
        return <StarSVG key={index} fill="none" stroke="white" strokeWidth="2" width={15} height={15} />;
      }
    });

    return starArr;
  };
  return (
    <li className={styles.container}>
      <div className={styles.image}>
        <Link href={`/detail/${id}`}>
          <Image src={posterPath} alt={title} title={title} width={200} height={200} />
        </Link>
      </div>
      <div className={styles.data}>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.starRating}>{starRating(vote_average, totalStars)}</div>
    </li>
  );
}
