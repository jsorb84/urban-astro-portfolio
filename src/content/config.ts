import { defineCollection, z } from "astro:content";

const blogsCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z
			.string()
			.transform((str) => new Date(str))
			.optional(),
		image: z.string(),
	}),
});

const snippetsCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			image: image(),
		}),
});

export interface IService {
	title: string;
	subtitle: string;
	href: string;
	icon?: string[];
}
const ConsultingIcon = [
	"M458.159,404.216c-18.93-33.65-49.934-71.764-100.409-93.431c-28.868,20.196-63.938,32.087-101.745,32.087 c-37.828,0-72.898-11.89-101.767-32.087c-50.474,21.667-81.479,59.782-100.398,93.431C28.731,448.848,48.417,512,91.842,512 c43.426,0,164.164,0,164.164,0s120.726,0,164.153,0C463.583,512,483.269,448.848,458.159,404.216z",
	"M256.005,300.641c74.144,0,134.231-60.108,134.231-134.242v-32.158C390.236,60.108,330.149,0,256.005,0 c-74.155,0-134.252,60.108-134.252,134.242V166.4C121.753,240.533,181.851,300.641,256.005,300.641z",
];
export const services: IService[] = [
	{
		title: "Web Consulting",
		subtitle: "We offer extensive consulting for web development and setup.",
		href: "#",
	},
	{
		title: "Tooling Setup",
		subtitle: "Tooling Setup including e-mail setup, hosting, and more!",
		href: "#",
	},
	{
		title: "Digital Marketing",
		subtitle:
			"We have a team of experts to help you with digital marketing! Including SEO, Social Media, and more!",
		href: "#",
	},
	{
		title: "General Consulting",
		subtitle:
			"We're here to help you with any of your business needs! We have a professional team comprised of experts in the field!",
		href: "#",
	},
];

export const collections = {
	blogs: blogsCollection,
	snippets: snippetsCollection,
};
