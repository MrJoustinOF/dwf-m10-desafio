import { ProductCard } from "ui/cards/ProductCard";
import styles from "styles/Products.module.css";

type HomeProductsProps = {
  hits: any;
};

export const HomeProducts = ({ hits }: HomeProductsProps) => {
  return (
    <div className={styles.homeProducts_container}>
      <h3 className={styles.homeProducts_title}>Productos destacados</h3>

      <div className={styles.homeProducts}>
        {hits.map(({ objectID, price, title, img }: any) => (
          <ProductCard
            key={objectID}
            id={objectID}
            price={price}
            title={title}
            img={img}
          />
        ))}
      </div>
    </div>
  );
};
