import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Placeholder from "@/components/Placeholder";
import { PARTNER_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: "Important Information",
  description: "Important information about Wonder Portugal and its partner.",
};

const blocks = [
  { h: "Who we are", t: `Wonder Portugal is a partner of ${PARTNER_NAME}. Wonder Portugal does not give legal, tax or investment advice.`, note: "[TO BE CONFIRMED BY LEGAL COUNSEL]" },
  { h: "Investment risk", t: "", note: "[TO BE PROVIDED BY LEGAL COUNSEL: investment risk warning]" },
];

export default function Page() {
  return (
    <>
      <PageHead title="Important Information." />
      <div className="mx-auto max-w-4xl space-y-8 px-5 pt-6">
        {blocks.map((b) => (
          <section key={b.h} className="rounded-xl bg-white p-6">
            <h2 className="text-2xl">{b.h}</h2>
            {b.t && <p className="mt-3">{b.t}</p>}
            <p className="mt-3"><Placeholder>{b.note}</Placeholder></p>
          </section>
        ))}
      </div>
    </>
  );
}
