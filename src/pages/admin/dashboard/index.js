
import AdminLayout from "@/components/Layouts/AdminLayout";
import Dashboard from "@/components/UI/Admin/Dashboard/Dashboard";
import styles from "@/styles/Dashboard.module.css";
const AdminDashboard = () => {

    return (
        <div className={styles.dashboard_container}>
            <Dashboard />
        </div>
    )
}

export default AdminDashboard;

AdminDashboard.getLayout = function getLayout(page) {
    return <AdminLayout>{page}</AdminLayout>;
};
