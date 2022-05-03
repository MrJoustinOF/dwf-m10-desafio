import Link from "next/link";

import styles from "styles/Layout.module.css";

type MobileNav = {
  onClose: () => any;
  auth: any;
};

export const MobileNav = ({ onClose, auth }: MobileNav) => {
  return (
    <div className={styles.mobileNav}>
      <div className={styles.mobileNav_links__container}>
        <div>
          {auth ? (
            <Link href="/profile" passHref>
              <p className={styles.mobileNav_links}>Mi perfil</p>
            </Link>
          ) : (
            <Link href="/signin" passHref>
              <p className={styles.mobileNav_links}>Ingresar</p>
            </Link>
          )}

          <p className={styles.mobileNav_links} onClick={onClose}>
            Buscar
          </p>
        </div>
      </div>

      {auth && (
        <div className={styles.mobileNav_auth}>
          <div>
            <p
              className={styles.mobileNav_auth_email}
            >{`${auth.name} ${auth.lastname}`}</p>
            <Link href="/logout" passHref>
              <p className={styles.mobileNav_auth_logout}>Cerrar sesión</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
