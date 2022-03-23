import { Button, Input } from "@components";

import { useForm } from "./Validation.hooks";

export const TransactionForm: React.FC = () => {
  const { formik, errors } = useForm();
    const buttonIsdisabled = !errors.amount.error || !errors.address.error;
    console.log(buttonIsdisabled, 'buttonIsdisabled')
  return (
   <div className="sm:flex justify-center pt-12">
    <form className="w-full sm:w-1/2" onSubmit={formik.handleSubmit}>
      <Input
        type="number"
        step={0.1}
        {...formik.getFieldProps("amount")}
       
        fieldAttributesProps={{ ...errors.amount, label: "Amount" }}
        placeholder="Min 0.02"
      >
          <div className="absolute top-9 right-4">
            <span className="uppercase text-gray-7 border-l border-gray-7 px-1">SOL</span>
         </div>
          </Input>

      <Input
        {...formik.getFieldProps("address")}
        fieldAttributesProps={{ ...errors.address, label: "Solana Wallet Address" }}
        placeholder="Enter address here"
      />

      <Button onClick={()=> console.log('send')} disabled={buttonIsdisabled}>Send</Button>
    </form>
   </div>
  );
};