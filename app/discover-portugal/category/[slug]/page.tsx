import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHead from "@/components/PageHead";
import PostCard from "@/components/PostCard";
import Placeholder from "@/components/Placeholder";
import { getPosts } from "@/lib/posts";
import { categories } from "@/lib/taxonomy";

type P = { params: Promise<{ slug: string }> };
export const generateStaticParams = () => categories.map((c) => ({ slug: c.slug }));
export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params;
  const c = categories.find((x) => x.slug === slug);
  return { title: `${c?.name ?? "Stories"} stories`, description: `Wonder Portugal stories about ${c?.name ?? "Portugal"}.` };
}

export default async function Page({ params }: P) {
  const { slug } = await params;
  const c = categories.find((x) => x.slug === slug);
  if (!c) notFound();
  const posts = getPosts().filter((p) => p.categories.includes(c.slug));
  return (
    <>
      <PageHead title={c.name} line="Stories from Discover Portugal." />
      <div className="mx-auto max-w-6xl px-5 pt-6">
        {posts.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{posts.map((p) => <PostCard key={p.slug} post={p} />)}</div>
        ) : (
          <p><Placeholder>[TO BE PROVIDED: {c.name} stories]</Placeholder></p>
        )}
        <p className="mt-10"><Link href="/discover-portugal" className="text-link">Back to Discover Portugal</Link></p>
      </div>
    </>
  );
}
