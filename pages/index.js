import styles from "@/styles/Home.module.css";
import CarouselSection from "@/components/carousel-section";
import PopularSection from "@/components/popular-section";

export default function Home() {
  
  return (
    <div className={styles.main}>
      <CarouselSection />
      <PopularSection />
    </div>
  );
}
