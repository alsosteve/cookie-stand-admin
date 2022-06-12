import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

export default function Home() {
  return (
    <>
      <Header initialTitle="Cookie Stand Admin" />
      <Main />
      <Footer/>
    </>
  )
}
