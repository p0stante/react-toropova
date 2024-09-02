import { Dish } from "../dish/dish";

export const Menu = ({menu}) => {
    return (
      <ul>
        {menu?.map((dish) => (
        <li><Dish name={dish.name} price={dish.price}/></li>
      ))}
      </ul>
    );
  };