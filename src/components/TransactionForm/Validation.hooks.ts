import { useFormik } from "formik";
import { useMemo } from "react";
import toast from "react-hot-toast";
import * as yup from "yup";
import { validateSolAddress } from "@utils"

export const useForm = () => {

  const validationSchema = yup.object({
    address: yup.string().required("Address is required"),
  });

  const formik = useFormik({
    initialValues: {
      address: ""
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
      }
    }),
    [formik.touched, formik.errors]
  );

  return { formik, errors };
};
