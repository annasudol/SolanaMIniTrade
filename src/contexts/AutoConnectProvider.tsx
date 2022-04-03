import { useLocalStorage } from "@solana/wallet-adapter-react";
import { createContext, FC, ReactNode, useContext } from "react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

export interface AutoConnectContextState {
  autoConnect: boolean;
  setAutoConnect(autoConnect: boolean): void;
  network: WalletAdapterNetwork;
}

export const AutoConnectContext = createContext<AutoConnectContextState>(
  {} as AutoConnectContextState
);

export function useAutoConnect(): AutoConnectContextState {
  return useContext(AutoConnectContext);
}

export const AutoConnectProvider: FC<{ children: ReactNode, network: WalletAdapterNetwork }> = ({
  children, network
}) => {
  const [autoConnect, setAutoConnect] = useLocalStorage("autoConnect", true);

  return (
    <AutoConnectContext.Provider value={{ autoConnect, setAutoConnect, network }}>
      {children}
    </AutoConnectContext.Provider>
  );
};
