import { useForm } from "./use-form";
import { Counter } from "../counter/counter";

import styles from "./review-form.module.css"

export const ReviewForm = () => {
  const { form, setName, setText, incrementRating, decrementRating, clear } = useForm();
  const { name, text, rating } = form;

  return (
    <div className={styles.root}>
      <h3>Leave your review!</h3>
      <div>
        <span className={styles.inputLabel}>Name</span>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e)}
        />
      </div>
      <br></br>
      <div>
        <span className={styles.inputLabel}>Text</span>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e)}
        />
      </div>
      <br></br>
      <Counter
        increment={incrementRating}
        decrement={decrementRating}
        value={rating}
      />
      <br></br>
      <button className={styles.clear} onClick={clear} >
        clear
      </button>
    </div>
  );
};