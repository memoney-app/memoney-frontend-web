import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <p>Get started by editing</p>
        <br />
        <Link href="/home">home</Link>
        <Link href="/main">main</Link>
        <Link href="/test">test</Link>
      </div>
    </main>
  );
}
