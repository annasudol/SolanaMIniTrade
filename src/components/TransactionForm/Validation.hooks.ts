import { useFormik } from "formik";
import { useMemo } from "react";
import toast from "react-hot-toast";
import * as yup from "yup";

export const useForm = () => {

  const validationSchema = yup.object({
    address: yup.string().required("Solana wallet address required")
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

  const errors = useMemo(
    () => ({
      address: {
        error: formik.touched.address && formik.errors.address
      }
    }),
    [formik.touched, formik.errors]
  );

  return { formik, errors };
};
