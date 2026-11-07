/* Visible marker for missing content. Format: [TO BE PROVIDED: ...] */
export default function Placeholder({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <span className={`inline border border-dashed px-2 py-0.5 ${dark ? "border-white text-white" : "border-terracotta bg-terracotta/10 text-ink"}`}>{children}</span>;
}
