import styles from "styles/Form.module.css";
import { capitalizeWord } from "utils/capitalizeWord";

type InputProps = {
  // Put label as lowercase 'cause it will automatically parsed also will be used for useForm hook
  label: string;
  showLabel?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
  value: any;
  onChange: (any: any) => any;
  style?: any;
};

export const Input = ({
  label,
  showLabel = true,
  placeholder,
  autoFocus = false,
  value,
  onChange,
  style,
}: InputProps) => {
  const capitalizedLabel = capitalizeWord(label);

  return (
    <div className={styles.input_container}>
      {showLabel && (
        <label htmlFor={label} className={styles.input_label}>
          {capitalizedLabel}
        </label>
      )}

      <input
        autoFocus={autoFocus}
        name={label}
        className={styles.input}
        placeholder={placeholder as string}
        value={value}
        onChange={onChange}
        style={style}
      />
    </div>
  );
};
