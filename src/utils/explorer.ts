import { PublicKey } from "@solana/web3.js";
import { EndpointTypes } from "@interfaces";
import { useRouter } from "next/router";
export type ExploreUrlTypes = "tx" | "address" | "block";

export function getExplorerUrl(
  viewTypeOrItemAddress: "inspector" | PublicKey | string,
  itemType: ExploreUrlTypes = "tx"
): string {
  const getClusterUrlParam = () => {
    const router = useRouter();
    const { cluster } = router.query;
    console.log(cluster)
  //   const endpoint = cluster ? (cluster as EndpointTypes) : "mainnet";
  //   let cluster = "";
  //   if (endpoint === "localnet") {
  //     cluster = `custom&customUrl=${encodeURIComponent(
  //       "http://127.0.0.1:8899"
  //     )}`;
  //   } else if (endpoint === "https://api.devnet.solana.com") {
  //     cluster = "devnet";
  //   }
  //   console.log(cluster, "cluster");
  //   return cluster ? `?cluster=${cluster}` : "";
  };

  return `https://explorer.solana.com/${itemType}/${viewTypeOrItemAddress}${getClusterUrlParam()}`;
}
