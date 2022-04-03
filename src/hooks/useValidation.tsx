import { useFormik } from "formik";
import { useMemo, useCallback, useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

import { notify } from "@utils";
import * as yup from "yup";
import { validateSolAddress } from "@utils";
import { PublicKey } from "@solana/web3.js";
import {
  LAMPORTS_PER_SOL,
  TransactionSignature,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";

export const useValidation = () => {
  const { sendTransaction, publicKey } = useWallet();
  const { connection } = useConnection();
  const [loading, setLoading] = useState(false);

  const validationSchema = yup.object({
    address: yup.string().required("Address is required"),
    amount: yup.number().min(0.02).required("Amount is required"),
  });

  const handleSend = useCallback(
    async (address: string, value: number) => {
      setLoading(true);

      let signature: TransactionSignature = "";
      try {
        const transaction = new Transaction().add(
          SystemProgram.transfer({
            fromPubkey: publicKey,
            toPubkey: new PublicKey(address),
            lamports: value * LAMPORTS_PER_SOL,
          })
        );

        signature = await sendTransaction(transaction, connection);
        await connection.confirmTransaction(signature, "confirmed");
        notify({
          type: "success",
          message: "Transaction successful!",
          txid: signature,
        });
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        notify({
          type: "error",
          message: "Transaction failed!",
          description: error?.message,
          txid: signature,
        });
        console.log(
          "error",
          `Transaction failed! ${error?.message}`,
          signature
        );
        return;
      }
    },
    [connection, sendTransaction]
  );

  const formik = useFormik({
    initialValues: {
      address: "",
      amount: "",
    },
    validationSchema,
    onSubmit: () => {
      return handleSend(formik.values.address, formik.values.amount);
    },
  });

  const errors = useMemo(
    () => ({
      address: {
        error:
          (formik.touched.address && formik.errors.address) ||
          (!validateSolAddress(formik.values.address) &&
            "Not valid solana address"),
      },
      amount: {
        error: formik.touched.amount && formik.errors.amount,
      },
    }),
    [formik.touched, formik.errors]
  );

  return { formik, errors, loading };
};
