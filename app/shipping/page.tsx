import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Truck, RefreshCw, Info, ChevronDown, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Shipping & Returns | Pep Tide High, LLC",
  description: "Find everything you need to know about shipping, returns, and frequently asked questions for Pep Tide High, LLC."
};

const FAQ_ITEMS = [
  {
    question: "How long does shipping take?",
    answer: "All orders are processed and shipped the next business day via our standard carrier to ensure you get your gear as quickly as possible."
  },
  {
    question: "What kind of products do you sell?",
    answer: "We specialize in premium apparel that celebrates the spirit of growth and ambition, including our signature white tee shirts and high-quality trucker caps."
  },
  {
    question: "Can I change my order after it has been placed?",
    answer: "Because we ship orders the very next business day to maintain speed, we cannot guarantee changes can be made. Please contact us immediately if you notice an error."
  },
  {
    question: "Is the sizing for the white tee shirts true to size?",
    answer: "Yes, our white tee shirts are designed with a classic, comfortable fit intended to be a staple in your wardrobe."
  },
  {
    question: "How do I track my order?",
    answer: "Once your order has been dispatched, a tracking number will be sent directly to your email address via our standard carrier."
  }
];

export default function ShippingReturnsPage() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      {/* Hero Section */}
      <header className="border-b border-black py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">
            Support <br /> & Logistics
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl font-medium">
            Everything you need to know about getting your Pep Tide High gear and our commitment to your satisfaction.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Grid Layout for Policies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-y border-black py-16">
          {/* Shipping Policy */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Truck className="w-6 h-6" />
              <h2 className="text-2xl font-bold uppercase tracking-tight">Shipping Policy</h2>
            </div>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                All orders will be shipped next business day via standard carrier.
                Expedited options are available at checkout. Tracking information will
                be emailed upon dispatch.
              </p>
              <p>
                We currently ship to all domestic addresses. International shipping 
                options and rates will be calculated at checkout.
              </p>
            </div>
          </section>

          {/* Returns Policy */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <RefreshCw className="w-6 h-6" />
              <h2 className="text-2xl font-bold uppercase tracking-tight">Returns & Exchanges</h2>
            </div>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                We want you to love your gear. If you're not satisfied, we accept returns 
                within 30 days of delivery. Items must be unworn, unwashed, and in original packaging.
              </p>
              <p>
                To initiate a return, please contact our support team with your order number.
              </p>
            </div>
          </section>
        </div>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="flex items-center gap-3 mb-12">
            <HelpCircle className="w-6 h-6" />
            <h2 className="text-3xl font-bold uppercase tracking-tight">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {FAQ_ITEMS.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-xl font-bold text-left uppercase">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-lg text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <footer className="border-t border-black py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-bold uppercase tracking-widest">© {new Date().getFullYear()} Pep Tide High, LLC</p>
        </div>
      </footer>
    </div>
  );
}