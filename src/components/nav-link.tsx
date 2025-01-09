import * as HugeIcons from "hugeicons-react";
import { Link, type LinkProps, useLocation } from "react-router-dom";

export type NavLinkProps = LinkProps & {
	icon: keyof typeof HugeIcons;
};

export function NavLink({ children, ...props }: NavLinkProps) {
	const { pathname } = useLocation();

	const IconComponent = HugeIcons[props.icon] as React.ElementType;

	return (
		<Link
			data-current={pathname === props.to}
			className="body-sm px-4 h-10 flex rounded-[10px] items-center gap-1.5 text-gray-300 hover:text-orange-base data-[current=true]:bg-shape data-[current=true]:font-medium data-[current=true]:text-orange-base"
			{...props}
		>
			<IconComponent size={20} strokeWidth={2} />
			{children}
		</Link>
	);
}
