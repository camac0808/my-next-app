import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Card.module.css";
import StarRating from "@/components/star-rating";

export default function Card({ movie }) {
  const { title, id, poster_path, vote_average } = movie;
  const posterPath = `https://image.tmdb.org/t/p/original${poster_path}`;
  
  
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
      <StarRating vote_average={vote_average} totalStars={5} fillColor="white" halfColor="gray"/>
    </li>
  );
}
