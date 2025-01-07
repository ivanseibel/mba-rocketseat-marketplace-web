import * as SelectPrimitive from "@radix-ui/react-select";
import {
	AlertCircleIcon,
	ArrowDown01Icon,
	Cancel01Icon,
	Tick02Icon,
} from "hugeicons-react";
import { useState } from "react";

interface SelectProps {
	label: string;
	placeholder?: string;
	id: string;
	options: { value: string; label: string }[];
	icon?: React.ReactNode;
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

	return (
		<div className="flex flex-col mb-5 w-full">
			{/* Label for the select input */}
			<label
				htmlFor={id}
				className={`label-md uppercase ${
					isFocused ? "text-orange-base" : "text-gray-300"
				}`}
			>
				{label}
			</label>

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
							isFocused || selectedValue ? "text-orange-base" : "text-gray-300"
						}`}
						onFocus={handleFocus}
						onBlur={handleBlur}
					>
						{/* Optional icon on the left side of the input */}
						{icon && (
							<div
								className={`absolute left-0 pl-0 ${
									isFocused || selectedValue
										? "text-orange-base"
										: "text-gray-300"
								}`}
							>
								{icon}
							</div>
						)}

						{/* Display the selected value or placeholder */}
						<div className="flex items-center w-full pl-4">
							<SelectPrimitive.Value placeholder={placeholder}>
								{getSelectedLabel()}
							</SelectPrimitive.Value>
						</div>

						{/* Dropdown arrow icon */}
						<SelectPrimitive.Icon>
							<ArrowDown01Icon />
						</SelectPrimitive.Icon>
					</SelectPrimitive.Trigger>

					{/* Clear button to reset selection */}
					{selectedValue && (
						<button
							type="button"
							onClick={handleClear}
							className="absolute leading-none right-9 top-1/2 px-1 bg-shape rounded-full transform -translate-y-1/2 text-gray-300 hover:text-gray-500"
							aria-label="Clear selection"
						>
							<Cancel01Icon width={16} />
						</button>
					)}

					{/* Dropdown content with options */}
					<SelectPrimitive.Content>
						<SelectPrimitive.Viewport className="bg-white rounded-lg py-2 shadow-lg items-start flex flex-col w-full">
							{options.map((option) => (
								<SelectPrimitive.Item
									key={option.value}
									value={option.value}
									className="cursor-pointer px-4 h-12 justify-between hover:text-orange-dark flex items-center w-full data-[state=checked]:text-orange-base"
								>
									{/* Display option label */}
									<SelectPrimitive.ItemText>
										{option.label}
									</SelectPrimitive.ItemText>

									{/* Checkmark for selected item */}
									<SelectPrimitive.ItemIndicator>
										<Tick02Icon />
									</SelectPrimitive.ItemIndicator>
								</SelectPrimitive.Item>
							))}
						</SelectPrimitive.Viewport>
					</SelectPrimitive.Content>
				</div>
			</SelectPrimitive.Root>

			{/* Error message display */}
			{error && (
				<div className="flex items-center mt-2 body-xs text-danger">
					<AlertCircleIcon className="w-4 h-4 mr-1" />
					{error}
				</div>
			)}
		</div>
	);
}
