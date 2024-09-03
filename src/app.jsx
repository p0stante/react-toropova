import { RestaurantsPage } from "./components/restaurants-page/restaurants-page.jsx";
import { Layout } from "./components/layout/layout";

import "./app.css";

export const App = () => {
  return (
      <Layout>
        <RestaurantsPage title={'Рестораны'} />
      </Layout>
  );
};
