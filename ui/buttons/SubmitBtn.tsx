import { capitalizeWord } from "utils/capitalizeWord";

import styles from "styles/Buttons.module.css";
import colors from "styles/Colors.module.css";

type SubmitBtnProps = {
  color: string;
  text: string;
  style?: any;
};

export const SubmitBtn = ({ color, text, style }: SubmitBtnProps) => {
  const capitalizedColor = capitalizeWord(color);
  const background = colors["bg" + capitalizedColor];

  return (
    <input
      className={`${styles.submitBtn} ${background}`}
      type="submit"
      value={text}
      style={style}
    />
  );
};
