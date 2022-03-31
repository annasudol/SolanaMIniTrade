import { FC } from "react";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useAutoConnect } from "../contexts/AutoConnectProvider";

export const Header: FC = () => {
  const { autoConnect, setAutoConnect } = useAutoConnect();

  return (
      <header className="navbar md:mb-2 bg-main-gray-2 flex justify-end">
        <div className="w-96 flex justify-end">
            <div className="form-control">
              <label className="cursor-pointer label">
                <p>Autoconnect</p>
                <input
                  type="checkbox"
                  checked={autoConnect}
                  onChange={(e) => setAutoConnect(e.target.checked)}
                  className="toggle ml-4"
                />
              </label>
            </div>
          <WalletMultiButton className="btn mr-4" />
        </div>
      </header>
  );
};
