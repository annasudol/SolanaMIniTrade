import { Button, Input } from "@components";
import { useWallet } from "@solana/wallet-adapter-react";
import { useValidation } from "../hooks/useValidation";
import React from "react";
import useUserSOLBalanceStore from "../stores/useUserSOLBalanceStore";

export const TransactionForm: React.FC = () => {
  const { publicKey } = useWallet();
  const { formik, errors, loading } = useValidation();

  const balance = useUserSOLBalanceStore((s) => s.balance);
  const handleAddMaxValue = async () =>
    await formik.setFieldValue("amount", balance, false);
  const buttonIsdisabled =
    !!errors.amount.error || !!errors.address.error || !publicKey;

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
        <Button type="submit" disabled={buttonIsdisabled} loading={loading}>
          Send
        </Button>
      </form>
    </div>
  );
};
