import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHead from "@/components/PageHead";
import PostCard from "@/components/PostCard";
import Placeholder from "@/components/Placeholder";
import { getPosts } from "@/lib/posts";
import { groups } from "@/lib/taxonomy";

type P = { params: Promise<{ slug: string }> };
export const generateStaticParams = () => groups.map((g) => ({ slug: g.slug }));
export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params;
  const g = groups.find((x) => x.slug === slug);
  return { title: `${g?.name ?? "Group"} stories`, description: `Wonder Portugal stories for ${g?.name ?? "you"}.` };
}

export default async function Page({ params }: P) {
  const { slug } = await params;
  const g = groups.find((x) => x.slug === slug);
  if (!g) notFound();
  const posts = getPosts().filter((p) => p.groups.includes(g.slug));
  return (
    <>
      <PageHead title={g.name} line="Stories picked for you." />
      <div className="mx-auto max-w-6xl px-5 pt-6">
        {posts.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{posts.map((p) => <PostCard key={p.slug} post={p} />)}</div>
        ) : (
          <p><Placeholder>[TO BE PROVIDED: {g.name} stories]</Placeholder></p>
        )}
        <p className="mt-10"><Link href="/discover-portugal" className="text-link">Back to Discover Portugal</Link></p>
      </div>
    </>
  );
}
