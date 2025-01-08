interface TagProps {
	variant: "published" | "sold" | "inactive";
}

export function StatusTag({ variant }: TagProps): JSX.Element {
	const getTagColor = (variant: string) => {
		switch (variant) {
			case "published":
				return "bg-blue-dark text-white";
			case "sold":
				return "bg-success text-white";
			case "inactive":
				return "bg-gray-300 text-white";
			default:
				return "bg-gray-300 text-white";
		}
	};

	const getTagText = (variant: string) => {
		switch (variant) {
			case "published":
				return "Published";
			case "sold":
				return "Sold";
			case "inactive":
				return "Inactive";
			default:
				return "Inactive";
		}
	};

	return (
		<div className="flex items-center">
			<div
				className={`rounded-full px-2 py-1 font-medium text-[10px] uppercase ${getTagColor(variant)}`}
			>
				{getTagText(variant)}
			</div>
		</div>
	);
}
