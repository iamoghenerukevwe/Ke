import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Nav from "../components/Nav"
import Hero from "../components/Hero"
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ke</title>
        <meta name="description" content="Share your apartments" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Nav/>
        <Hero/>       
          
    </div>
  )
}
