import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/reviews";
import { User } from "../user/user";

export const Review = ({ id }) => {
   const review = useSelector((state) => selectReviewById(state, id));
   const {userId, text, rating} = review || {};
  return (
    <>
      <User id ={userId} />: {text} <span style={{ color: "red" }}>{rating}</span>
    </>
  );
};
