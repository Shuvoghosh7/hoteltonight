import { ReactElement, ReactNode } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

import styles from "@/styles/LoginPage.module.css";

const Form = ({ children, submitHandler, defaultValues }) => {
  const formConfig= {};

  if (!!defaultValues) formConfig["defaultValues"] = defaultValues;

  const methods = useForm(formConfig);

  const { handleSubmit, reset } = methods;

  const onSubmit = (data) => {
    submitHandler(data);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.login_form}>{children}</form>
    </FormProvider>
  );
};

export default Form;