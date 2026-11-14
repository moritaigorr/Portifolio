"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MotionProvider() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({
      lerp: 0.045,
      smoothWheel: true,
      wheelMultiplier: 0.55,
      syncTouch: true,
      syncTouchLerp: 0.075,
      anchors: true,
      respectReducedMotion: true,
    });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const context = reduced ? undefined : gsap.context(() => {
      gsap.fromTo(".hero-title-line", { yPercent: 105 }, {
        yPercent: 0,
        duration: 1.15,
        stagger: 0.12,
        ease: "power4.out",
        delay: 0.15,
      });
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(element, { y: 28, autoAlpha: 0 }, {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });
      gsap.utils.toArray<HTMLElement>(".project-visual:not(.project-visual-placeholder) .project-image").forEach((image) => {
        gsap.fromTo(image, { scale: 1.045 }, {
          scale: 1,
          duration: 1.1,
          ease: "power2.out",
          scrollTrigger: { trigger: image, start: "top 90%", once: true },
        });
      });
    });

    return () => {
      context?.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
