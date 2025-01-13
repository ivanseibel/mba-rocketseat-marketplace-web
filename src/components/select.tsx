import * as SelectPrimitive from "@radix-ui/react-select";
import * as HugeIcons from "hugeicons-react";
import { useState } from "react";

interface SelectProps {
	label?: string;
	placeholder?: string;
	id: string;
	options: { value: string; label: string }[];
	icon?: keyof typeof HugeIcons;
	error?: string;
}

export function Select({
	label,
	placeholder = label,
	id,
	options,
	error,
	icon,
}: SelectProps): JSX.Element {
	const [isFocused, setIsFocused] = useState(false);
	const [selectedValue, setSelectedValue] = useState<string | null>(null);

	// Handle when the input gains focus
	const handleFocus = () => setIsFocused(true);

	// Handle when the input loses focus
	const handleBlur = () => setIsFocused(false);

	// Clear the selected value and ensure visual updates
	const handleClear = () => {
		setSelectedValue(null); // Reset the selected value
	};

	// Helper to find the label of the selected value
	const getSelectedLabel = () => {
		const selectedOption = options.find(
			(option) => option.value === selectedValue,
		);
		return selectedOption ? selectedOption.label : placeholder;
	};

	const IconComponent = icon ? (HugeIcons[icon] as React.ElementType) : null;

	return (
		<div className="flex flex-col mb-5 w-full">
			{/* Label for the select input */}
			{label && (
				<label
					htmlFor={id}
					className={`label-md uppercase ${
						isFocused ? "text-orange-base" : "text-gray-300"
					}`}
				>
					{label}
				</label>
			)}

			{/* Radix Select Root */}
			<SelectPrimitive.Root
				value={selectedValue || undefined}
				onValueChange={(value) => setSelectedValue(value)}
			>
				<div className="relative">
					{/* Trigger for opening the select dropdown */}
					<SelectPrimitive.Trigger
						id={id}
						className={`relative flex w-full px-3 py-2 justify-between border-b border-gray-100 focus:outline-none focus:border-gray-400 text-gray-400 body-md placeholder-gray-200 ${
							isFocused ? "text-orange-base" : "text-gray-300"
						}`}
						onFocus={handleFocus}
						onBlur={handleBlur}
					>
						{/* Optional icon on the left side of the input */}
						{IconComponent && (
							<div
								className={`absolute left-0 pl-0 ${
									isFocused || selectedValue
										? "text-orange-base"
										: "text-gray-300"
								}`}
							>
								<IconComponent />
							</div>
						)}

						{/* Display the selected value or placeholder */}
						<div
							className={`flex items-center w-full ${icon ? "pl-7" : ""} ${selectedValue === null && "text-gray-200"}`}
						>
							<SelectPrimitive.Value placeholder={placeholder}>
								{getSelectedLabel()}
							</SelectPrimitive.Value>
						</div>

						{/* Dropdown arrow icon */}
						<SelectPrimitive.Icon>
							<HugeIcons.ArrowDown01Icon />
						</SelectPrimitive.Icon>
					</SelectPrimitive.Trigger>

					{/* Clear button to reset selection */}
					{selectedValue && (
						<button
							type="button"
							onClick={handleClear}
							className="top-1/2 right-9 absolute bg-shape px-1 rounded-full text-gray-300 hover:text-gray-500 leading-none transform -translate-y-1/2"
							aria-label="Clear selection"
						>
							<HugeIcons.Cancel01Icon width={16} />
						</button>
					)}

					{/* Dropdown content with options */}
					<SelectPrimitive.Content>
						<SelectPrimitive.Viewport className="flex flex-col items-start bg-white shadow-lg py-2 rounded-lg w-full">
							{options.map((option) => (
								<SelectPrimitive.Item
									key={option.value}
									value={option.value}
									className="flex justify-between items-center px-4 w-full h-12 data-[state=checked]:text-orange-base hover:text-orange-dark cursor-pointer"
								>
									{/* Display option label */}
									<SelectPrimitive.ItemText>
										{option.label}
									</SelectPrimitive.ItemText>

									{/* Checkmark for selected item */}
									<SelectPrimitive.ItemIndicator>
										<HugeIcons.Tick02Icon />
									</SelectPrimitive.ItemIndicator>
								</SelectPrimitive.Item>
							))}
						</SelectPrimitive.Viewport>
					</SelectPrimitive.Content>
				</div>
			</SelectPrimitive.Root>

			{/* Error message display */}
			{error && (
				<div className="flex items-center mt-2 text-danger body-xs">
					<HugeIcons.AlertCircleIcon className="mr-1 w-4 h-4" />
					{error}
				</div>
			)}
		</div>
	);
}
