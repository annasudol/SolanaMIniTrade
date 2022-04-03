import { FC } from "react";
import { getExplorerUrl } from "../utils/explorer";


interface TransactionLinkProps {
  txid: string;
}
export const TransactionLink: FC<TransactionLinkProps> = ({ txid }) => (
  <a
    href={getExplorerUrl(txid)}
    target="_blank"
    rel="noreferrer"
    className="flex flex-row link link-accent text-main-gray-3"
  >
    <svg
      className="flex-shrink-0 h-4 ml-2 mt-0.5 text-primary-light w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      ></path>
    </svg>
    <div className="flex mx-4">
      {txid.slice(0, 8)}...
      {txid.slice(txid.length - 8)}
    </div>
  </a>
);
