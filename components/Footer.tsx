import Link from "next/link";
import Logo from "./Logo";
import Placeholder from "./Placeholder";
import Azulejo from "./Azulejo";

export default function Footer() {
  return (
    <footer className="on-dark mt-24 bg-atlantic text-white">
      <Azulejo />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div><Logo light /></div>
        <nav aria-label="Footer" className="flex flex-col gap-2">
          <Link href="/golden-visa" className="hover:underline">Golden Visa</Link>
          <Link href="/discover-portugal" className="hover:underline">Discover Portugal</Link>
          <Link href="/get-started" className="hover:underline">Get Started</Link>
          <Link href="/elite-discovery-program" className="hover:underline">Elite Discovery Program</Link>
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link href="/important-information" className="hover:underline">Important Information</Link>
        </nav>
        <div className="space-y-3 text-sm">
          <p><Placeholder dark>[TO BE PROVIDED: contact email]</Placeholder></p>
          <p><Placeholder dark>[TO BE PROVIDED: company name]</Placeholder></p>
        </div>
      </div>
      <div className="border-t border-white/30 py-5 text-center text-sm text-white/90">© {new Date().getFullYear()} Wonder Portugal. All rights reserved.</div>
    </footer>
  );
}
