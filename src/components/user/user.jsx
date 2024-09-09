import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/users";

export const User = ({ id }) => {
    const user = useSelector((state) => selectUserById(state, id));
    const { name } = user || {};
    return (
     <span>{name}</span>
    );
  };
  