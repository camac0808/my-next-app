import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Scrollbar, Autoplay, Pagination, EffectCoverflow, EffectFlip } from "swiper/modules";
import SwiperCore from "swiper";

import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import styles from "@/styles/Carousel.module.css";

export default function Carousel({ data }) {
  SwiperCore.use([Navigation, Autoplay ]);

  return (
    <div className={styles.container}>
      <div className={styles.prev}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" transform="rotate(-90)">
          <path fill="white" d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
        </svg>
      </div>

      <Swiper
        className={styles.swiper}
        loop={true}
        // autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        navigation={{
          prevEl: `.${styles.prev}`,
          nextEl: `.${styles.next}`,
        }}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <Image className={styles.image} src="/carousel-image/dr-strange.jpg" alt="dr-strange" width={520} height={380} />
          <div className={styles.swiperContent}>
            <h2>Doctor Stranger</h2>
            <p>America Chavez and a version of Stephen Strange are chased by a demon in the space between universes
                while searching for the Book of Vishanti</p>
          </div>
        </SwiperSlide>  
      </Swiper>

      <div className={styles.next}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" transform="rotate(90)">
          <path fill="white" d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
        </svg>
      </div>
    </div>
  );
}

// if you want to use api data
// {data.slice(0, 10).map((movie) => (
//   <SwiperSlide className={styles.swiperSlide} key={movie.id}>
//     <Link href={`/detail/${movie.id}`}>
//       <Image
//         className={styles.image}
//         src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
//         alt={movie.title}
//         title={movie.title}
//         width={350}
//         height={200}
//       />
//     </Link>
//   </SwiperSlide>
// ))}