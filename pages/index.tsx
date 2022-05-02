import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "components/Layout";
import { HomeForm } from "components/SearchForm/HomeForm";
import { HomeProducts } from "ui/products/HomeProducts";

const Home: NextPage = ({ hits }: any) => {
  return (
    <>
      <Head>
        <title>Home - DWF M10 Desafio</title>
      </Head>

      <Layout>
        <>
          <HomeForm />

          <HomeProducts hits={hits} />
        </>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const { hits } = await (
    await fetch(
      'https://m9-desafio-jous.vercel.app/api/search?q=""&offset=0&limit=2',
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
  ).json();

  return {
    props: { hits },
  };
};

export default Home;
