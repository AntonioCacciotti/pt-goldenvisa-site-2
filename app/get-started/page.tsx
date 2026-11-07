import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import SignupForm from "@/components/SignupForm";
import PartnerLink from "@/components/PartnerLink";

export const metadata: Metadata = {
  title: "Get Started",
  description: "Get the free insider guide to Portugal, or start your Golden Visa with our partner.",
};

export default function Page() {
  return (
    <>
      <PageHead title="Your journey to Portugal starts here." />
      <div className="mx-auto grid max-w-6xl gap-8 px-5 pt-6 md:grid-cols-2">
        <section className="rounded-xl bg-white p-8" aria-labelledby="curious">
          <h2 id="curious" className="text-3xl">Just curious?</h2>
          <p className="mb-6 mt-3">Get the free insider guide.</p>
          <SignupForm idPrefix="gs" source="get-started" />
        </section>
        <section className="flex flex-col rounded-xl bg-white p-8" aria-labelledby="ready">
          <h2 id="ready" className="text-3xl">Ready to begin?</h2>
          <p className="mb-6 mt-3">Start your Golden Visa with our partner.</p>
          <div><PartnerLink>Continue to our partner</PartnerLink></div>
          <p className="mt-auto pt-8 italic">Our partner handles the investment and application. We stay with you for everything Portugal has to offer.</p>
        </section>
      </div>
    </>
  );
}
