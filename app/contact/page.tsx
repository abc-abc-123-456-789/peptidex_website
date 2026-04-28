import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/contact-form"; // I will provide the client component below
import { Mail, Phone, MapPin, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Pep Tide High, LLC",
  description: "Get in touch with Pep Tide High, LLC. We are here to help with your inquiries.",
};

/**
 * Contact Page Component (Server Component)
 * 
 * This page follows a high-contrast, grid-based design pattern.
 * It separates the static information from the interactive form.
 */
export default function ContactPage() {
  const contactInfo = {
    email: "test@test.com",
    phone: "+1 366 299 9999",
    address: "123 main st ny nt 20001",
    company_name: "Pep Tide High, LLC",
  };

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="border-b border-black py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">
            Get in <br />
            <span className="text-zinc-400">Touch.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-xl font-medium">
            Have questions about our products or bulk orders? 
            Reach out to the Pep Tide High team directly.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Contact Information Column */}
          <div className="md:col-span-5 space-y-12">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest mb-8">
                Company Details
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Building2 className="w-6 h-6 shrink-0" />
                  <div>
                    <p className="text-sm text-zinc-500 uppercase font-semibold">Organization</p>
                    <p className="text-xl font-medium">{contactInfo.company_name}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 shrink-0" />
                  <div>
                    <p className="text-sm text-zinc-500 uppercase font-semibold">Email Address</p>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-xl font-medium hover:underline decoration-2 underline-offset-4"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 shrink-0" />
                  <div>
                    <p className="text-sm text-zinc-500 uppercase font-semibold">Phone Number</p>
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className="text-xl font-medium hover:underline decoration-2 underline-offset-4"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 shrink-0" />
                  <div>
                    <p className="text-sm text-zinc-500 uppercase font-semibold">Headquarters</p>
                    <p className="text-xl font-medium leading-tight">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Logo Placeholder/Visual */}
            <div className="pt-8 border-t border-zinc-100">
              <Image
                src="/logo.png"
                alt={`${contactInfo.company_name} official logo`}
                width={120}
                height={40}
                className="grayscale opacity-50"
              />
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="md:col-span-7">
            <div className="bg-zinc-50 p-8 md:p-12 border border-black">
              <h2 className="text-2xl font-bold mb-8">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}