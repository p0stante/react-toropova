import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progress-bar/progress-bar";
import { ThemeButton } from "../theme-button/theme-button";
import { AuthButton } from "../auth-button/auth-context";

import styles from "./layout.module.css"

export const Layout = ({ children }) => {
  return (
    <div>
      <ProgressBar />
      <div class={styles.root}><ThemeButton />
      <AuthButton/></div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
