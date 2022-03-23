import { useFormik } from "formik";
import { useMemo } from "react";
import toast from "react-hot-toast";
import * as yup from "yup";
import { validateSolAddress } from "@utils"

export const useForm = () => {

  const validationSchema = yup.object({
    address: yup.string().required("Address is required"),
    amount: yup.number().min(0.02).required("Amount is required"),
  });

  const formik = useFormik({
    initialValues: {
      address: "",
      amount: ""
    },
    validationSchema,
    onSubmit: () => {
      toast.success("Transaction is successfull");
    }
  });
  console.log(formik.values.address)

  const errors = useMemo(
    () => ({
      address: {
        error: formik.touched.address && formik.errors.address || !validateSolAddress(formik.values.address) && "Not valid solana address",
      },
      amount: {
        error: formik.touched.amount && formik.errors.amount
      }
    }),
    [formik.touched, formik.errors]
  );

  return { formik, errors };
};
