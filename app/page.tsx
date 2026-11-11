import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Landmark, Globe2, ShieldCheck, Languages, MapPinned, Euro, HandCoins, PlaneTakeoff, Compass } from "lucide-react";
import { getPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import SignupBand from "@/components/SignupBand";
import Azulejo from "@/components/Azulejo";
import { PARTNER_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: "Wonder Portugal | Discover the Beauty of Portugal with a Golden Visa",
  description: "Discover Portugal and Europe, with the Golden Visa explained in plain English.",
};

const steps = [
  { i: HandCoins, b: "Support the Portuguese economy", r: " by investing €500,000 in a regulated, Luxembourg-run fund." },
  { i: PlaneTakeoff, b: "Enjoy Golden Visa benefits", r: " — live, work and study in Portugal, travel freely across Europe — and begin your path to Portuguese citizenship." },
  { i: Compass, b: "Discover the magic of Portugal and Europe", r: " at your own pace, with insights, advice and exclusive access through our Golden Visa Elite Discovery Program." },
];

const why = [
  { i: Landmark, t: "One of the oldest countries in Europe, with a rich history." },
  { i: Globe2, t: "One of the world's most globalized and peaceful nations." },
  { i: ShieldCheck, t: "Very safe, with a low crime rate." },
  { i: Languages, t: "English widely spoken, especially in tourist areas." },
  { i: MapPinned, t: "Part of Europe's Schengen Area — travel across most of Europe without border checks." },
  { i: Euro, t: "Uses the euro (since 2002)." },
];

export default function Home() {
  const featured = getPosts().filter((p) => p.featured);
  return (
    <>
      {/* 4.1 Hero */}
      <section className="on-dark relative flex h-[100svh] min-h-[600px] w-full flex-col justify-end overflow-hidden bg-atlantic-deep">
        {/* Photo: Praia da Marinha, Algarve (public domain, Wikimedia Commons). Sky stays at the top so the header links sit on it. */}
        <Image src="/images/hero-praia-da-marinha.jpg" alt="Golden limestone cliffs above a turquoise bay on the Algarve coast, under a blue sky" fill priority sizes="100vw" className="object-cover object-top" />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-atlantic-deep/60 to-transparent" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[75%] bg-gradient-to-t from-atlantic-deep/90 via-atlantic-deep/70 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-14 text-white md:pb-20">
          <h1 className="max-w-3xl text-5xl md:text-7xl">Discover the Beauty of Portugal with a Golden Visa</h1>
          <p className="mt-6 max-w-2xl text-xl md:text-2xl">Step 1: Golden Visa. Step 2: Art, entertainment, nature, beauty, and more.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/get-started" className="btn">Get Started</Link>
            <Link href="/discover-portugal" className="btn btn-outline">Discover Portugal</Link>
          </div>
          <p className="mt-5 text-sm italic">In partnership with {PARTNER_NAME}</p>
        </div>
      </section>
      <Azulejo />

      {/* 4.2 How it works */}
      <section className="mx-auto max-w-6xl px-5 pt-20">
        <h2 className="text-4xl md:text-5xl">How it works.</h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s, n) => (
            <li key={s.b} className="rounded-xl bg-white p-7">
              <div className="flex items-center gap-3">
                <span className="font-serif text-3xl text-terracotta">{n + 1}</span>
                <s.i aria-hidden="true" className="h-7 w-7 text-atlantic" strokeWidth={1.6} />
              </div>
              <p className="mt-4"><strong>{s.b}</strong>{s.r}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8"><Link href="/golden-visa" className="text-link">How the Golden Visa works, in plain English</Link></p>
      </section>

      {/* 4.3 Featured stories */}
      <section className="mx-auto max-w-6xl px-5 pt-24">
        <h2 className="text-4xl md:text-5xl">Start dreaming.</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {featured.map((p) => <PostCard key={p.slug} post={p} large />)}
        </div>
        <p className="mt-8"><Link href="/discover-portugal" className="text-link">See all stories</Link></p>
      </section>

      {/* 4.4 Why Portugal */}
      <section className="mx-auto max-w-6xl px-5 pt-24">
        <h2 className="text-4xl md:text-5xl">Why Portugal?</h2>
        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {why.map(({ i: Icon, t }) => (
            <li key={t} className="flex items-start gap-4 rounded-xl bg-white p-5">
              <Icon aria-hidden="true" className="mt-0.5 h-6 w-6 shrink-0 text-terracotta" strokeWidth={1.8} />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 4.5 Elite Discovery Program teaser */}
      <section className="mx-auto mt-24 max-w-4xl px-5 text-center">
        <h2 className="text-4xl md:text-5xl">More than a visa. A way in.</h2>
        <p className="mt-6 text-xl italic">When you get your Golden Visa, you join the Golden Visa Elite Discovery Program — insights, advice and exclusive access to the best of Portugal and Europe.</p>
        <p className="mt-8"><Link href="/elite-discovery-program" className="btn">About the Program</Link></p>
      </section>

      {/* 4.6 Sign-up band */}
      <SignupBand idPrefix="home" source="home" />
    </>
  );
}
