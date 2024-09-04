import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "./entities/restaurants";
import { reviewsSlice } from "./entities/reviews";
import {usersSlice} from "./entities/users";
import { dishesSlice } from "./entities/dishes";

export const store = configureStore({
    reducer: {
      [restaurantsSlice.name]: restaurantsSlice.reducer,
      [reviewsSlice.name]: reviewsSlice.reducer,
      [usersSlice.name]: usersSlice.reducer,
      [dishesSlice.name]: dishesSlice.reducer,
    },
  });