export const categories = [
  { slug: "lisbon", name: "Lisbon" },
  { slug: "europe", name: "Europe" },
  { slug: "nature", name: "Nature" },
  { slug: "history", name: "History" },
  { slug: "study", name: "Study" },
  { slug: "nightlife", name: "Nightlife" },
];
export const groups = [
  { slug: "lgbtq", name: "LGBTQ+" },
  { slug: "yachting-sailing", name: "Yachting & Sailing" },
  { slug: "food-lovers", name: "Food Lovers" },
];
export const catName = (s: string) => categories.find((c) => c.slug === s)?.name ?? s;
export const groupName = (s: string) => groups.find((c) => c.slug === s)?.name ?? s;
