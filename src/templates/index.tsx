import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { ReactNode } from 'react';
import { Header, Footer } from '@components';
import { WalletProvider } from "@context";

type IMainProps = {
  children: ReactNode;
};

export const Main: React.FunctionComponent<IMainProps> = ({ children }) => (
  <div className='relative container h-screen'>
    <WalletProvider>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Header />
      {children}
      <Footer />
    </WalletProvider>
  </div>
);
