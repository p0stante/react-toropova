import { Review } from "../review/review";

export const Reviews = ({ reviews }) => {
  return (
    <ul>
      {reviews?.map((review) => (
        <Review user={review.user} text={review.text} />
      ))}
    </ul>
  );
};
