import Image from "next/image";
import styles from "./page.module.css";
// import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>QR-codes for Restaurants</p>
        <div>
          <a
            href="https://www.linkedin.com/in/natalia-kirejeva/"
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
        <a
          href="https://argo-beach.netlify.app/?zont=99"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.card}>
            <h2>
              Argo <span>-&gt;</span>
            </h2>
            <p>Argo Restaurant</p>
          </div>
        </a>

        {/* <Link href="/restaurants/restaurantPirates"> */}
        <a
          href="https://pirates-beach.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.card}>
            <h2>
              Pirates<span>-&gt;</span>
            </h2>
            <p>Pirates Restaurant</p>
          </div>
        </a>
        {/* </Link> */}

        {/* <Link href="/restaurants/restaurantArazo"> */}
        <a
          href="https://arazo.netlify.app/?zont=33&r=200000000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.card}>
            <h2>
              Arazo<span>-&gt;</span>
            </h2>
            <p>Arazo Restaurant</p>
          </div>
          {/* </Link> */}
        </a>
        <a
          href="https://genesis-bar.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.card}>
            <h2>
              Genesis<span>-&gt;</span>
            </h2>
            <p>Genesis Restaurant</p>
          </div>
        </a>
      </div>
    </main>
  );
}
