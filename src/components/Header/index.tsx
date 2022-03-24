import { WalletContext } from "@context"
export const Header = () => {

  return (
    <WalletContext.Consumer>
      {context=> {
        const {provider, walletKey, connectWallet, disconnectWallet} = context;
        return(
          <header className='h-22 w-full'>
            <h1 className="text-5xl uppercase text-center text-gray-900">Send Sol</h1>
            {provider && !walletKey && (
              <button
                style={{
                  fontSize: "16px",
                  padding: "15px",
                  fontWeight: "bold",
                  borderRadius: "5px",
                }}
                onClick={connectWallet}
              >
                Connect to Phantom Wallet
              </button>
            )}

            {provider && walletKey && (
              <div>
                <p>Connected account {walletKey}</p>
                <button
                  style={{
                    fontSize: "16px",
                    padding: "15px",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    margin: "15px auto",
                  }}
                  onClick={disconnectWallet}
                >
                  Disconnect
                </button>
              </div>
            )}
            {!provider && (
              <p>
                No provider found. Install{" "}
                <a href="https://phantom.app/">Phantom Browser extension</a>
              </p>
            )}
          </header>
        )
      }}
    </WalletContext.Consumer>
  );
}
