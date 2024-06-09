'use client'
import MainHero from "@/components/MainHero";
import HeroImage from "../../public/hero.jpg";
import { FlipWords } from "@/components/ui/flip-words";
import { motion } from "framer-motion";

export default function Home() {
  const title = "Haz realidad tus sueños de boda";
  const description =
    "Desde este momento hasta el día de tu boda, mi objetivo es aliviar cualquier preocupación y hacer que disfrutes cada etapa de esta hermosa experiencia. ¡Aquí comienza la emocionante travesía hacia el sí más importante de tu vida!";
  const messagePartOne =
    "Planifica el perfecto";
  const messagePartTwo = "para tu día especial";
  const words = ["boda", "fiesta", "vestido", "ceremonia", "lugar"];
  return (
    <main>
      <MainHero title={title} description={description} image={HeroImage.src} />
      <section className="border-b px-12">
        <motion.h1 className="py-10  lg:text-4xl text-xs font-serif " transition={{type: 'tween', delay: 0.3}} initial={{ x: -250, opacity: 0}}  whileInView={{ opacity: 1,x: 0}}>
          {messagePartOne}
          <FlipWords words={words} /> 
          <br />
          {messagePartTwo}
        </motion.h1>
      </section>
      <section>
        
      </section>
    </main>
  );
}
