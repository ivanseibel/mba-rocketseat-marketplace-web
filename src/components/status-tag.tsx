import { cn } from "../lib/utils";

interface TagProps {
	variant: "published" | "sold" | "inactive";
}

export function StatusTag({ variant }: TagProps): JSX.Element {
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

	const classes = cn(
		"rounded-full px-2 py-1 font-medium text-[10px] uppercase",
		variant === "published" && "bg-blue-dark text-white",
		variant === "sold" && "bg-success text-white",
		variant === "inactive" && "bg-gray-300 text-white",
	);

	return (
		<div className="flex items-center">
			<div className={classes}>{getTagText(variant)}</div>
		</div>
	);
}
