import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Card.module.css";
import StarSVG from "@/public/star.svg";

export default function Card({ movie }) {
  const { title, id, poster_path, vote_average, release_date } = movie;
  const posterPath = `https://image.tmdb.org/t/p/w500${poster_path}`;

  const starRating = ({ vote_average, totalStars = 5 }) => {
    const fullStars = Math.floor(vote_average / 2);
    // 0.5 단위
    const hasHalfStar = vote_average % 1 !== 0;

    const starArray = Array.from({ length: totalStars }, (_, index) => {
      if (index < fullStars) {
        return "full";
      } else if (hasHalfStar && index === fullStars) {
        return "half";
      } else {
        return "empty";
      }
    });

    // return (
    //   <>
    //     {starArray.map((type, index) => (
    //       <StarSVG key={index} type={type} width={15} />
    //     ))}
    //   </>
    // );
  };

  console.log(movie);
  return (
    <li className={styles.container}>
      <div className={styles.image}>
        <Link href={`/detail/${id}`}>
          <Image src={posterPath} alt={title} title={title} width={200} height={200} />
        </Link>
      </div>
      <div className={styles.data}>
        <h3 className={styles.title}>{title}</h3>
        <h5 className={styles.average}>{vote_average} / 5.0</h5>
      </div>
      {/* {starRating({ vote_average })}
       */}
      <StarSVG fill="#fff" width={15} />
    </li>
  );
}
