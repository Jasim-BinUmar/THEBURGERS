import styles from "../styles/Add.module.css";
import { useRouter } from "next/router";
const AdminLogout = ({ admin }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        admin = false;
      }}
      className={styles.mainAddButton}
    >
      Logout Admin
    </div>
  );
};

export default AdminLogout;
