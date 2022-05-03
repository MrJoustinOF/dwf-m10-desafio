import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetcher } from "utils/fetcher";
import { ProductCard } from "ui/cards/ProductCard";
import { Loader } from "ui/loader";
import { Form } from "ui/form";
import { SubmitBtn } from "ui/buttons/SubmitBtn";

import styles from "styles/Products.module.css";

export const ProductsResults = () => {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const limit = 3;

  const fetchProducts = useCallback(async () => {
    const {
      query: { q },
    } = router;
    const url = `https://m9-desafio-jous.vercel.app/api/search?q=${q}&offset=${offset}&limit=${limit}`;

    setIsLoading(true);

    const {
      hits,
      pagination: { total },
    } = await fetcher(url);

    setProducts(hits);
    setTotal(total);

    setIsLoading(false);
  }, [offset, router]);

  useEffect(() => {
    if (Object.keys(router.query).includes("q")) {
      fetchProducts();
    }
  }, [router.query, offset, fetchProducts]);

  const handleSeeMore = () => {
    setOffset(offset + limit);
  };

  const handleGoBack = () => {
    setOffset(offset - limit);
  };

  const handleNoResults = (e: any) => {
    e.preventDefault();

    router.push("/");
  };

  return isLoading ? (
    <div style={{ margin: "25px 0" }}>
      <Loader />
    </div>
  ) : products.length === 0 && total === 0 ? (
    <Form onSubmit={handleNoResults}>
      <>
        <h2 style={{ margin: "25px 0" }}>No hay resultados para tu busqueda</h2>
        <SubmitBtn
          color="blue"
          text="Volver a inicio"
          style={{ color: "white" }}
        />
      </>
    </Form>
  ) : (
    <div className={styles.products_results}>
      <p>
        {offset + products.length} resultados de {total}
      </p>

      <div className={styles.products_grid}>
        {products.map(({ objectID, price, title, img }: any) => (
          <ProductCard
            key={objectID}
            id={objectID}
            price={price}
            title={title}
            img={img}
          />
        ))}
      </div>

      <div className={styles.pagination_buttons}>
        {offset + products.length - limit > 0 && (
          <p onClick={handleGoBack} className={styles.pagination_button}>
            {"<"} anterior
          </p>
        )}

        {offset + limit < total && (
          <p onClick={handleSeeMore} className={styles.pagination_button}>
            ver más {">"}
          </p>
        )}
      </div>
    </div>
  );
};
