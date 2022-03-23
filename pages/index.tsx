import * as React from 'react';
import { Main } from '@templates';
import { TransactionForm, WalletButton } from "@components"
const Home = (): React.ReactElement => {
  return (
    <Main>
      <TransactionForm />
      <WalletButton />
    </Main>
  );
};

export default Home;
