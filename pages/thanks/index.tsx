import Head from "next/head";
import { Layout } from "components/Layout";
import { SuccessMark } from "ui/icons/SuccessMark";
import { useRouter } from "next/router";

const Thanks = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Thanks - DWF M10 Desafio</title>
      </Head>

      <Layout>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <div
              style={{
                margin: "50px 0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <SuccessMark />
            </div>

            <h2 style={{ margin: "25px 0" }}>Gracias por tu compra!</h2>

            <h3 style={{ margin: "25px 0" }}>
              Orden numero: {router.query.id}
            </h3>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Thanks;
