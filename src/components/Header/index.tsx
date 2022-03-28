import { WalletContext } from "@context";
import { Button } from "@components";
import { trimText } from "@utils"
// import { NetworkTypes } from "@interfaces";
export const Header = () => {

  return (
    <WalletContext.Consumer>
      {context=> {
        const {provider, walletKey, connectWallet, disconnectWallet, network, setNetwork } = context;
        return(
          <header className='h-22 w-full'>
            <h1 className="text-5xl uppercase text-center text-gray-900">Send Sol</h1>
            <div className="flex justify-center w-full">
              <div>
              {provider && !walletKey && (
                <Button onClick={connectWallet}>
                  Connect to Phantom Wallet
                </Button>
              )}
              {provider && walletKey && (
                  <Button onClick={disconnectWallet}>
                    {trimText(walletKey as unknown as string)}
                  </Button>
              )}
              {!provider && (
                <p>
                  No provider found. Install{" "}
                  <a href="https://phantom.app/">Phantom Browser extension</a>
                </p>
              )}
              {/* <SelectInput id="Network" options={[{ label: NetworkTypes.devnet, value: NetworkTypes.devnet }, { label: "mainet", value: NetworkTypes.mainet }, { label: NetworkTypes.testnet, value: NetworkTypes.testnet } ]} selectedValue={network} onChangeSelect={(network) => setNetwork(network)} /> */}
              </div>
           </div>
          </header>
        )
      }}
    </WalletContext.Consumer>
  );
}
