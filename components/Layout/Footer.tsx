import Link from "next/link";
import { InstagramIcon } from "ui/icons/InstagramIcon";
import { TwitterIcon } from "ui/icons/TwitterIcon";

import styles from "styles/Layout.module.css";

type FooterProps = {
  auth: any;
};

export const Footer = ({ auth }: FooterProps) => {
  const handleGoToSearch = () => {
    window.scroll(0, 0);
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footer_links}>
        <ul className={styles.footer_navbar}>
          {auth ? (
            <Link href="/profile" passHref>
              <li className={styles.footer_links_items}>Mi perfil</li>
            </Link>
          ) : (
            <Link href="/signin" passHref>
              <li className={styles.footer_links_items}>Login</li>
            </Link>
          )}

          <li onClick={handleGoToSearch} className={styles.footer_links_items}>
            Buscar
          </li>

          {auth && (
            <Link href="/logout" passHref>
              <li className={styles.footer_links_items}>Cerrar sesión</li>
            </Link>
          )}
        </ul>

        <div className={styles.footer_networks_container}>
          <p className={styles.footer_links_items} style={{ cursor: "auto" }}>
            Redes
          </p>
          <p
            className={`${styles.footer_links_items} ${styles.footer_networks}`}
          >
            <TwitterIcon />
            My E-commerce
          </p>

          <p
            className={`${styles.footer_links_items} ${styles.footer_networks}`}
          >
            <InstagramIcon />
            My E-commerce
          </p>
        </div>
      </div>

      <p className={styles.footer_brand}>&#169;2022 Joustin Ortiz</p>
    </div>
  );
};
