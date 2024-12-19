"use client";

import { motion } from "framer-motion";
import { ServiceType } from "@/lib/types";
import { ServiceIcon } from "./service-icon";

interface ServiceCardProps {
  service: ServiceType;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
    >
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        <ServiceIcon type={service.iconType} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </motion.div>
  );
}