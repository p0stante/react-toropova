import { Counter } from "../counter/counter";

export const Dish = ({name, price }) => {
    return (
        <li >{name} / {price} $ <Counter /></li>
    );
  };