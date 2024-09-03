import styles from "../button/button.module.css";
import { Button } from "../button/button";

export const Counter = ({ value, increment, decrement }) => {

  return (
    <div>
      <Button  className={styles.root} onClick={increment}>+</Button>
      {value}
      <Button className={styles.root} onClick={decrement}>-</Button>
    </div>
  );
};
