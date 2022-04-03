import { AppProps } from "next/app";
import Head from "next/head";
import { FC } from "react";
import { ContextProvider } from "../contexts/ContextProvider";
import { Header, Footer, NotificationList } from "@components";
import { appConfig } from "@utils";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

require("@solana/wallet-adapter-react-ui/styles.css");
require("../styles/globals.css");

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const network = WalletAdapterNetwork.Devnet;
  return (
    <>
      <Head>
        <title>{appConfig.title}</title>
      </Head>
      <ContextProvider network={network}>
        <div className="flex flex-col h-screen bg-main-gray-1">
          <NotificationList />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </ContextProvider>
    </>
  );
};

export default App;
