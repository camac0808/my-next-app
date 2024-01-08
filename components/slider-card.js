import Image from "next/image";
import styles from "@/styles/SliderCard.module.css";
import Link from "next/link";

export default function SliderCard({ movie }) {
  const { id, backdrop_path, title } = movie;
  
  return (
    <>
      <Link href={`/detail/${id}`}>
        <Image
          className={styles.image}
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt={title}
          title={title}
          width={280}
          height={200}
        />
      </Link>
    </>
  );
}
