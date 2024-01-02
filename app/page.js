import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Restaurannt</p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/bb.png"
              alt="BBQ qr code ki"
              className={styles.vercelLogo}
              width={130}
              height={85}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/bb.png"
          alt="BBQ qr code ki"
          width={180}
          height={117}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Link href="/pages/restaurantArgo">
          <div className={styles.card}>
            <h2>
              Argo <span>-&gt;</span>
            </h2>
            <p>Argo Restaurant</p>
          </div>
        </Link>

        <Link href="/pages/restaurantPirates">
          <div className={styles.card}>
            <h2>
              Pirates<span>-&gt;</span>
            </h2>
            <p>Pirates Restaurant</p>
          </div>
        </Link>

        <Link href="/pages/restaurantArazo">
          <div className={styles.card}>
            <h2>
              Arazo<span>-&gt;</span>
            </h2>
            <p>Arazo Restaurant</p>
          </div>
        </Link>
      </div>
    </main>
  );
}
