import { AppProps } from "next/app";
import Head from "next/head";
import { FC } from "react";
import { ContextProvider } from "../contexts/ContextProvider";
import { Header, Footer, TransactionForm } from "@components";
import Notifications from "../components/Notification";
import { appConfig } from "../utils/appConfig";
import { Toaster } from "react-hot-toast";

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
          <Notifications />

          <Header />
          <Component {...pageProps} />
          <TransactionForm />
          <Toaster
            toastOptions={{ className: "react-hot-toast" }}
            position="bottom-left"
          />
          <Footer />
        </div>
      </ContextProvider>
    </>
  );
};

export default App;
