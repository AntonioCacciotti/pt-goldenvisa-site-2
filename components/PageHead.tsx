export default function PageHead({ title, line }: { title: string; line?: string }) {
  return (
    <section className="mx-auto max-w-4xl px-5 pb-6 pt-14">
      <h1 className="text-4xl md:text-6xl">{title}</h1>
      {line && <p className="mt-5 text-xl">{line}</p>}
    </section>
  );
}
