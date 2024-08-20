import { Reviews } from "../reviews/reviews";
import { Menu } from "../menu/menu";

export const Restaurant = ({ name, menu, reviews}) => {
  if (!name) {
    return null;
  }

  return (
    <section>
    <h2>{name}</h2>
    <h3>Меню</h3>
    {menu.length ? <Menu menu={menu} /> : <div>нет меню</div>}
    <h3>Отзывы</h3>
    {reviews.length ? <Reviews reviews={reviews} /> : <div>нет отзывов</div>}
    </section>
  );
};