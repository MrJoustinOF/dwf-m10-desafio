import styles from "styles/Form.module.css";

export const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={styles.loader}></div>
    </div>
  );
};
