"use client";

import { Truck, Package, Clock, Plus, Hospital, LucideIcon } from "lucide-react";

export type ServiceIconType = "truck" | "package" | "clock" | "plus" | "hospital";

const iconMap: Record<ServiceIconType, LucideIcon> = {
  truck: Truck,
  package: Package,
  clock: Clock,
  plus: Plus,
  hospital: Hospital,
};

interface ServiceIconProps {
  type: ServiceIconType;
  className?: string;
}

export function ServiceIcon({ type, className = "h-6 w-6 text-primary" }: ServiceIconProps) {
  const Icon = iconMap[type];
  return <Icon className={className} />;
}