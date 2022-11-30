import "../static/home.css";
import ReviewMiniature from "../components/ReviewMiniature";
import FeaturedReview from "../components/FeaturedReview";
import "react-circular-progressbar/dist/styles.css";

export default function Home() {
  return (
    <div className="home">
      {
        <div className="featured-review">
          <FeaturedReview></FeaturedReview>
        </div>
      }
      <div className="container">
        <div className="title">
          <h2>Latest reviews</h2>
        </div>
        <ReviewMiniature />
      </div>
    </div>
  );
}
