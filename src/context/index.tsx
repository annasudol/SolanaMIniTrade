import { createContext, useState, ReactNode, useEffect } from 'react';
type Props = {
  children: ReactNode;
};

import { PublicKey, Transaction, Cluster } from "@solana/web3.js";
import * as solanaWeb3 from '@solana/web3.js';
import { NetworkTypes } from '@interfaces';


type DisplayEncoding = "utf8" | "hex";
type PhantomEvent = "disconnect" | "connect" | "accountChanged";
type PhantomRequestMethod =
  | "connect"
  | "disconnect"
  | "signTransaction"
  | "signAllTransactions"
  | "signMessage";

interface ConnectOpts {
  onlyIfTrusted: boolean;
}

interface PhantomProvider {
  publicKey: PublicKey | null;
  isConnected: boolean | null;
  signTransaction: (transaction: Transaction) => Promise<Transaction>;
  signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>;
  signMessage: (
    message: Uint8Array | string,
    display?: DisplayEncoding
  ) => Promise<any>;
  connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
  disconnect: () => Promise<void>;
  on: (event: PhantomEvent, handler: (args: any) => void) => void;
  request: (method: PhantomRequestMethod, params: any) => Promise<unknown>;
}

interface WalletContextValues {
  provider?: PhantomProvider;
  walletKey?: PhantomProvider;
  connectWallet?: any;
  disconnectWallet?: any;
  balance?: number;
  network:Cluster,
  setNetwork?: any
}

export const WalletContext = createContext<WalletContextValues>({ provider: undefined,  walletKey: undefined, network: NetworkTypes.devnet });

export const WalletProvider: React.FunctionComponent<Props> = ({ children }) => {
  const [provider, setProvider] = useState<PhantomProvider | undefined>(undefined);
  const [walletKey, setWalletKey] = useState<PhantomProvider | undefined>(undefined);
  const [balance, setBalance] = useState<number>();
  const [network, setNetwork] = useState<Cluster>(NetworkTypes.devnet);

  const connection = new solanaWeb3.Connection(
    solanaWeb3.clusterApiUrl(network as Cluster),
    'confirmed',
  );

  const lamports = 0.000000001;

  /**
   * @description gets Phantom provider, if it exists
   */
  const getProvider = (): PhantomProvider | undefined => {
    if ("solana" in window) {
      // @ts-ignore
      const provider = window.solana as any;
      if (provider.isPhantom) return provider as PhantomProvider;
    }
  };

  /**
   * @description prompts user to connect wallet if it exists
   */
  const connectWallet = async () => {
    // @ts-ignore
    const { solana } = window;
    if (solana) {
      try {
        const response = await solana.connect();
        console.log("wallet account ", response.publicKey.toString());
        setWalletKey(response.publicKey.toString());
        const balance = await connection.getBalance(response.publicKey);
        setBalance(balance*lamports);
      } catch (err) {
        // { code: 4001, message: 'User rejected the request.' }
      }
    }
  };

  /**
   * @description disconnect Phantom wallet
   */
  const disconnectWallet = async () => {
    // @ts-ignore
    const { solana } = window;
    if (walletKey && solana) {
      await (solana as PhantomProvider).disconnect();
      setWalletKey(undefined);
    }
  };

  // detect phantom provider exists
  useEffect(() => {
    const provider = getProvider();

    if (provider) setProvider(provider);
    else setProvider(undefined);
  }, []);
  return (
    <WalletContext.Provider value={{ provider, walletKey, disconnectWallet, connectWallet, balance, network, setNetwork }}>
      {children}
    </WalletContext.Provider>
  );
};