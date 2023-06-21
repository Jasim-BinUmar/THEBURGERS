import styles from "../styles/Add.module.css";
import { useRouter } from "next/router";

const AdminPageButton = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push("/admin");
      }}
      className={styles.mainAddButton}
    >
      Admin Page
    </div>
  );
};

export default AdminPageButton;
