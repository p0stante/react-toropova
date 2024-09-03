import styles from './tab.module.css';

export const Tab = ({ title, onClick, isActive }) => {
    return (
      <button className={styles.root} disabled={isActive} onClick={onClick}>
        {title}
      </button>
    );
  };