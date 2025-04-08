"use client";

import { ReactLenis } from "lenis/react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <ReactLenis root>
      <main className="flex min-h-screen flex-col">
        <Header />
        <Hero />
        <Feature />
        <CallToAction />
        <Footer />
      </main>
    </ReactLenis>
  );
}
