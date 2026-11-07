import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Photo from "@/components/Photo";
import PostCard from "@/components/PostCard";
import SignupBand from "@/components/SignupBand";
import { getPost, getPosts, related } from "@/lib/posts";
import { catName, groupName } from "@/lib/taxonomy";

type P = { params: Promise<{ slug: string }> };
export const generateStaticParams = () => getPosts().map((p) => ({ slug: p.slug }));
export async function generateMetadata({ params }: P): Promise<Metadata> {
  const p = getPost((await params).slug);
  return { title: p?.title ?? "Story", description: p?.description };
}

export default async function Page({ params }: P) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const more = related(post);
  return (
    <>
      <Photo what={post.photo} className="aspect-[16/7] min-h-56 w-full" />
      <article className="mx-auto max-w-3xl px-5 pt-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-atlantic">
          {post.categories.map(catName).join(" · ")}
          {post.groups.length > 0 && <> · {post.groups.map((g) => <Link key={g} href={`/discover-portugal/group/${g}`} className="underline decoration-terracotta underline-offset-4">{groupName(g)}</Link>)}</>}
        </p>
        <h1 className="mt-3 text-4xl md:text-6xl">{post.title}</h1>
        <p className="mt-4 text-sm">{post.readingTime}</p>
        <div className="post-body mt-8 text-lg" dangerouslySetInnerHTML={{ __html: post.html }} />

        <aside className="mt-14 rounded-xl bg-white p-8 text-center">
          <p className="font-serif text-2xl text-atlantic">Ready to make Portugal home? The Golden Visa is your way in.</p>
          <p className="mt-6"><Link href="/get-started" className="btn">Get Started</Link></p>
        </aside>
      </article>

      <section className="mx-auto mt-16 max-w-6xl px-5" aria-labelledby="more-h">
        <h2 id="more-h" className="text-3xl">More stories like this</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{more.map((p) => <PostCard key={p.slug} post={p} />)}</div>
      </section>
      <SignupBand idPrefix="post" source={`post:${post.slug}`} />
    </>
  );
}
