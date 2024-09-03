import { RestaurantsPage } from "./components/restaurants-page/restaurants-page.jsx";
import { Layout } from "./components/layout/layout";
import { ThemeContextProvider } from "./components/theme-context/theme-context";
import { AuthContextProvider } from "./components/auth-context/auth-context";

import "./app.css";

export const App = () => {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <Layout>
          <RestaurantsPage title={"Рестораны"} />
        </Layout>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
};
