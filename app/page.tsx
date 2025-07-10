import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello world</h1>
      <Link href="/users">Users</Link>
      {/* Client Side Navigation - over a tag */}
      {/* Default to server components and use client components when needed */}
      <ProductCard />
    </main>
  );
}
