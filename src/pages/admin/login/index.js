
import React from "react"
import Form from "@/components/Forms/Form";
import styles from "@/styles/LoginPage.module.css";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { useRouter } from "next/router";
import { storeUserInfo } from "@/services/auth.service";

const LoginPage = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const res = await userLogin({ ...data }).unwrap();
      console.log(res);
      if (res?.accessToken) {
        router.push("/admin/dashboard");
      }
      storeUserInfo({ accessToken: res?.accessToken });

      // console.log(res);
    } catch (err) {
      console.error(err.message);
    }
  };


  return (
    <div className={styles.login_container}>
      <Form submitHandler={onSubmit}>
        <h4 className={styles.brand_title}>Admin Login</h4>
        <div>
          <FormInput name="Email" type="text" size="large" label="Email" />
        </div>

        <div>
          <FormInput
            name="password"
            type="password"
            size="large"
            label="Password"
          />
        </div>
        <div className="flex justify-center">
          <button type="primary" >
            Login
          </button>
        </div>
      </Form>

    </div>
  )
};

export default LoginPage;
