import Link from "next/link";
import * as styles from "./page.css";

export default function Home() {
  return (
    <div>
      <p>Get started by editing</p>
      <br />
      <div>로고</div>
      <Link href="/home">구글 로그인</Link>
    </div>
  );
}
