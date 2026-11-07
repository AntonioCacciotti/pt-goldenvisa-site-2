import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

/**
 * Posts are Markdown files in /content/posts. To add a story, add a file. No code changes.
 * Front matter: title, description, categories[], groups[], featured, photo, readingTime (optional), order.
 */
export type Post = {
  slug: string; title: string; description: string; categories: string[]; groups: string[];
  featured: boolean; photo: string; readingTime: string; order: number; html: string;
};

const dir = path.join(process.cwd(), "content", "posts");

function load(file: string): Post {
  const { data, content } = matter(fs.readFileSync(path.join(dir, file), "utf8"));
  const body = content.trim();
  const isPlaceholder = body.includes("[TO BE PROVIDED");
  const words = body.split(/\s+/).filter(Boolean).length;
  const readingTime = data.readingTime ?? (isPlaceholder ? "[TO BE PROVIDED: reading time]" : `${Math.max(1, Math.ceil(words / 200))} min read`);
  return {
    slug: file.replace(/\.md$/, ""), title: data.title, description: data.description ?? "",
    categories: data.categories ?? [], groups: data.groups ?? [], featured: !!data.featured,
    photo: data.photo ?? data.title, readingTime, order: data.order ?? 99,
    html: marked.parse(body, { async: false }) as string,
  };
}

export function getPosts(): Post[] {
  return fs.readdirSync(dir).filter((f) => f.endsWith(".md")).map(load).sort((a, b) => a.order - b.order);
}
export const getPost = (slug: string) => getPosts().find((p) => p.slug === slug);

export function related(post: Post, n = 3): Post[] {
  const all = getPosts().filter((p) => p.slug !== post.slug);
  const same = all.filter((p) => p.categories.some((c) => post.categories.includes(c)));
  return [...same, ...all.filter((p) => !same.includes(p))].slice(0, n);
}
