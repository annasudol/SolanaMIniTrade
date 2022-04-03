import { useRouter } from "next/router";
import { EndpointTypes } from "@interfaces";

export default function useQueryContext() {
  const router = useRouter();
  const { cluster } = router.query;

  const endpoint = cluster ? (cluster as EndpointTypes) : "mainnet";
  console.log(endpoint, "endpoint");
  const hasClusterOption = endpoint !== "mainnet";
  const fmtUrlWithCluster = (url: string | string[]) => {
    if (hasClusterOption) {
      const mark = url.includes("?") ? "&" : "?";
      return decodeURIComponent(`${url}${mark}cluster=${endpoint}`);
    }
    return url;
  };

  return {
    fmtUrlWithCluster,
  };
}
