import Image from "next/image";
import styles from "@/styles/SliderCard.module.css";
import Link from 'next/link';

export default function SliderCard({ movie }) {
  const { id, poster_path, title } = movie;

  return (
    <li className={styles.image}>
        <Link href={`/detail/${id}`}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            title={title}
            width={250}
            height={300}
          />
        </Link>
    </li>
  );
}
