import {useCount} from "./use-counter";
import {Counter} from "../counter/counter";

export const DishCounter = () =>{
    const { value, increment, decrement } = useCount();

    return <Counter value={value} increment={increment} decrement={decrement}/>
};

