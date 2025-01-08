interface CategoryTagProps {
	label: string;
}

export function CategoryTag({ label }: CategoryTagProps): JSX.Element {
	return (
		<div className="flex items-center">
			<div
				className={
					"rounded-full px-2 py-1 font-medium text-[10px] uppercase bg-gray-400 text-white"
				}
			>
				{label}
			</div>
		</div>
	);
}
