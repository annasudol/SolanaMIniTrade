import { useEffect } from "react";
import useNotificationStore from "../stores/useNotificationStore";
import { TransactionLink } from "@components";
import Image from "next/image";
import errorIcon from "./img/error.png";
import successIcon from "./img/success.png";
import cancelIcon from "./img/x.png";

export const NotificationList = () => {
  const { notifications, set: setNotificationStore } = useNotificationStore(
    (s) => s
  );
  const reversedNotifications = [...notifications].reverse();

  return (
    <div className="z-20 fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 border-main-yellow">
      <div className="flex flex-col w-full">
        {reversedNotifications.map((n, idx) => (
          <Notification
            key={`${n.message}${idx}`}
            type={n.type}
            message={n.message}
            description={n.description}
            txid={n.txid}
            onHide={() => {
              setNotificationStore((state: any) => {
                const reversedIndex = reversedNotifications.length - 1 - idx;
                state.notifications = [
                  ...notifications.slice(0, reversedIndex),
                  ...notifications.slice(reversedIndex + 1),
                ];
              });
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Notification = ({ type, message, description, txid, onHide }) => {
  useEffect(() => {
    const id = setTimeout(() => {
      onHide();
    }, 10000);

    return () => {
      clearInterval(id);
    };
  }, [onHide]);

  return (
    <div className="max-w-sm w-full bg-bkg-1 shadow-lg rounded-md mt-2 pointer-events-auto ring-1 ring-main-yellow p-2 mx-4 mb-12 overflow-hidden">
      <div className={`p-4`}>
        <div className={`flex items-center`}>
          <div className={`flex-shrink-0 mr-2`}>
            {type === "success" ? (
              <Image
                src={successIcon}
                alt={type}
                width="30px"
                height="30px"
                layout="fixed"
              />
            ) : (
              <Image
                src={errorIcon}
                alt={type}
                width="30px"
                height="30px"
                layout="fixed"
              />
            )}
          </div>
          <div className="ml-2 w-0 flex-1">
            {message && (
              <div className="font-bold text-fgd-1 text-main-yellow">
                {message}
              </div>
            )}
            {description && (
              <p className={`mt-0.5 text-sm text-fgd-2 text-main-yellow`}>
                {description}
              </p>
            )}
            {txid && (
              <div className="flex flex-row">
                <TransactionLink txid={txid} />
              </div>
            )}
          </div>
          <div className="ml-4 flex-shrink-0 self-start flex">
            <button
              onClick={() => onHide()}
              className="bg-bkg-2 default-transition rounded-md inline-flex text-fgd-3 hover:text-fgd-4 focus:outline-none"
            >
              <Image
                src={cancelIcon}
                alt={type}
                width="20px"
                height="20px"
                layout="intrinsic"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
