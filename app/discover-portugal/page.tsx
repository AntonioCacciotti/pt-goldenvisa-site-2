import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import PostCard from "@/components/PostCard";
import Placeholder from "@/components/Placeholder";
import SignupBand from "@/components/SignupBand";
import { getPosts } from "@/lib/posts";
import { categories, groups } from "@/lib/taxonomy";

export const metadata: Metadata = {
  title: "Discover Portugal",
  description: "Stories about Lisbon, Europe, nature, history, study and nightlife. Everything waiting for you in Portugal and Europe.",
};

export default function Page() {
  const posts = getPosts();
  const featured = posts.filter((p) => p.featured);
  return (
    <>
      <PageHead title="Discover Portugal." line="Everything waiting for you in Portugal and Europe." />
      <div className="mx-auto max-w-6xl px-5 pt-6">
        <nav aria-label="Filter by group" className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold uppercase tracking-wider">Filter by group</span>
          {groups.map((g) => (
            <Link key={g.slug} href={`/discover-portugal/group/${g.slug}`} className="rounded-full border-2 border-atlantic px-4 py-1 text-sm font-semibold text-atlantic hover:bg-atlantic hover:text-white">{g.name}</Link>
          ))}
        </nav>

        <section className="mt-12" aria-labelledby="featured-h">
          <h2 id="featured-h" className="text-3xl">Featured stories</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {featured.map((p) => <PostCard key={p.slug} post={p} large />)}
          </div>
        </section>

        {categories.map((c) => {
          const list = posts.filter((p) => p.categories.includes(c.slug)).slice(0, 3);
          return (
            <section key={c.slug} className="mt-16" aria-labelledby={`cat-${c.slug}`}>
              <div className="flex items-baseline justify-between gap-4 border-b-2 border-terracotta pb-2">
                <h2 id={`cat-${c.slug}`} className="text-3xl">{c.name}</h2>
                <Link href={`/discover-portugal/category/${c.slug}`} className="text-link">See all<span className="sr-only"> {c.name} stories</span></Link>
              </div>
              {list.length ? (
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{list.map((p) => <PostCard key={p.slug} post={p} />)}</div>
              ) : (
                <p className="mt-6"><Placeholder>[TO BE PROVIDED: {c.name} stories]</Placeholder></p>
              )}
            </section>
          );
        })}
      </div>
      <SignupBand idPrefix="blog" source="discover-portugal" />
    </>
  );
}
