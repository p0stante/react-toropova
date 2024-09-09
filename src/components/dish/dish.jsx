import { DishCounter } from "../dish-counter/dish-counter";
import { useAuth } from "../auth-context/use-auth";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes";

export const Dish = ({id}) => {
    const dish = useSelector((state) => selectDishById(state, id));
  const { name, price } = dish || {};
    const { auth } = useAuth();
    return (
        <>{name} / {price} $  {auth.isAuthorized && <DishCounter/>}</>
    );
  };