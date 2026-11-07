import Link from "next/link";
import { PARTNER_NAME } from "@/lib/config";
/* Text-only wordmark until a real logo is provided. */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="block leading-tight" aria-label={`Wonder Portugal, in partnership with ${PARTNER_NAME}. Home`}>
      <span className={`block font-serif text-2xl font-semibold ${light ? "text-white" : "text-atlantic"}`}>Wonder Portugal</span>
      <span className={`block text-xs italic ${light ? "text-white/90" : "text-ink/80"}`}>in partnership with {PARTNER_NAME}</span>
    </Link>
  );
}
