import CarouselSection from "@/components/carousel-section";
import PopularSection from "@/components/popular-section";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <CarouselSection />
      <PopularSection />
    </div>
  );
}
