import { useForm } from "./use-form";
import { Counter } from "../counter/counter";

export const ReviewForm = () => {
  const { form, setName, setText, incrementRating, decrementRating, clear } = useForm();
  const { name, text, rating } = form;

  return (
    <div>
      <div>
        <span>Name</span>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e)}
        />
      </div>
      <div>
        <span>Text</span>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e)}
        />
      </div>
      <Counter
        increment={incrementRating}
        decrement={decrementRating}
        value={rating}
      />
      <button onClick={clear} >
        clear
      </button>
    </div>
  );
};