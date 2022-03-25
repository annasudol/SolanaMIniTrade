import { Button, Input } from "@components";
import { useForm } from "./Validation.hooks";
import { WalletContext } from "@context";

export const TransactionForm: React.FC = () => {
  const { formik, errors } = useForm();
  
  const handleClick= async()=> formik.setFieldValue('amount', 2, false);
  return (
    <WalletContext.Consumer>
      {context=> {
        const { walletKey, balance } = context;
        const buttonIsdisabled = !errors.amount.error || !errors.address.error || !walletKey;
        return(
          <div className="sm:flex justify-center pt-12">
            <form className="w-full sm:w-1/2" onSubmit={formik.handleSubmit}>
              <Input
                type="number"
                step={0.1}
                disabled={!walletKey}
                {...formik.getFieldProps("amount")}
              
                fieldAttributesProps={{ error: walletKey && errors.amount.error, label: "Amount" }}
                placeholder="Min 0.02"
              >
                  <div className="absolute top-9 right-4">
                    <button onClick={handleClick} className="text-main-lightBrown mr-2">{balance ? 'max' : ''}</button>
                    <span className="uppercase text-gray-7 border-l border-gray-7 px-1">SOL</span>
                  </div>
                  </Input>
              <Input
                {...formik.getFieldProps("address")}
                fieldAttributesProps={{ error: walletKey && errors.address.error, label: "Solana Wallet Address" }}
                placeholder="Enter address here"
                disabled={!walletKey}
              />
        
              <Button onClick={()=> console.log('send')} disabled={buttonIsdisabled}>Send</Button>
            </form>
          </div>
        )
      }}
    </WalletContext.Consumer>
  );
};
function props(props: any): [any] {
  throw new Error("Function not implemented.");
}

