import { Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { editionDropContractAddress } from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";

const Mint: NextPage = () => {
  const router = useRouter();

  return (

          

    <div className={styles.container}>
      <div className={styles.infoSide}>
      <a href="https://projectwalter.org" target="_blank" rel="noreferrer">
            <img
              src="/earlysupporter.gif"
              alt="Project Walter"
              width={260}
              className={styles.buttonGapTop}
            />
            </a>
            </div>
      <h1 className={styles.h1}>Mint An Early Supporter Waltz NFT</h1>

      <p className={styles.explain}>
      A token of appreciation for <b>Early Supporters</b>, that will have access in the future for exclusive benefits on all the projects product.
      </p>
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

      <Web3Button
        colorMode="dark"
        accentColor="#eab933"
        contractAddress={editionDropContractAddress}
        action={(contract) => contract.erc1155.claim(0, 1)}
        onSuccess={() => {
          alert("NFT Claimed!");
          router.push("/stake");
        }}
        onError={(error) => {
          alert("You are not Eligible!");
        }}
      >
        Claim Now!
      </Web3Button>
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

export default Mint;
