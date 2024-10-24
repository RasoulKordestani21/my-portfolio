import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Store</h1>
      <ul>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
}
