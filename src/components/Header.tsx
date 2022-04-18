import { FC } from "react";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useAutoConnect } from "../contexts/AutoConnectProvider";
import clsx from "clsx";

export const Header: FC = () => {
  const { autoConnect, setAutoConnect } = useAutoConnect();

  const classes = clsx(
    "text-gray-300 text-sm text-PTSans ml-2",
    {
      "opacity-70 line-through" : !autoConnect,
    }
  );
  return (
    <header className="navbar md:mb-2 bg-main-gray-2 flex justify-end">
      <div className="w-96 flex justify-end">
        <div className="h-16 pt-4">
          <div className="flex justify-center">
            <div className="form-check form-switch">
              <label className="flex items-center cursor-pointer relative mt-1 mr-2">
                <input
                  type="checkbox"
                  className="sr-only"
                  onChange={(e) => setAutoConnect(e.target.checked)}
                  checked={autoConnect}
                />
                <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
          
                <span className={classes}>
                  Autoconnected
                </span>
              </label>
            </div>
          </div>
        </div>
        <WalletMultiButton className="" />
      </div>
    </header>
  );
};
