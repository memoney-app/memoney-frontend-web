import Link from "next/link";

export default function Home() {
  return (
    <div className="main">
      <p>Get started by editing</p>
      <br />
      <div>로고</div>
      <Link href="/home/category">구글 로그인</Link>
    </div>
  );
}
