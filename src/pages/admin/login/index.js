
import React, { useState } from "react";
import AdminLayout from "@/components/Layouts/AdminLayout";
import styles from "@/styles/LoginPage.module.css";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { getUserInfo, storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/router";
const LoginPage = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const { Role } = getUserInfo();
console.log(Role)
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit =async (event) => {
    event.preventDefault();
    try {
      const res = await userLogin({Email,password}).unwrap();
      console.log(res);
      if (res?.accessToken) {
        router.push("/admin/dashboard");
      }
      storeUserInfo({ accessToken: res?.accessToken });
      // fetch('http://localhost:5000/api/v1/auth/login', {
      //       method: 'POST',
      //       headers: {
      //           'content-type': 'application/json'
      //       },
      //       body: JSON.stringify({Email,password})
      //   })
      //       .then(res => res.json())
      //       .then(data => console.log(data))
      // setEmail('');
      // setPassword('');
    } catch (error) {
      console.error("Error occurred while logging in:", error);
      // Handle the error (e.g., display an error message to the user)
    }
  };

  return (
    <div className={styles.login_container}>
      <form className={styles.login_form} onSubmit={handleSubmit}>
        <h4 className={styles.brand_title}>Logon</h4>
        <div>
          <label>Email</label> <br />
          <input type="text" value={Email} onChange={handleEmailChange}/>
        </div>
        <div>
          <label>Password</label> <br />
          <input type="password" value={password} onChange={handlePasswordChange}/>
        </div>
        <div className="flex justify-center">
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
