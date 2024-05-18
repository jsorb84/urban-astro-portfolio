import AllTimeViews from "./AllTimeViews";
import BioLinkIcon from "./BioLinkIcon";

export default function ContactMenu() {
	return (
		<>
			<div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-2 mb-8">
				<a
					href="https://github.com/jsorb84"
					className="transform hover:scale-[1.01] transition-all border dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
					target="_blank"
					rel="noopener noreferrer"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="2em"
						height="2em"
						viewBox="0 0 24 24"
						aria-label="Github"
					>
						<path
							fill="currentColor"
							d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
						></path>
					</svg>
					<h3 className="text-lg font-bold text-left mt-2 text-gray-900 dark:text-gray-100">
						Github
					</h3>
					<p className="mt-1 text-gray-700 dark:text-gray-400">
						Check out my work on GitHub!
					</p>
				</a>
				<a
					href="https://twitter.com/officialurbanus"
					className="transform hover:scale-[1.01] transition-all border dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
					target="_blank"
					rel="noopener noreferrer"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="2em"
						height="2em"
						viewBox="0 0 24 24"
					>
						<path
							fill="currentColor"
							d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
						></path>
					</svg>
					<h3 className="text-lg font-bold text-left mt-2 text-gray-900 dark:text-gray-100">
						Twitter
					</h3>
					<p className="mt-1 text-gray-700 dark:text-gray-400">
						Follow me on X (Twitter)
					</p>
				</a>
				<a
					href="https://bio.link/officialurban"
					className="transform hover:scale-[1.01] transition-all border dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
					target="_blank"
					rel="noopener noreferrer"
				>
					<BioLinkIcon />
					<h3 className="text-lg font-bold text-left mt-2 text-gray-900 dark:text-gray-100">
						Bio.Link
					</h3>
					<p className="mt-1 text-gray-700 dark:text-gray-400">
						All of my links and resources are available on my Bio.link!
					</p>
				</a>
			</div>
		</>
	);
}
