"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center">
      <Image
        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070"
        alt="Logistics warehouse"
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Ihre Kompetenz im Fokus, unsere Logistik im Rücken
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Seit über 25 Jahren Ihr verlässlicher Partner für maßgeschneiderte Logistiklösungen in Nürnberg und Umgebung
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Kontaktieren Sie uns <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}