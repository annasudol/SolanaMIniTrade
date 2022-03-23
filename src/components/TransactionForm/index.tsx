import { Button, Input } from "@components";

import { useForm } from "./Validation.hooks";

export const TransactionForm: React.FC = () => {
  const { formik, errors } = useForm();
    console.log(errors, 'errors')
  return (
    <form className="w-full sm:w-1/2" onSubmit={formik.handleSubmit}>
      <Input
        {...formik.getFieldProps("address")}
        fieldAttributesProps={{ ...errors.address, label: "Solana Wallet Address" }}
        placeholder="Enter address here"
      />

      <Button onClick={()=> console.log('send')}>Send</Button>
    </form>
  );
};
