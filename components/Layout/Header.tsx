import Link from "next/link";
import { useState } from "react";
import { MobileNav } from "./MobileNav";
import { ButtonLink } from "ui/buttons/ButtonLink";
import { Burguer } from "ui/icons/Burguer";
import { ShoppingCart } from "../../ui/icons/ShoppingCart";
import { SearchForm } from "components/SearchForm";

import styles from "styles/Layout.module.css";
import responsive from "styles/Responsive.module.css";

type HeaderProps = {
  auth: any;
};

export const Header = ({ auth }: HeaderProps) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleMobileNav = () => setShowMobileNav((state) => !state);

  return (
    <div className={styles.header_container}>
      <div className={styles.header}>
        <Link href="/">
          <div className={styles.brand}>
            <ShoppingCart />
            <p style={{ marginLeft: "7px" }}>Compralo</p>
          </div>
        </Link>

        <SearchForm />

        {auth ? (
          <div className={styles.nav_auth}>
            <div>
              <Link href="/profile">
                <p
                  className={styles.nav_auth_email}
                >{`${auth.name} ${auth.lastname}`}</p>
              </Link>

              <Link href="/logout">
                <p className={styles.nav_auth_logout}>Cerrar sesión</p>
              </Link>
            </div>
          </div>
        ) : (
          <ButtonLink color="pink" text="Ingresar" to="/signin" />
        )}

        <div
          className={responsive.hiddenDesktop}
          style={{ cursor: "pointer" }}
          onClick={handleMobileNav}
        >
          <Burguer />
        </div>

        {showMobileNav && <MobileNav onClose={handleMobileNav} auth={auth} />}
      </div>

      <SearchForm mobile />
    </div>
  );
};
