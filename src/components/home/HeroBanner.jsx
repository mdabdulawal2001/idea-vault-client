"use client";

import Image from "next/image";
import Link from "next/link";

import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    badge: "TURN IDEAS INTO IMPACT",
    title: "Your Next Big Idea",
    highlight: "Starts Here.",
    description:
      "Share your startup vision, discover fresh ideas, and connect with a community that helps turn possibilities into meaningful solutions.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85",
    buttonText: "Explore Ideas",
  },
  {
    id: 2,
    badge: "DISCOVER • DISCUSS • VALIDATE",
    title: "Discover Ideas",
    highlight: "Worth Building.",
    description:
      "Explore innovative concepts across technology, healthcare, education, AI, and more. Find inspiration and help promising ideas grow.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=85",
    buttonText: "Explore Ideas",
  },
  {
    id: 3,
    badge: "BUILD THE FUTURE TOGETHER",
    title: "Share Your Vision.",
    highlight: "Shape Tomorrow.",
    description:
      "Great ideas become stronger through meaningful feedback. Share your concept and let the community help you refine its potential.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=85",
    buttonText: "Explore Ideas",
  },
];

const HeroBanner = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        speed={900}
        className="hero-swiper w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative min-h-155 w-full sm:min-h-162.5 lg:min-h-175">

              {/* Background Image */}

              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={slide.id === 1}
                sizes="100vw"
                className="object-cover"
              />

              {/* Dark Overlay */}

              <div className="absolute inset-0 bg-slate-950/65" />

              {/* Gradient Overlay */}

              <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/75 to-blue-950/30" />

              {/* Decorative Glow */}

              <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

              <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

              {/* Content */}

              <div className="relative z-10 mx-auto flex min-h-155 max-w-7xl items-center px-5 py-20 sm:min-h-162.5 sm:px-8 lg:min-h-175 lg:px-8">

                <div className="max-w-3xl">

                  {/* Badge */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.2,
                    }}
                    className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 backdrop-blur-md"
                  >
                    <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

                    <span className="text-xs font-bold tracking-[0.16em] text-cyan-300 sm:text-sm">
                      {slide.badge}
                    </span>
                  </motion.div>

                  {/* Heading */}

                  <motion.h1
                    initial={{
                      opacity: 0,
                      y: 35,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.35,
                    }}
                    className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
                  >
                    {slide.title}

                    <span className="mt-2 block bg-linear-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                      {slide.highlight}
                    </span>
                  </motion.h1>

                  {/* Description */}

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                    }}
                    className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8"
                  >
                    {slide.description}
                  </motion.p>

                  {/* CTA */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.65,
                    }}
                    className="mt-8"
                  >
                    <Link
                      href="/ideas"
                      className="group inline-flex items-center gap-3 rounded-full bg-linear-to-r from-cyan-400 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/20 sm:px-7 sm:py-4 sm:text-base"
                    >
                      {slide.buttonText}

                      <svg
                        className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 7l5 5m0 0-5 5m5-5H6"
                        />
                      </svg>
                    </Link>
                  </motion.div>

                </div>
              </div>

              {/* Bottom Decorative Line */}

              <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-400/60 to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroBanner;