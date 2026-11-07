import Link from "next/link";
import type { Post } from "@/lib/posts";
import { catName } from "@/lib/taxonomy";
import Photo from "./Photo";

export default function PostCard({ post, large = false }: { post: Post; large?: boolean }) {
  return (
    <Link href={`/discover-portugal/${post.slug}`} className="group block overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md">
      <Photo what={post.photo} className={`${large ? "aspect-[4/3]" : "aspect-[3/2]"} w-full`} />
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-atlantic">{catName(post.categories[0])}</p>
        <h3 className={`mt-1 ${large ? "text-2xl" : "text-xl"} group-hover:underline`}>{post.title}</h3>
        <p className="mt-2 text-sm text-ink/80">{post.readingTime}</p>
      </div>
    </Link>
  );
}
