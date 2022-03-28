import { WalletContext } from "@context";
import { Button, SelectInput } from "@components";
import { trimText } from "@utils"
import { NetworkTypes } from "@interfaces";
export const Header = () => {

  return (
    <WalletContext.Consumer>
      {context=> {
        const {provider, walletKey, connectWallet, disconnectWallet, network,  } = context;
        return(
          <header className='h-22 w-full'>
            <h1 className="text-5xl uppercase text-center text-gray-900">Send Sol</h1>
           <div className="flex justify-center w-full border-2">
        <div>
          {provider && !walletKey && (
              <Button onClick={connectWallet}>
                Connect to Phantom Wallet
              </Button>
          )}
          <SelectInput options={[{ label: NetworkTypes.devnet, value: NetworkTypes.devnet }, { label: NetworkTypes.mainet, value: NetworkTypes.mainet }, { label: NetworkTypes.testnet, value: NetworkTypes.testnet } ]} selectedValue={network} onChangeSelect={(e) => console.log(e, "e")} />
        </div>

            {provider && walletKey && (
              <>
                {/* <p>Connected account {walletKey}</p> */}
                <Button onClick={disconnectWallet}>
                  {trimText(walletKey as unknown as string)}
                </Button>
              </>
            )}
            {!provider && (
              <p>
                No provider found. Install{" "}
                <a href="https://phantom.app/">Phantom Browser extension</a>
              </p>
            )}
           </div>
          </header>
        )
      }}
    </WalletContext.Consumer>
  );
}
