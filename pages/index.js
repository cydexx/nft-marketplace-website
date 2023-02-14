import Head from "next/head";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import Auction from "@/components/Auction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="scroll-smooth overflow-hidden select-none">
      <Head>
        <title>cydex | NFT MARKETPLACE</title>
        <meta name="description" content="cydex | NFT MARKETPLACE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Collections />
      <Auction />
      <Footer />
    </div>
  );
}
