import { services } from "../content/config";
import Service from "./Service";
export default function Services() {
	return (
		<div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-2 mb-8">
			{services.map((s) => (
				<Service
					title={s.title}
					icon={s.icon}
					subtitle={s.subtitle}
					href={s.href}
				/>
			))}
		</div>
	);
}
