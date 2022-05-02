import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "components/Layout";
import { ProductsResults } from "components/ProductsResults";

const Search: NextPage = () => {
  return (
    <>
      <Head>
        <title>Search - DWF M10 Desafio</title>
      </Head>

      <Layout>
        <ProductsResults />
      </Layout>
    </>
  );
};

export default Search;
