import Link from "next/link";
import * as styles from "../css/Mainpage.css";

export default function Home() {
  return (
    <div className="main">
      <div className={styles.MainLogo}>memoney</div>
      <div>
        <Link href="/category">구글 로그인</Link>
      </div>
    </div>
  );
}
