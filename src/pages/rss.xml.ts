import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";

export async function GET(context: APIContext) {
	const blogs = await getCollection("blogs");
	const sortedPosts = blogs.sort(
		(a, b) =>
			Number(new Date(b.data.date ?? new Date())) -
			Number(new Date(a.data.date ?? new Date()))
	);
	return rss({
		title: "𝔘𝔯𝔟𝔞𝔫 Consulting",
		description: "𝔘𝔯𝔟𝔞𝔫 Consulting Landing Page",
		site: context.site || "https://officialurban.xyz",
		items: sortedPosts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.date,
			description: post.data.description,
			link: `/blog/${post.slug}/`,
		})),
		customData: `<language>en-us</language>`,
	});
}
