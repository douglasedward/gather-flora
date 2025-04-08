import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./ui/button";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({ subsets: ["latin"] });

const Feature = () => {
  const featureRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={featureRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className={cn("text-center mb-16", playfair.className)}>
          <h2 className="text-3xl text-gray-950 md:text-4xl font-playfair font-bold mb-4 max-w-2xl mx-auto">
            Gather Flora connects businesses with fresh, local, seasonal
            flowers.
          </h2>
          <p className="text-lg text-gray-600 font-playfair max-w-2xl mx-auto">
            We find you the flowers you need, when and where you need them,
            hustling to prioritize traceability & local-first sourcing behind
            the scenes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="feature-item bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className={playfair.className}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg bg-black/10 flex items-center justify-center">
                  <Image
                    src={`/flower1.webp`}
                    width={42}
                    height={42}
                    alt="flower"
                  />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-gray-900">
                  We Deliver!
                </h3>
              </div>
              <p className="text-gray-600 font-playfair mb-6">
                We are trialing an exclusive delivery program to an early set of
                customers in many cities! Delivery is one of our newest
                offerings aimed at making sourcing local flowers as simple as
                possible for our customers. To learn more or get on our list,
                sign up below.
              </p>
            </div>
            <Button
              size="lg"
              className="border border-gray-300 bg-input/30 shadow-xs hover:bg-background/5 hover:border-gray-200 cursor-pointer"
            >
              Get access to delivery
            </Button>
          </div>

          <div className="feature-item bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className={playfair.className}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg bg-black/10 flex items-center justify-center">
                  <Image
                    src={`/flower2.webp`}
                    width={42}
                    height={42}
                    alt="flower"
                  />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-gray-900">
                  Our Services
                </h3>
              </div>
              <p className="text-gray-600 font-playfair mb-6">
                We are an online marketplace and dedicated team aimed at
                connecting you to the best local flowers. We offer free market
                accounts for farms and florists. We also offer digital tools and
                resources to help hubs, distributors, and farms sell better.
              </p>
            </div>
            <Button
              size="lg"
              className="border border-gray-300 bg-input/30 shadow-xs hover:bg-background/5 hover:border-gray-200 cursor-pointer"
            >
              Explore
            </Button>
          </div>

          <div className="feature-item bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className={playfair.className}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg bg-black/10 flex items-center justify-center">
                  <Image
                    src={`/flower3.webp`}
                    width={42}
                    height={42}
                    alt="flower"
                  />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-gray-900">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600 font-playfair mb-6">
                Local flowers are truly special. They enable us to drive
                accountability and sustainability in our industry&apos;s supply
                chain. We provide the tools and connections that enable the rich
                tapestry of flower businesses in your region to buy and sell
                high quality, traceable floral supply.
              </p>
            </div>
            <Button
              size="lg"
              className="border border-gray-300 bg-input/30 shadow-xs hover:bg-background/5 hover:border-gray-200 cursor-pointer"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
