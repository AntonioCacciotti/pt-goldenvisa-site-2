import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import Placeholder from "@/components/Placeholder";
import Azulejo from "@/components/Azulejo";
import { PARTNER_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: "The Golden Visa, Explained Simply",
  description: "What the Portugal Golden Visa is, how to qualify, and how the fund option works, in plain English.",
};

const options = [
  ["Invest in a venture capital / private equity fund", "€500,000"],
  ["Donate to the arts", "€250,000"],
  ["Donate to research", "€500,000"],
  ["Start a company", "Create 10 jobs, or invest €500,000 and create 5 jobs"],
];

function Q({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-3xl">{q}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <PageHead title="The Golden Visa, explained simply." line="It sounds complicated. Here is how it works." />
      <div className="mx-auto max-w-4xl space-y-14 px-5 pt-6">
        <Q q="What is it?">
          {/* [TO BE CONFIRMED BY LEGAL COUNSEL]: the "average of seven days a year" stay rule below. */}
          <p>A five-year residence permit for people from outside the EU who make a qualifying investment in Portugal.</p>
          <p>It lets you travel freely across Europe&apos;s Schengen Area, and you only need to spend an average of seven days a year in Portugal.</p>
        </Q>
        <Q q="What does “residence permit” mean?">
          <p>It is official permission to live in a country.</p>
        </Q>
        <Q q="What does “Schengen Area” mean?">
          <p>It is a group of European countries you can travel between without passport checks at the borders.</p>
        </Q>

        <Q q="How do I qualify?">
          <p>Since 7 October 2023, these are the options:</p>
          <table className="w-full border-collapse overflow-hidden rounded-xl bg-white text-left">
            <caption className="sr-only">Golden Visa options and amounts</caption>
            <thead>
              <tr className="bg-atlantic text-white">
                <th scope="col" className="p-4 font-semibold">Option</th>
                <th scope="col" className="p-4 font-semibold">Amount</th>
              </tr>
            </thead>
            <tbody>
              {options.map(([o, a]) => (
                <tr key={o} className="border-t border-sand-deep align-top">
                  <th scope="row" className="p-4 font-normal">{o}</th>
                  <td className="p-4">{a}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="italic">Wonder Portugal, in partnership with {PARTNER_NAME}, helps you with the fund option.</p>
        </Q>

        <Q q="What is a “venture capital / private equity fund”?">
          <p>It is a professionally managed pool of money that invests in companies.</p>
        </Q>

        <Q q="The fund option — the rules, simply">
          <ul className="list-disc space-y-2 pl-6 marker:text-terracotta">
            <li>You can&apos;t buy property to qualify for the Golden Visa.</li>
            <li>The fund can&apos;t own property directly. It can own businesses that use property, like hotels or factories.</li>
            <li>At least 60% of the fund&apos;s money goes into companies based in Portugal.</li>
          </ul>
        </Q>

        <Q q="What about citizenship?">
          <p>The Golden Visa can be the start of a path to Portuguese citizenship.</p>
          <dl className="space-y-3">
            <div className="rounded-xl bg-white p-5">
              <dt className="font-semibold text-atlantic">Permanent residence</dt>
              <dd>May be possible after 5 years.</dd>
            </div>
            <div className="rounded-xl bg-white p-5">
              <dt className="font-semibold text-atlantic">Citizenship</dt>
              <dd><Placeholder>[TO BE CONFIRMED BY LEGAL COUNSEL: current residence period required]</Placeholder></dd>
            </div>
          </dl>
        </Q>

        <Q q="More questions?">
          <p><Placeholder>[TO BE PROVIDED: list of frequently asked questions and approved answers]</Placeholder></p>
        </Q>
      </div>

      <section className="mx-auto mt-20 max-w-4xl px-5 text-center">
        <Azulejo className="mb-10 rounded" />
        <h2 className="text-3xl md:text-4xl">Ready to see what is possible?</h2>
        <p className="mt-6"><Link href="/get-started" className="btn">Get Started</Link></p>
      </section>
    </>
  );
}
