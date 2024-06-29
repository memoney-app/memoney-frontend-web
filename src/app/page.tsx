import Link from "next/link";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <p>Get started by editing</p>
        <Link href="/test" passHref>
          Go to Test Pag
        </Link>
      </div>
    </main>
  );
}
