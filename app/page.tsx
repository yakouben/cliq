"use client";

import Header from '../components/Header';
import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';

import QuiSommesNous from '../components/QuiSommesNous';
import ChezCliq from '../components/ChezCliq';
import NosRealisations from '../components/NosRealisations';
import MacbookScrollDemo from '../components/macbook-scroll-demo';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ClientLogos />
      <QuiSommesNous />
      <ChezCliq />
      <NosRealisations />
      <MacbookScrollDemo />
      <Footer />
    </main>
  );
}
