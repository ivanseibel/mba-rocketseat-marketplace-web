import * as RadixAvatar from "@radix-ui/react-avatar";
import { ImageUploadIcon } from "hugeicons-react";
import { useRef, useState } from "react";

interface ProductImageProps {
	src?: string;
	onFileSelect?: (file: File) => void;
}

export function ProductImageUpload({ src, onFileSelect }: ProductImageProps) {
	const [localSrc, setLocalSrc] = useState<string>();
	const fileInputRef = useRef<HTMLInputElement>(null);
	const finalSrc = localSrc || src;

	function handleFileSelect(event: React.ChangeEvent<HTMLInputElement>) {
		const file = event.target.files?.[0];
		if (!file) return;
		if (!file.type.startsWith("image/"))
			return alert("Please select an image file");
		setLocalSrc(URL.createObjectURL(file));
		onFileSelect?.(file);
	}

	function handleClick() {
		fileInputRef.current?.click();
	}

	return (
		<RadixAvatar.Root
			className="relative w-[415px] h-[340px] rounded-xl overflow-hidden bg-shape flex items-center justify-center cursor-pointer group"
			onClick={handleClick}
		>
			<input
				type="file"
				ref={fileInputRef}
				className="hidden"
				accept="image/png,image/jpeg"
				onChange={handleFileSelect}
			/>
			{finalSrc && (
				<RadixAvatar.Image
					src={finalSrc}
					alt="product image"
					className="w-full h-full object-cover transition-all duration-200 ease-in-out group-hover:brightness-50"
				/>
			)}
			{finalSrc && (
				<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100">
					<div className="flex flex-col gap-3 items-center justify-center w-full h-full bg-black bg-opacity-50 rounded-xl">
						<ImageUploadIcon className="w-6 h-6 text-white" />
						<p
							className="text-white text-opacity-70 text-sm font-medium text-center"
							style={{ textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}
						>
							Click to upload
							<br />a new image
						</p>
					</div>
				</div>
			)}
			<RadixAvatar.Fallback className="flex items-center justify-center w-full h-full">
				<ImageUploadIcon className="w-6 h-6 text-orange-dark" />
			</RadixAvatar.Fallback>
		</RadixAvatar.Root>
	);
}
