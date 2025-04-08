import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ArrowRightIcon } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./ui/button";

const CallToAction = () => {
  const ctaRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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
    <section ref={ctaRef} className="bg-secondary py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center cta-content">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg font-playfair mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who are already using Gather
            Flora to transform their business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="group">
              Get started
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Contact sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
