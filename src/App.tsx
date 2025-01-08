import "./index.css";
import { Button } from "./components/button";
import { Input } from "./components/input";
import { Link } from "./components/link";
import { Select } from "./components/select";

export function App() {
	return (
		<div className="flex mt-10 flex-col justify-center items-center mx-auto w-96">
			{/* Testing Input components */}
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
