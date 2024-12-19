"use client";

import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/ui/contact-info";

export function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}