import Head from 'next/head';
import Image from 'next/image';
import { Footer, Navbar } from '../../components';
import styles from '../../styles/Home.module.css';
import Team2K25Page from '../../components/TeamPage/Team2k25';
import Teams from '../../components/Teams/Teams';

const Team = () => {
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
      <Teams />
      <Team2K25Page />
      <Footer />
    </>
  );
};

export default Team;
