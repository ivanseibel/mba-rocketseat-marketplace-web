import * as HugeIcons from "hugeicons-react";
import type React from "react";
import { useState } from "react";

interface InputProps {
	label: string;
	placeholder?: string;
	id: string;
	type: string;
	icon?: keyof typeof HugeIcons;
	error?: string;
}

export function Input({
	label,
	placeholder = label,
	id,
	type,
	icon,
	error,
}: InputProps): JSX.Element {
	const [showPassword, setShowPassword] = useState(false);
	const [isFocused, setIsFocused] = useState(false);
	const [isFilled, setIsFilled] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
		setIsFocused(false);
	};

	const IconComponent = icon ? (HugeIcons[icon] as React.ElementType) : null;

	return (
		<div className="flex flex-col mb-5 w-full">
			<label
				htmlFor={id}
				className={`label-md uppercase ${
					isFocused ? "text-orange-base" : "text-gray-300"
				}`}
			>
				{label}
			</label>
			<div className="relative flex items-center">
				{IconComponent && (
					<div
						className={`absolute left-0 pl-0 ${
							isFocused || isFilled ? "text-orange-base" : "text-gray-300"
						}`}
					>
						<IconComponent />
					</div>
				)}
				<input
					placeholder={placeholder}
					type={type === "password" && showPassword ? "text" : type}
					id={id}
					className={`w-full px-3 py-2 border-b border-gray-100 focus:outline-none focus:border-gray-400 text-gray-400 body-md placeholder-gray-200 ${
						icon ? "pl-10" : ""
					} ${type === "password" ? "pr-10" : ""}`}
					onFocus={handleFocus}
					onBlur={handleBlur}
					onChange={(e) => setIsFilled(e.target.value.length > 0)}
				/>
				{type === "password" && (
					// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
					<div
						className={`absolute right-0 pr-3 cursor-pointer ${
							isFocused ? "text-orange-base" : "text-gray-300"
						}`}
						onClick={togglePasswordVisibility}
					>
						{showPassword ? <HugeIcons.ViewOffIcon /> : <HugeIcons.ViewIcon />}
					</div>
				)}
			</div>
			{error && (
				<div className="flex items-center mt-2 body-xs text-danger">
					<HugeIcons.AlertCircleIcon className="w-4 h-4 mr-1" />
					{error}
				</div>
			)}
		</div>
	);
}
