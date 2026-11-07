export default function Azulejo({ className = "" }: { className?: string }) {
  return <div className={`azulejo ${className}`} aria-hidden="true" />;
}
