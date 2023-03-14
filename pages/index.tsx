import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>Wooof! Wooof! Let's embrace one of the Product of Project Walter</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/mint")}
        >
          {/* Mint a new NFT */}
          <p><br></br></p>
          <Image src="/earlysupporter.gif" alt="drop" width={180} height={250 } />
          <h2 className={styles.selectBoxTitle}>Claim your NFT</h2>
          <p className={styles.selectBoxDescription}>
            Claim your Early Supporter Waltz now!
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/stake")}
        >
          {/* Staking an NFT */}
          <p><br></br></p>
          <Image src="/walter.png" alt="token" width={230} height={250} />
          <h2 className={styles.selectBoxTitle}>Stake Your NFT</h2>
          <p className={styles.selectBoxDescription}>
            Stake your Early Support Waltz NFT now!
          </p>
        </div>
      </div>
      <p><br></br></p>
      <p><br></br></p>
      <p><br></br></p>

      <div className={styles.partnerImageContainer}>
        <img
          src={`/logo.png`}
          alt="Thirdweb Logo"
          width={135}
          className={styles.buttonGapTop}
        />
        <img
          src={`/polygon.png`}
          alt="Polygon Logo"
          width={135}
          className={styles.buttonGapTop}
        />
    </div>
    </div>
  );
};

export default Home;
