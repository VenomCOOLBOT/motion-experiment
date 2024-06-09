'use client';
import React from "react";
import Image from "next/image";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  description?: string;
  image: string;
}

export default function PageHero({ title, description, image }: HeroProps) {
  return (
    <section className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 border-b">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <SliceSVG />
        <Image
          className="object-cover w-full h-40 rounded shadow-lg lg:rounded-none lg:shadow-none  lg:h-full"
          src={image}
          alt="Hero Image"
          width={6000}
          height={4000}
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <div className="mb-5 font-sans lg:text-4xl font-bold tracking-tight text-gray-900 text-xl dark:text-gray-100">
            <TextGenerateEffect words={title}/>
          </div>
          <motion.p className="pr-5 mb-5 text-xs text-gray-700 lg:text-lg dark:text-gray-300" transition={{type: 'tween', duration: 0.5}} initial={{ x: -250, opacity: 0}}  whileInView={{ opacity: 1,x: 0}}>
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

function SliceSVG() {
  return (
    <svg
      className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
      viewBox="0 0 100 100"
      fill="currentColor"
      preserveAspectRatio="none slice"
    >
      <path d="M50 0H100L50 100H0L50 0Z" />
    </svg>
  );
}
