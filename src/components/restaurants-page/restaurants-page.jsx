import { useState } from "react";
import { restaurants } from "../../mock";
import { Restaurant } from "../restaurant/restaurant";
import { Tab } from "../tab/tab";

export const RestaurantsPage = ({ title }) => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(restaurants[0].id);

  const activeRestaurant = restaurants.find(({ id }) => id === activeRestaurantId);

  const handleSetActiveRestaurantId = (id) => {
    if (activeRestaurantId === id) {
      return;
    }

    setActiveRestaurantId(id);
  };

  return (
    <div>
      <h1>{title}</h1>

      {restaurants.map(({ name, id }) => (
        <Tab
          key={id}
          title={name}
          onClick={() => handleSetActiveRestaurantId(id)}
          isActive={id === activeRestaurantId}
        />
      ))}

      {activeRestaurant && (
        <Restaurant
        name={activeRestaurant.name}
        menu={activeRestaurant.menu}
        reviews={activeRestaurant.reviews}
      />
      )}
    </div>
  );
};
