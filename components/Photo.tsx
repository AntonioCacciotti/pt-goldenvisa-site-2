/* Labelled placeholder image frame. Replace with a compressed image when photos are supplied. */
export default function Photo({ what, className = "" }: { what: string; className?: string }) {
  return (
    <div role="img" aria-label={`Placeholder for photograph: ${what}`} className={`flex items-center justify-center bg-sand-deep p-4 text-center text-sm text-ink ${className}`}>
      [TO BE PROVIDED: photo of {what}]
    </div>
  );
}
