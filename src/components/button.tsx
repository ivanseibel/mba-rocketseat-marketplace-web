import * as HugeIcons from "hugeicons-react";
import { cn } from "../lib/utils";

interface ButtonProps {
	label: string;
	size?: "sm" | "md";
	variant?: "solid" | "outline";
	icon?: keyof typeof HugeIcons;
	iconPosition?: "left" | "right";
	onClick?: () => void;
}

export function Button({
	label,
	size = "md",
	variant = "solid",
	icon,
	iconPosition = "left",
	onClick,
}: ButtonProps): JSX.Element {
	const iconProps =
		size === "sm" ? { strokeWidth: 2, size: 16 } : { strokeWidth: 2, size: 24 };

	const IconComponent = icon ? (HugeIcons[icon] as React.ElementType) : null;

	const buttonClasses = cn(
		"flex w-full items-center gap-2 justify-center rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-base focus:ring-opacity-50",
		size === "sm" ? "px-4 text-sm h-10" : "px-4 text-base h-14",
		variant === "outline"
			? "border border-orange-base text-orange-base bg-white hover:text-orange-dark hover:border-orange-dark"
			: "bg-orange-base text-white hover:bg-orange-dark",
	);

	return (
		<button type="button" className={buttonClasses} onClick={onClick}>
			{icon && iconPosition === "left" && (
				<span className="mr-2">
					{IconComponent && <IconComponent {...iconProps} />}
				</span>
			)}

			<span>{label}</span>

			{icon && iconPosition === "right" && (
				<span className="ml-2">
					{IconComponent && <IconComponent {...iconProps} />}
				</span>
			)}
		</button>
	);
}
