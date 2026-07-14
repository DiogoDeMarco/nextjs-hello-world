import Link from "next/link";

export default function Home() {
  return (
    <div>
      Ovo de codorna.{" "}
      <Link href="/about">
        About
      </Link>
    </div>
  );
}
