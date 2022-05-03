import { useRouter } from "next/router";
import { SubmitBtn } from "ui/buttons/SubmitBtn";
import { fetcher } from "utils/fetcher";

import styles from "styles/Products.module.css";

export const ShowItem = ({ desc, img, id, price, stock, title }: any) => {
  const router = useRouter();

  const handlePurchase = async (e: any) => {
    e.preventDefault();

    if (!localStorage.getItem("token")) {
      router.push("/");
    }

    const apiUrl =
      "https://m9-desafio-jous.vercel.app/api/order?productId=" + id;

    const { url } = await fetcher(apiUrl, "POST");

    router.push(url);
  };

  return (
    <div className={styles.item_container}>
      <div className={styles.item_thumbnail_container}>
        <img src={img} alt="item thumbnail" className={styles.item_thumbnail} />
      </div>

      <div className={styles.item_info}>
        <h2>{title}</h2>
        <p className={styles.item_info_price}>${price}</p>

        {stock > 0 ? (
          <form onSubmit={handlePurchase}>
            <SubmitBtn
              text="Comprar"
              color="lightBlue"
              style={{ fontSize: "25px", fontWeight: "bold" }}
            />
          </form>
        ) : (
          <h2 style={{ color: "red" }}>No hay stock</h2>
        )}

        <p className={styles.item_info_desc}>Descripcion: {desc}</p>
      </div>
    </div>
  );
};
