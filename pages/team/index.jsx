import Head from 'next/head';
import Image from 'next/image';
import { Footer, Navbar, TeamPage } from '../../components';
import styles from '../../styles/Home.module.css';
import Team2K24Page from '../../components/TeamPage/Team2k24';
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
      <TeamPage />
      <Footer />
    </>
  );
};

export default Team;
