import { Dish } from "../dish/dish";

export const Menu = ({menu}) => {
    return (
      <ul>
        {menu?.map((dish) => (
        <li key={dish.id}><Dish name={dish.name} price={dish.price}/></li>
      ))}
      </ul>
    );
  };