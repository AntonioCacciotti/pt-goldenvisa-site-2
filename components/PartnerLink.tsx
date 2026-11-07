import { partnerHref } from "@/lib/config";
/* Every link to the partner goes through here so the referral tag is always added. No personal data is passed. */
export default function PartnerLink({ children, className = "btn" }: { children: React.ReactNode; className?: string }) {
  return (
    <a href={partnerHref()} target="_blank" rel="noopener" className={className}>
      {children}<span className="sr-only"> (opens our partner in a new tab)</span>
    </a>
  );
}
