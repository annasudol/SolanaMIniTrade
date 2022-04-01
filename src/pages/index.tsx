import type { NextPage } from "next";
import Head from "next/head";
import { appConfig } from "@utils";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{appConfig.title}</title>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
      </Head>
    </>
  );
};

export default Home;
