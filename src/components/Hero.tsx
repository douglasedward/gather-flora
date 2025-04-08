import gsap from "gsap";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { useEffect, useRef } from "react";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({ subsets: ["latin"] });

const Hero = () => {
  const headerRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
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
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.7"
    );

    tl.from(
      ".hero-image2",
      {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=1"
    );

    tl.from(
      ".hero-image3",
      {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.7"
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="bg-secondary pt-32 pb-20 md:pt-40 md:pb-32 h-svh"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="hero-image hidden lg:flex group">
            <div className="relative h-80 w-60 rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-300">
              <Image
                src="/flowers/Dahlia_Valley_Porcupine.webp"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                alt="dahlia valley porcupine"
              />
            </div>
            <div
              className={cn(
                "ml-4 flex-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                playfair.className
              )}
            >
              <span className="font-semibold text-lg">
                Dahlia Valley Porcupine
              </span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                incidunt rerum esse soluta natus eaque quis.
              </p>
            </div>
          </div>

          <div className="space-y-8 text-center">
            <h1
              className={cn(
                "text-4xl md:text-5xl lg:text-6xl uppercase font-bold tracking-tight",
                playfair.className
              )}
            >
              <span className="block hero-title">Connecting</span>
              <span className="block hero-title">Business</span>
              <span className="block hero-title">With Local</span>
              <span className="block hero-title">Flower Supply</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 justify-center hero-cta">
              <Button size="lg" className="group cursor-pointer">
                Sign up to shop
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="cursor-pointer">
                Get started as a farm
              </Button>
            </div>
          </div>

          <div className="hero-image2 ml-auto hidden lg:flex group">
            <div
              className={cn(
                "mr-4 flex-1 text-end opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                playfair.className
              )}
            >
              <span className="font-semibold text-lg">Dahlia Giddy Up</span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                incidunt rerum esse soluta natus eaque quis.
              </p>
            </div>
            <div className="relative h-80 w-60 rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-300">
              <Image
                src="/flowers/Dahlia_Giddy_Up.webp"
                width={500}
                height={500}
                className="absolute inset-0 w-full h-full object-cover"
                alt="dahlia valley porcupine"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-72 mt-24">
        <div className="grid grid-cols-2 gap-12">
          <div className="hero-image3 group flex items-center">
            <div className="relative h-60 md:h-80 w-40 md:w-60 rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-x-[-1]">
              <Image
                src="/flowers/Lupine_Purple.webp"
                width={500}
                height={500}
                className="absolute inset-0 w-full h-full object-cover"
                alt="dahlia valley porcupine"
              />
            </div>
            <div
              className={cn(
                "hidden md:block ml-4 flex-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                playfair.className
              )}
            >
              <span className="font-semibold text-lg">Lupine Purple</span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                incidunt rerum esse soluta natus eaque quis.
              </p>
            </div>
          </div>

          <div className="hero-image3 ml-auto flex group items-center">
            <div
              className={cn(
                "hidden md:block mr-4 flex-1 text-end opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                playfair.className
              )}
            >
              <span className="font-semibold text-lg">
                Zinnia Zinderella Peach
              </span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                incidunt rerum esse soluta natus eaque quis.
              </p>
            </div>
            <div className="relative h-60 md:h-80 w-40 md:w-60 rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-x-[-1]">
              <Image
                src="/flowers/Zinnia_Zinderella_Peach.webp"
                width={500}
                height={500}
                className="absolute inset-0 w-full h-full object-cover"
                alt="dahlia valley porcupine"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
