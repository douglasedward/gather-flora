"use client";

import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { ReactLenis } from "lenis/react";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

export default function Home() {
  const headerRef = useRef(null);
  const heroRef = useRef(null);
  const featureRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Initial animations when page loads
    const tl = gsap.timeline();

    tl.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    tl.from(
      ".hero-title",
      {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      },
      "-=0.5"
    );

    tl.from(
      ".hero-text",
      {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.7"
    );

    tl.from(
      ".hero-cta",
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5"
    );

    tl.from(
      ".hero-image",
      {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=0.8"
    );

    // Scroll animations
    gsap.from(".feature-item", {
      scrollTrigger: {
        trigger: featureRef.current,
        start: "top 80%",
      },
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });

    gsap.from(".cta-content", {
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 70%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="flex min-h-screen flex-col">
        {/* Header */}
        <Header />
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="bg-secondary pt-32 pb-20 md:pt-40 md:pb-32 h-svh"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-12 items-center">
              <div className="space-y-8 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair uppercase font-bold tracking-tight">
                  <span className="block hero-title">Connecting Business</span>
                  <span className="block hero-title">With Local</span>
                  <span className="block hero-title">Flower Supply</span>
                </h1>

                <div className="flex flex-col sm:flex-row gap-4 justify-center hero-cta">
                  <Button size="lg" className="group cursor-pointer">
                    Sign up to shop
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="cursor-pointer"
                  >
                    Get started as a farm
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section ref={featureRef} className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Powerful Features
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to take your business to the next level
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="feature-item bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 rounded-lg bg-black/10 mb-6 flex items-center justify-center">
                    <div className="h-6 w-6 rounded-full bg-black/80"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Feature {item}</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section ref={ctaRef} className="bg-secondary py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center cta-content">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to get started?
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who are already using our
                platform to transform their business.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="group">
                  Get started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline">
                  Contact sales
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-secondary text-white py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div>
                <h3 className="font-semibold text-lg mb-4">Product</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Updates
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Partners
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Community
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Help Center
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Security
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <Image
                  src="/GatherFlora.png"
                  height={40}
                  width={120}
                  alt="gather flora"
                  className="lg:ml-28"
                />
              </div>

              <div className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Gather Flora, Inc. All rights
                reserved.
              </div>
            </div>
          </div>
        </footer>
      </main>
    </ReactLenis>
  );
}
