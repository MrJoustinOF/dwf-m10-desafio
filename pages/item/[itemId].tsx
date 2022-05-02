import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "components/Layout";
import { ShowItem } from "components/ShowItem";

const ItemPage: NextPage = ({ item }: any) => {
  return (
    <>
      <Head>
        <title>Item - DWF M10 Desafio</title>
      </Head>

      <Layout>
        <ShowItem item={item} />
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
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context: any) => {
  const {
    params: { itemId },
  } = context;

  const item = await (
    await fetch(`https://m9-desafio-jous.vercel.app/api/products/${itemId}`)
  ).json();

  return {
    props: { item },
  };
};

export default ItemPage;
