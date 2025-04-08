import gsap from "gsap";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-secondary/80 backdrop-blur-md"
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#"
            className="text-base font-semibold text-primary hover:text-[#86a775] transition-colors"
          >
            Learn More
          </Link>
        </nav>

        <Image
          src="/GatherFlora.png"
          height={40}
          width={120}
          alt="gather flora"
          className="lg:ml-28"
        />

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="hidden md:inline-flex cursor-pointer"
          >
            Log in
          </Button>
          <Button className="hidden md:inline-flex cursor-pointer">
            Sign up to shop
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden h-12 w-12">
            <MenuIcon className="h-12 w-12" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
