import { useState } from "react";
import { Restaurant } from "../restaurant/restaurant";
import { RestaurantTab } from "../restaurant-tab/restaurant-tab";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants";

import styles from "./restaurants-page.module.css";

export const RestaurantsPage = ({ title }) => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantsIds[0]
  );

  const handleSetActiveRestaurantId = (id) => {
    if (activeRestaurantId === id) {
      return;
    }

    setActiveRestaurantId(id);
  };

  return (
    <div className={styles.root}>
      <h1>{title}</h1>

      {restaurantsIds.map((id) => (
        <RestaurantTab
          key={id}
          restaurantId={id}
          onClick={() => handleSetActiveRestaurantId(id)}
          isActive={id === activeRestaurantId}
        />
      ))}

      {activeRestaurantId && <Restaurant restaurantId={activeRestaurantId} />}
    </div>
  );
};
