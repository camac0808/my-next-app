import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import SwiperCore from "swiper";

import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import styles from "@/styles/Carousel.module.css";

export default function Carousel({ data }) {
  SwiperCore.use([Navigation, Autoplay, EffectCoverflow]);

  // 영화 내용 길이 짜르기
  function truncate(str, num) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }

  let DoctorStrangetext = `America Chavez and a version of Stephen Strange are chased by a demon in the space between universes while searching for the Book of Vishanti`;
  let GuardiansOfTheGalaxytext = `A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.`;
  let JusticeLeaguetext = `Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.`;
  let SpidermanText = `Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats
  in a world that has changed forever.`;
  let SuicideSquadText = `Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve
  prison join the super-secret, super-shady Task Force X as they are dropped off at the remote,
  enemy-infused island of Corto Maltese.`;
  let ThorText = `Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop
  Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.`;
  let EternalsText = `In 5000 BC, ten superpowered Eternals—Ajak, Sersi, Ikaris, Kingo, Sprite, Phastos, Makkari, Druig,
  Gilgamesh, and Thena—are sent by the Celestial Arishem to Earth on their starship, the Domo, to
  exterminate the invasive Deviants.`;

  return (
    <>
      <div className={styles.prev}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" transform="rotate(-90)">
          <path fill="white" d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
        </svg>
      </div>
      <div className={styles.container}>
        <Swiper
          className={styles.swiper}
          loop={true}
          // autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={0}
          effect={"coverflow"} // slide, fade, cube, coverflow or flip
          slidesPerView={"auto"}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 100,
            depth: 200,
            modifier: 1.5,
            slideShadows: true,
          }}
          navigation={{
            prevEl: `.${styles.prev}`,
            nextEl: `.${styles.next}`,
          }}
        >
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              className={styles.image}
              src="/carousel-image/dr-strange.jpg"
              alt="dr-strange"
              width={1280}
              height={720}
            />
            <div className={styles.swiperContent}>
              <h2>Doctor Stranger</h2>
              <p>{truncate(DoctorStrangetext, 150)}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.opacity}>
              <Image
                className={styles.image}
                src="/carousel-image/guardians-of-the-galaxy.jpg"
                alt="guardians-of-the-galaxy"
                width={1280}
                height={320}
              />
              <div className={styles.swiperContent}>
                <h2>Guardians Of The Galaxy</h2>
                <p>{truncate(GuardiansOfTheGalaxytext, 150)}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              className={styles.image}
              src="/carousel-image/justice-league.jpg"
              alt="justice-league"
              width={1280}
              height={320}
            />
            <div className={styles.swiperContent}>
              <h2>Justice League</h2>
              <p>{truncate(JusticeLeaguetext, 150)}</p>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              className={styles.image}
              src="/carousel-image/spider-man.jpg"
              alt="spider-man"
              width={1280}
              height={320}
            />
            <div className={styles.swiperContent}>
              <h2>Spider-Man: Far from Home</h2>
              <p>{truncate(SpidermanText, 150)}</p>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              className={styles.image}
              src="/carousel-image/suicide-squad.jpg"
              alt="suicide-squad"
              width={1280}
              height={320}
            />
            <div className={styles.swiperContent}>
              <h2>The Suicide Squad</h2>
              <p>{truncate(SuicideSquadText, 150)}</p>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              className={styles.image}
              src="/carousel-image/thor-ragnarok.jpg"
              alt="thor-ragnarok"
              width={1280}
              height={320}
            />
            <div className={styles.swiperContent}>
              <h2>Thor: Ragnarok</h2>
              <p>{truncate(ThorText, 150)}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image
              className={styles.image}
              src="/carousel-image/eternals.jpg"
              alt="eternals"
              width={1280}
              height={320}
            />
            <div className={styles.swiperContent}>
              <h2>Eternals</h2>
              <p>{truncate(EternalsText, 150)}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.next}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" transform="rotate(90)">
          <path fill="white" d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
        </svg>
      </div>
    </>
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
