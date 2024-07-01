import styles from "./PageNotFound.module.css";

import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div>Page Not Found</div>
        <Link to="/products">
          <span >Back to shop</span>
        </Link>
      </div>
      <div className={styles.image}>
        <img src="./src/assets/1.png" alt="" />
      </div>
    </div>
  );
}

export default PageNotFound;
