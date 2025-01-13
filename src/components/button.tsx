import * as HugeIcons from "hugeicons-react";

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
	// Define size-based classes for padding, font size, and height
	const sizeClasses =
		size === "sm" ? "px-4 text-sm h-10" : "px-4 text-base h-14";

	// Define variant-based classes for styles (solid or outline)
	const variantClasses =
		variant === "outline"
			? "border border-orange-base text-orange-base bg-white hover:text-orange-dark hover:border-orange-dark"
			: "bg-orange-base text-white hover:bg-orange-dark";

	// Define icon size and stroke width based on button size
	const iconProps =
		size === "sm" ? { strokeWidth: 2, size: 16 } : { strokeWidth: 2, size: 24 };

	const IconComponent = icon ? (HugeIcons[icon] as React.ElementType) : null;

	return (
		<button
			type="button"
			className={`flex w-full items-center gap-2 justify-center ${sizeClasses} ${variantClasses} rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-base focus:ring-opacity-50`}
			onClick={onClick}
		>
			{/* Render icon on the left if specified */}
			{icon && iconPosition === "left" && (
				<span className="mr-2">
					{IconComponent && <IconComponent {...iconProps} />}
				</span>
			)}
			{/* Render the button label */}
			<span>{label}</span>
			{/* Render icon on the right if specified */}
			{icon && iconPosition === "right" && (
				<span className="ml-2">
					{IconComponent && <IconComponent {...iconProps} />}
				</span>
			)}
		</button>
	);
}
