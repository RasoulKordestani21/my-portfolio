import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header>
        <h1>My Online Store</h1>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h2>Welcome to the Best Online Store!</h2>
          <p>Find the best products at the best prices.</p>
          <Image
            src="/images/laptop.jfif"
            alt="Hero Image"
            width={800}
            height={400}
          />
        </section>

        <section className="categories">
          <h2>Categories</h2>
          <ul>
            <li>
              <Link href="/products/category1">Category 1</Link>
            </li>
            <li>
              <Link href="/products/category2">Category 2</Link>
            </li>
            <li>
              <Link href="/products/category3">Category 3</Link>
            </li>
          </ul>
        </section>

        <section className="featured">
          <h2>Featured Products</h2>
          <div className="products">
            <div className="product">
              <Image
                src="/images/homeCleanerRobot.png"
                alt="Product 1"
                width={200}
                height={200}
              />
              <h3>
                <Link href="/products/1">Product 1</Link>
              </h3>
              <p>$10.00</p>
            </div>
            <div className="product">
              <Image
                src="/images/images.jfif"
                alt="Product 2"
                width={200}
                height={200}
              />
              <h3>
                <Link href="/products/2">Product 2</Link>
              </h3>
              <p>$20.00</p>
            </div>
            <div className="product">
              <Image
                src="/images/laptop.jfif"
                alt="Product 3"
                width={200}
                height={200}
              />
              <h3>
                <Link href="/products/3">Product 3</Link>
              </h3>
              <p>$30.00</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2023 My Online Store. All rights reserved.</p>
      </footer>
    </div>
  );
}
