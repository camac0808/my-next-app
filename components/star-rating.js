import StarSVG from "@/public/star.svg";
import styles from "@/styles/StarRating.module.css";

export default function StarRating({ vote_average, totalStars, fillColor, halfColor }) {

  // 별 평점
  const starRating = (vote_average, totalStars) => {
    const starRating = Math.round(vote_average) / 2;

    const starArr = Array.from({ length: totalStars }, (_, index) => {
      if (index < starRating) {
        return <StarSVG key={index} fill={fillColor} width={15} height={15} />;
      } else if (index === Math.ceil(starRating)) {
        return <StarSVG key={index} fill={halfColor} width={15} height={15} />;
      } else {
        return <StarSVG key={index} fill="none" stroke={fillColor} strokeWidth="2" width={15} height={15} />;
      }
    });

    return starArr;
  };

  return (
    <div className={styles.starRating}>
      {starRating(vote_average, totalStars)}
    </div>
  )
}