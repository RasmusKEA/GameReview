import "../static/home.css";
import ReviewMiniature from "../components/ReviewMiniature";
import FeaturedReview from "../components/FeaturedReview";
import "react-circular-progressbar/dist/styles.css";

const reviews = [
  {
    id: 1,
    Title: "This is the title",
    Date: "29-09-2022",
    Comments: 5,
    Rating: 8,
  },
  {
    id: 2,
    Title: "This is the title",
    Date: "29-09-2022",
    Comments: 5,
    Rating: 3,
  },
];

const featured = {
  Title: "This is the title",
  Rating: 8,
  Image: "https://picsum.photos/600/300",
  UnderTitle:
    "This is the longer undertitle, undertitle, undertitle, undertitle, undertitle, undertitle, undertitle",
};

export default function Home() {
  return (
    <div className="home">
      {
        <div className="featured-review">
          <FeaturedReview review={featured}></FeaturedReview>
        </div>
      }

      {reviews?.length > 0 ? (
        <div className="container">
          <div className="title">
            <h2>Latest review</h2>
          </div>
          {reviews.map((review) => (
            <ReviewMiniature review={review} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No reviews found</h2>
        </div>
      )}
    </div>
  );
}
