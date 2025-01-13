import { Link } from "react-router-dom";
import { CategoryTag } from "./category-tag";
import { StatusTag } from "./status-tag";

export interface ProductCardProps {
	id: string;
	imageUrl: string;
	title: string;
	description: string;
	price: number;
	status: "published" | "sold" | "inactive";
	category: string;
}

export function ProductCard({
	id,
	imageUrl,
	title,
	description,
	price,
	status,
	category,
}: ProductCardProps) {
	return (
		<Link to={`/product/${id}`} className="block">
			<div className="max-w-sm max-h-60 transition-all duration-200 p-1 rounded-[20px] border-2 border-white bg-white hover:border-2 hover:border-blue-base">
				<div className="relative">
					<img
						className="w-full rounded-[20px] h-32 object-cover"
						src={imageUrl}
						alt={title}
					/>
					<div className="absolute flex gap-2 top-0 right-0 mr-2 mt-2">
						<StatusTag variant={status} />
						<CategoryTag label={category} />
					</div>
				</div>
				<div className="p-3">
					<div className="flex justify-between items-center">
						<h3 className="subtitle text-gray-400">{title}</h3>
						<div className="flex items-baseline gap-1">
							<span className="label-md text-gray-500">$</span>
							<p className="font-dm-sans text-lg font-bold text-gray-500">
								{price.toFixed(2)}
							</p>
						</div>
					</div>
					<div>
						<p className="body-sm text-gray-300 overflow-hidden text-pretty line-clamp-2">
							{description}
						</p>
					</div>
				</div>
			</div>
		</Link>
	);
}
