import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/types";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about RespireVital products, shipping, and our approach to health.",
};

const faqItems: FaqItem[] = [
  {
    question: "What is myofunctional therapy?",
    answer: "Myofunctional therapy is a program of exercises that helps retrain the muscles of the mouth, tongue, and face to function correctly. It's often used to correct improper swallowing, breathing, and resting postures of the tongue and lips, which can impact dental health, sleep, and more."
  },
  {
    question: "Are your products safe to use?",
    answer: "Absolutely. All RespireVital products are made from high-quality, medical-grade, biocompatible materials. They are designed in consultation with dentists and medical experts to ensure they are both safe and effective when used as directed."
  },
  {
    question: "How long does it take to see results?",
    answer: "Results can vary depending on the individual and the specific product. Many users report noticeable improvements within a few weeks of consistent use. For best results, we recommend following the included instructions and using the products as part of a daily routine."
  },
  {
    question: "Can I use your products if I have braces or other dental work?",
    answer: "It depends on the product and your specific dental situation. We strongly recommend consulting with your dentist or orthodontist before starting to use any new oral device to ensure it's appropriate for you."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day satisfaction guarantee on most of our products. If you're not completely satisfied with your purchase, you can return it within 30 days for a full refund. Please see our Shipping & Returns page for detailed information."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to many countries worldwide. Shipping costs and times will vary depending on your location. You can see the available shipping options during checkout."
  },
];

export default function FaqPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Frequently Asked Questions</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Have a question? We're here to help.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger className="text-left font-headline text-lg hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
