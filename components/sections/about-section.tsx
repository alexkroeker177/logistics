"use client";

import { Clock, MapPin, Package } from "lucide-react";
import Image from "next/image";
import { FeatureItem } from "@/components/ui/feature-item";

const features = [
  {
    icon: <Clock className="h-4 w-4 text-primary" />,
    text: "25+ Jahre Erfahrung",
  },
  {
    icon: <MapPin className="h-4 w-4 text-primary" />,
    text: "Regionale Expertise in Nürnberg",
  },
  {
    icon: <Package className="h-4 w-4 text-primary" />,
    text: "Maßgeschneiderte Logistiklösungen",
  },
];

export function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Über IdealX GmbH</h2>
            <p className="text-gray-600 mb-4">
              Mit über 25 Jahren Erfahrung in der Logistikbranche sind wir Ihr kompetenter Partner für alle logistischen Herausforderungen. Unsere regionale Expertise in Nürnberg und Umgebung ermöglicht es uns, maßgeschneiderte Lösungen anzubieten.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <FeatureItem key={index} icon={feature.icon} text={feature.text} />
              ))}
            </ul>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2070"
              alt="Logistics operations"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}