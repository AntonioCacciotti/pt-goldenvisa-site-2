"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import Azulejo from "./Azulejo";

const links = [
  { href: "/golden-visa", label: "Golden Visa" },
  { href: "/discover-portugal", label: "Discover Portugal" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (<Link key={l.href} href={l.href} className="font-medium text-ink hover:text-atlantic">{l.label}</Link>))}
          <Link href="/get-started" className="btn !py-2">Get Started</Link>
        </nav>
        <button className="rounded-full border-2 border-atlantic px-4 py-1.5 font-semibold text-atlantic md:hidden" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Main" className="flex flex-col gap-1 px-5 pb-6 md:hidden">
          {links.map((l) => (<Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 font-medium">{l.label}</Link>))}
          <Link href="/get-started" onClick={() => setOpen(false)} className="btn mt-2">Get Started</Link>
        </nav>
      )}
      <Azulejo />
    </header>
  );
}
