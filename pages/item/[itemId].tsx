import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "components/Layout";
import { ShowItem } from "components/ShowItem";

const ItemPage: NextPage = ({ desc, img, id, price, stock, title }: any) => {
  return (
    <>
      <Head>
        <title>Item - DWF M10 Desafio</title>
      </Head>

      <Layout>
        <ShowItem
          desc={desc}
          img={img}
          id={id}
          price={price}
          stock={stock}
          title={title}
        />
      </Layout>
    </>
  );
};

export const getStaticPaths = async () => {
  const { hits } = await (
    await fetch(
      'https://m9-desafio-jous.vercel.app/api/search?q=""&offset=0&limit=25'
    )
  ).json();

  const paths = hits.map(({ objectID: itemId }: any) => ({
    params: { itemId },
  }));

  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async (context: any) => {
  const {
    params: { itemId },
  } = context;

  const {
    desc,
    img,
    objectID: id,
    price,
    stock,
    title,
  } = await (
    await fetch(`https://m9-desafio-jous.vercel.app/api/products/${itemId}`)
  ).json();

  return {
    props: { desc, img, id, price, stock, title },
  };
};

export default ItemPage;
