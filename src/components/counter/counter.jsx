import styles from "../button/button.module.css";

export const Counter = ({ value, increment, decrement }) => {

  return (
    <div>
      <button  className={styles.root} onClick={increment}>+</button>
      {value}
      <button className={styles.root} onClick={decrement}>-</button>
    </div>
  );
};
