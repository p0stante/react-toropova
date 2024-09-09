import { Reviews } from "../reviews/reviews";
import { Menu } from "../menu/menu";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants";

export const Restaurant = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const { name, reviews: reviewsIds, menu: dishesIds } = restaurant;

  if (!name) {
    return null;
  }

  return (
    <section>
      <h2>{name}</h2>
      <h3>Меню</h3>
      {dishesIds.length ? <Menu dishesIds={dishesIds} /> : <div>нет меню</div>}
      <h3>Отзывы</h3>
      {reviewsIds.length ? (
        <Reviews reviewsIds={reviewsIds} />
      ) : (
        <div>нет отзывов</div>
      )}
    </section>
  );
};
