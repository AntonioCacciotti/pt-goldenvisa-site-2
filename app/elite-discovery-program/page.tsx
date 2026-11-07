import type { Metadata } from "next";
import Link from "next/link";
import { Lightbulb, MessagesSquare, KeyRound } from "lucide-react";
import PageHead from "@/components/PageHead";
import Placeholder from "@/components/Placeholder";
import { PARTNER_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: "The Golden Visa Elite Discovery Program",
  description: "Your Golden Visa is the start. The Elite Discovery Program helps you discover the best of Portugal and Europe.",
};

const blocks = [
  { i: Lightbulb, h: "Insights" },
  { i: MessagesSquare, h: "Advice" },
  { i: KeyRound, h: "Exclusive access" },
];

export default function Page() {
  return (
    <>
      <PageHead title="The Golden Visa Elite Discovery Program." line="Your Golden Visa is the start. We help you discover the best of Portugal and Europe — and make you feel at home." />
      <div className="mx-auto max-w-6xl px-5 pt-8">
        <div className="grid gap-6 md:grid-cols-3">
          {blocks.map(({ i: Icon, h }) => (
            <section key={h} className="rounded-xl bg-white p-7">
              <Icon aria-hidden="true" className="h-8 w-8 text-terracotta" strokeWidth={1.6} />
              <h2 className="mt-4 text-2xl">{h}</h2>
              <p className="mt-3"><Placeholder>[TO BE PROVIDED: what members get]</Placeholder></p>
            </section>
          ))}
        </div>
        <section className="mt-14 max-w-3xl">
          <h2 className="text-3xl">Who can join?</h2>
          <p className="mt-4">People who get their Golden Visa through Wonder Portugal, in partnership with {PARTNER_NAME}. <Placeholder>[TO BE CONFIRMED]</Placeholder></p>
        </section>
        <p className="mt-10"><Link href="/get-started" className="btn">Get Started</Link></p>
      </div>
    </>
  );
}
