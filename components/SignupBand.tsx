import SignupForm from "./SignupForm";
import Azulejo from "./Azulejo";

export default function SignupBand({ idPrefix, source }: { idPrefix: string; source: string }) {
  return (
    <section className="on-dark mt-24 bg-atlantic text-white" aria-labelledby={`${idPrefix}-h`}>
      <Azulejo />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2">
        <div>
          <h2 id={`${idPrefix}-h`} className="text-3xl md:text-4xl">Get our free insider guide to Portugal.</h2>
        </div>
        <div className="rounded-xl bg-sand p-6 text-ink"><SignupForm idPrefix={idPrefix} source={source} /></div>
      </div>
    </section>
  );
}
