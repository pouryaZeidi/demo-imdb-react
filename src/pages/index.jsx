import Head from "next/head";
import styles from "@/styles/Home.module.css";
import HearoSection from "@/component/hero-section/HearoSection";

const Home = () => {
  return (
    <>
      <Head>
        <title>IMDb</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HearoSection />
      </main>
    </>
  );
}


export default Home
