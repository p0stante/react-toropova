import { DishCounter } from "../dish-counter/dish-counter";
import { useAuth } from "../auth-context/use-auth";

export const Dish = ({name, price }) => {
    const { auth } = useAuth();
    return (
        <>{name} / {price} $  {auth.isAuthorized && <DishCounter/>}</>
    );
  };