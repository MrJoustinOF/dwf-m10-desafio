import styles from "styles/Form.module.css";

type FormProps = {
  // Notice that children must be one JSX Element, if there are 2 or more, get them into a fragment <></>
  children: JSX.Element;
  onSubmit: (any: any) => any;
};

export const Form = ({ children, onSubmit }: FormProps) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.form_content}>{children}</div>
    </form>
  );
};
