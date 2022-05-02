import Link from "next/link";
import { capitalizeWord } from "utils/capitalizeWord";

import styles from "styles/Buttons.module.css";
import colors from "styles/Colors.module.css";
import responsive from "styles/Responsive.module.css";

type ButtonLinkProps = {
  color: string;
  text: string;
  to: string;
};

export const ButtonLink = ({ color, text, to }: ButtonLinkProps) => {
  const capitalizedColor = capitalizeWord(color);
  const background = colors["bg" + capitalizedColor];

  return (
    <Link href={to}>
      <div
        className={`${styles.button} ${responsive.hiddenMobile} ${background}`}
      >
        {text}
      </div>
    </Link>
  );
};
