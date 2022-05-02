import Link from "next/link";
import styles from "styles/Products.module.css";

type ProductCardProps = {
  id: string;
  price: string;
  title: string;
  img: string;
};

export const ProductCard = ({ id, price, title, img }: ProductCardProps) => {
  return (
    <div className={styles.productCard_container}>
      <Link href={`/item/${id}`}>
        <div className={styles.productCard}>
          <img
            src={img}
            alt="product thumbnail"
            className={styles.productCard_thumbnail}
          />

          <div className={styles.productCard_info}>
            <p>{title}</p>

            <h3>${price}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};
