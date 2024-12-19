import { Mail, MapPin, Phone } from "lucide-react";

export function ContactInfo() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Kontaktieren Sie uns</h2>
      <p className="text-gray-600 mb-8">
        Wir freuen uns darauf, von Ihnen zu hören. Kontaktieren Sie uns für eine individuelle Beratung.
      </p>
      <div className="space-y-4">
        <div className="flex items-center">
          <Phone className="h-5 w-5 text-primary mr-3" />
          <span>+49 911 123456</span>
        </div>
        <div className="flex items-center">
          <Mail className="h-5 w-5 text-primary mr-3" />
          <span>info@idealx-gmbh.de</span>
        </div>
        <div className="flex items-center">
          <MapPin className="h-5 w-5 text-primary mr-3" />
          <span>Hauptstraße 123, 90411 Nürnberg</span>
        </div>
      </div>
    </div>
  );
}