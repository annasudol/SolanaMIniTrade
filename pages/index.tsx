import * as React from 'react';
import { Main } from '@templates';
import { TransactionForm } from "@components"

const Home = (): React.ReactElement => {
  return (
    <Main>
      <TransactionForm />
    </Main>
  );
};

export default Home;
