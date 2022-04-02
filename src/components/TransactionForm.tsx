import { Button, Input } from "@components";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useValidation } from "../hooks/useValidation";
import React, { useMemo, useCallback } from "react";
import useUserSOLBalanceStore from '../stores/useUserSOLBalanceStore';
import { notify } from "@utils";
import { PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';

export const TransactionForm: React.FC = () => {
  const { formik, errors } = useValidation();
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const [loading, setLoading] = React.useState(false);
  const balance = useUserSOLBalanceStore((s) => s.balance);
  const handleAddMaxValue= async()=> await formik.setFieldValue('amount', balance, false);
  const buttonIsdisabled = !!errors.amount.error || !!errors.address.error || !publicKey;

  const handleSend = useCallback(async () => {
    setLoading(true);
    let signature: TransactionSignature = '';
    try {
      const transaction = new Transaction().add(
          SystemProgram.transfer({
              fromPubkey: publicKey,
              toPubkey: new PublicKey(formik.getFieldProps("address")),
              lamports: formik.getFieldProps("amount") * LAMPORTS_PER_SOL,
          })
      );

      signature = await sendTransaction(transaction, connection);

      await connection.confirmTransaction(signature, 'confirmed');
      notify({ type: 'success', message: 'Transaction successful!', txid: signature });
    } catch (error: any) {
        notify({ type: 'error', message: `Transaction failed!`, description: error?.message, txid: signature });
        console.log('error', `Transaction failed! ${error?.message}`, signature);
        return;
    }
  }, [publicKey, notify, connection, sendTransaction]);

  return (
    <div className="sm:flex justify-center pt-12">
      <form className="w-full sm:w-1/2" onSubmit={formik.handleSubmit}>
        <Input
          type="number"
          step={0.1}
          disabled={!publicKey}
          {...formik.getFieldProps("amount")}
          fieldAttributesProps={{
            error: publicKey && errors.amount.error,
            label: "Amount",
          }}
          placeholder="Min 0.02"
        >
          <div className="absolute top-9 right-4">
            {publicKey && balance !== undefined && (
              <button
                onClick={handleAddMaxValue}
                className="text-main-yellow mr-2"
                type="submit"
              >
                max
              </button>
            )}
            <span className="uppercase text-main-gray-3 border-l border-main-yellow px-2 font-thin">
              SOL
            </span>
          </div>
        </Input>
        <Input
          {...formik.getFieldProps("address")}
          fieldAttributesProps={{
            error: publicKey && errors.address.error,
            label: "Solana Wallet Address",
          }}
          placeholder="Enter address here"
          disabled={!publicKey}
        />
        <Button onClick={handleSend} disabled={buttonIsdisabled} loading={loading}>Send</Button>
      </form>
    </div>
  );
};
function props(props: any): [any] {
  throw new Error("Function not implemented.");
}
