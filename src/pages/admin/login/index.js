import React from "react"
import AdminLayout from "@/components/Layouts/AdminLayout";
import styles from "@/styles/LoginPage.module.css";
const LoginPage = () => {
  return (
    <div className={styles.login_container}>
        <h1>Login</h1>
    </div>
  )
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
    return <AdminLayout>{page}</AdminLayout>;
};
