import { AppProps } from "next/app";
import Head from "next/head";
import { FC } from "react";
import { ContextProvider } from "../contexts/ContextProvider";
import { Header, Footer, TransactionForm, NotificationList } from "@components";
import { appConfig } from "@utils";

require("@solana/wallet-adapter-react-ui/styles.css");
require("../styles/globals.css");

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>{appConfig.title}</title>
      </Head>
      <ContextProvider>
        <div className="flex flex-col h-screen bg-main-gray-1">
          <NotificationList />
          <Header />
          <Component {...pageProps} />
          <TransactionForm />
          <Footer />
        </div>
      </ContextProvider>
    </>
  );
};

export default App;
