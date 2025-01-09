import "./index.css";
import { AvatarUpload } from "./components/avatar-upload";
import { Button } from "./components/button";
import { CategoryTag } from "./components/category-tag";
import { Input } from "./components/input";
import { Link } from "./components/link";
import { ProductCard } from "./components/product-card";
import { ProductImageUpload } from "./components/product-image-upload";
import { Select } from "./components/select";
import { StatusTag } from "./components/status-tag";
import { User } from "./components/user";

export function App() {
	return (
		<div className="flex mt-10 flex-col justify-center items-center mx-auto w-full">
			{/* Testing Avatar Upload and User components */}
			<div className="grid grid-cols-3 gap-4 mb-4">
				<AvatarUpload
					src="https://github.com/ivanseibel.png"
					onFileSelect={(file) => console.log("Selected file: ", file)}
				/>
				<AvatarUpload src={undefined} />
				<User />
			</div>

			{/* Testing Product Card */}
			<div className="mb-4">
				<ProductCard
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac urna eget nunc ultricies fermentum. Nullam auctor, nunc nec ultricies fermentum, nunc."
					imageUrl="https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=3880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					status="published"
					price={150}
					category="furniture"
					title="Lorem Ipsum"
				/>
			</div>

			{/* Testing Product Upload component */}
			<div className="grid grid-cols-2 gap-4 mb-4">
				<ProductImageUpload
					src="https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=3880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					onFileSelect={(file) => console.log("Selected file: ", file)}
				/>
				<ProductImageUpload src={undefined} />
			</div>

			{/* Testing tag components */}
			<div className="flex gap-4 mb-4">
				<StatusTag variant="published" />
				<StatusTag variant="sold" />
				<StatusTag variant="inactive" />
				<CategoryTag label="furniture" />
			</div>

			{/* Testing Input components */}
			<div className="grid grid-cols-1 gap-4">
				<Input
					id="email"
					label="Email"
					type="email"
					icon={"Mail02Icon"}
					error="Invalid email"
				/>
				<Input
					id="password"
					label="Password"
					type="password"
					icon={"AccessIcon"}
				/>

				{/* Testing Select components */}
				<Select
					id="select"
					label="Select"
					options={[
						{ value: "1", label: "Option 1" },
						{ value: "2", label: "Option 2" },
						{ value: "3", label: "Option 3" },
					]}
					error="Select an option"
					icon={"SaleTag02Icon"}
				/>
			</div>

			{/* Testing Button components */}
			<div className="grid grid-cols-2 gap-4 mt-5">
				<Button
					label="Placeholder"
					onClick={() => alert("Button clicked")}
					icon={"Mail02Icon"}
					iconPosition="left"
					size="md"
					variant="solid"
				/>
				<Button
					label="Placeholder"
					onClick={() => alert("Button clicked")}
					icon={"ArrowRight02Icon"}
					iconPosition="right"
					size="md"
					variant="solid"
				/>
				<Button
					label="Placeholder"
					onClick={() => alert("Button clicked")}
					icon={"PlusSignIcon"}
					iconPosition="left"
					size="md"
					variant="outline"
				/>
				<Button
					label="Placeholder"
					onClick={() => alert("Button clicked")}
					icon={"ArrowRight02Icon"}
					iconPosition="right"
					size="md"
					variant="outline"
				/>
				<Button
					label="Placeholder"
					onClick={() => alert("Button clicked")}
					icon={"PlusSignIcon"}
					iconPosition="left"
					size="sm"
					variant="solid"
				/>
				<Button
					label="Placeholder"
					onClick={() => alert("Button clicked")}
					icon={"ArrowRight02Icon"}
					iconPosition="right"
					size="sm"
					variant="solid"
				/>
				<Button
					label="Placeholder"
					onClick={() => alert("Button clicked")}
					icon={"PlusSignIcon"}
					iconPosition="left"
					size="sm"
					variant="outline"
				/>
				<Button
					label="Placeholder"
					onClick={() => alert("Button clicked")}
					icon={"ArrowRight02Icon"}
					iconPosition="right"
					size="sm"
					variant="outline"
				/>
			</div>

			{/* Testing Link component */}
			<div className="mt-5 grid grid-cols-2 gap-4">
				<Link
					label="Placeholder"
					to="/home"
					icon="Mail02Icon"
					iconPosition="left"
				/>
				<Link
					label="Placeholder"
					to="/home"
					icon="Mail02Icon"
					iconPosition="right"
				/>
			</div>
		</div>
	);
}
