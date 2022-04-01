import { Button, Input } from "@components";
import { useValidation } from "../hooks/useValidation";
import React from "react";

export const TransactionForm: React.FC = () => {
  const { formik, errors } = useValidation();
  
  const [loading, setLoading] = React.useState(false);
  const handleSend = () => {
    setLoading(true);
  };

  return (
    <div className="sm:flex justify-center pt-12">
      <form className="w-full sm:w-1/2" onSubmit={formik.handleSubmit}>
        <Input
          type="number"
          step={0.1}
          disabled={!walletKey}
          {...formik.getFieldProps("amount")}
          fieldAttributesProps={{
            error: walletKey && errors.amount.error,
            label: "Amount",
          }}
          placeholder="Min 0.02"
        >
          <div className="absolute top-9 right-4">
            {balance !== undefined && (
              <button
                onClick={handleClick}
                className="text-main-lightBrown mr-2"
                type="submit"
              >
                max
              </button>
            )}
            <span className="uppercase text-gray-7 border-l border-gray-7 px-1">
              SOL
            </span>
          </div>
        </Input>
        <Input
          {...formik.getFieldProps("address")}
          fieldAttributesProps={{
            error: walletKey && errors.address.error,
            label: "Solana Wallet Address",
          }}
          placeholder="Enter address here"
          disabled={!walletKey}
        />
        <Button
          onClick={handleSend}
          disabled={buttonIsdisabled}
          loading={loading}
        >
          Send
        </Button>
      </form>
    </div>
  );
};
function props(props: any): [any] {
  throw new Error("Function not implemented.");
}
