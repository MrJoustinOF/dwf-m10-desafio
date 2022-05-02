import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Layout } from "components/Layout";
import { MeForm } from "components/MeForm";

const Profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>Profile - DWF M10 Desafio</title>
      </Head>

      <Layout>
        <MeForm />
      </Layout>
    </>
  );
};

export default Profile;
