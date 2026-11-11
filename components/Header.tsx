"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import Azulejo from "./Azulejo";

const links = [
  { href: "/golden-visa", label: "Golden Visa" },
  { href: "/discover-portugal", label: "Discover Portugal" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // On the home page the header floats over the full-screen photo, so links are white.
  const overlay = pathname === "/";
  const link = overlay ? "font-medium text-white hover:underline" : "font-medium text-ink hover:text-atlantic";
  return (
    <header className={overlay ? "absolute inset-x-0 top-0 z-30" : ""}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Logo light={overlay} />
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (<Link key={l.href} href={l.href} className={link}>{l.label}</Link>))}
          <Link href="/get-started" className="btn !py-2">Get Started</Link>
        </nav>
        <button className={`rounded-full border-2 px-4 py-1.5 font-semibold md:hidden ${overlay ? "border-white text-white" : "border-atlantic text-atlantic"}`} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Main" className={`flex flex-col gap-1 px-5 pb-6 md:hidden ${overlay ? "bg-atlantic-deep/90 text-white" : ""}`}>
          {links.map((l) => (<Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 font-medium">{l.label}</Link>))}
          <Link href="/get-started" onClick={() => setOpen(false)} className="btn mt-2">Get Started</Link>
        </nav>
      )}
      {!overlay && <Azulejo />}
    </header>
  );
}
