import { CategoryTag } from "./category-tag";
import { StatusTag } from "./status-tag";

interface ProductCardProps {
	imageUrl: string;
	title: string;
	description: string;
	price: number;
	status: "published" | "sold" | "inactive";
	category: string;
}

export function ProductCard({
	imageUrl,
	title,
	description,
	price,
	status,
	category,
}: ProductCardProps) {
	return (
		<div className="max-w-sm transition-all duration-200 w-80 p-1 rounded-[20px] border-2 border-white hover:border-2 hover:border-blue-base">
			<div className="relative">
				<img
					className="w-full rounded-[20px] h-36 object-cover"
					src={imageUrl}
					alt={title}
				/>
				<div className="absolute flex gap-2 top-0 right-0 mr-2 mt-2">
					<StatusTag variant={status} />
					<CategoryTag label={category} />
				</div>
			</div>
			<div className="p-3">
				<div className="flex justify-between items-center mt-2">
					<h3 className="subtitle text-gray-400">{title}</h3>
					<div className="flex items-baseline gap-1">
						<span className="label-md text-gray-500">$</span>
						<p className="font-dm-sans text-lg font-bold text-gray-500">
							{price.toFixed(2)}
						</p>
					</div>
				</div>
				<div>
					<p className="body-sm text-gray-300 overflow-hidden text-ellipsis line-clamp-2">
						{description}
					</p>
				</div>
			</div>
		</div>
	);
}
