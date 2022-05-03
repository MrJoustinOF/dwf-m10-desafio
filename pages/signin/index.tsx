import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import { AuthForm } from "components/AuthForm";
import { Layout } from "components/Layout";
import { useRouter } from "next/router";

const SignIn: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/");
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>Sign In - DWF M10 Desafio</title>
      </Head>

      <Layout>
        <AuthForm />
      </Layout>
    </>
  );
};

export default SignIn;
