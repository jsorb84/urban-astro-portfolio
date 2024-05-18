import type { IService } from "../content/config";

export default function Service({ icon, title, subtitle, href }: IService) {
	return (
		<>
			<a
				href={href}
				className="transform hover:scale-[1.01] transition-all border dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
				target="_blank"
				rel="noopener noreferrer"
			>
				{/* <svg
					xmlns="http://www.w3.org/2000/svg"
					width="2em"
					height="2em"
					aria-label="Telegram"
					viewBox="0 0 24 24"
				>
					{icon !== undefined && icon.length > 0 ? (
						icon.map((i) => (
							<path
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d={
									i ??
									"M21 5L2 12.5l7 1M21 5l-2.5 15L9 13.5M21 5L9 13.5m0 0V19l3.249-3.277"
								}
							></path>
						))
					) : (
						<></>
					)}

				</svg> */}
				<h3 className="text-lg font-bold text-left mt-2 text-gray-900 dark:text-gray-100">
					{title}
				</h3>
				<p className="mt-1 text-gray-700 dark:text-gray-400">{subtitle}</p>
			</a>
		</>
	);
}
