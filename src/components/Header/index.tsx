import { WalletContext } from "@context";
import { Button } from "@components";
import { trimText } from "@utils"
export const Header = () => {

  return (
    <WalletContext.Consumer>
      {context=> {
        const {provider, walletKey, connectWallet, disconnectWallet} = context;
        return(
          <header className='h-22 w-full'>
            <h1 className="text-5xl uppercase text-center text-gray-900">Send Sol</h1>
           <div className="flex justify-center">
           {provider && !walletKey && (
              <Button onClick={connectWallet}>
                Connect to Phantom Wallet
              </Button>
            )}

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
