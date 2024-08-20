import { Dish } from "../dish/dish";

export const Menu = ({menu}) => {
    return (
      <ul>
        {menu?.map((dish) => (
        <Dish name={dish.name} price={dish.price}/>
      ))}
      </ul>
    );
  };