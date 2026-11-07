import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Wonder Portugal handles the details you share when you sign up.",
};

export default function Page() {
  return (
    <>
      <PageHead title="Privacy Policy." />
      <div className="mx-auto max-w-4xl px-5 pt-6">
        <section className="rounded-xl bg-white p-6">
          <h2 className="text-2xl">Sign-up form</h2>
          <p className="mt-3"><Placeholder>[TO BE PROVIDED BY LEGAL COUNSEL: Privacy Policy covering the sign-up form, under EU (GDPR) and US state privacy laws]</Placeholder></p>
        </section>
      </div>
    </>
  );
}
