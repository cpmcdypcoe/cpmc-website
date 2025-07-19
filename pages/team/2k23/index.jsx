import Head from 'next/head';
import Image from 'next/image';
import styles from '../../../styles/Home.module.css';
import { Footer, Navbar } from '../../../components';
import Team2K23Page from '../../../components/TeamPage/Team2k23';

const Team2K23 = () => {
  return (
    <>
      <Head>
        <title>CPMC TEAM</title>
        <meta
          name="CPMC-TEAM"
          content="Competetive Programming
and Mentorship Club.
DYPCOE, Pune."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Team2K24Page />
      <Footer />
    </>
  );
};

export default Team2K23;
