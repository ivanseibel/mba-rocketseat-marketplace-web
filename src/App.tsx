import { AccessIcon, Mail02Icon, SaleTag02Icon } from "hugeicons-react";
import { Input } from "./components/input";
import "./index.css";
import { Select } from "./components/select";

export function App() {
	return (
		<div className="flex mt-10 flex-col justify-center items-center mx-auto w-96">
			{/* Testing Input components */}
			<Input
				id="email"
				label="Email"
				type="email"
				icon={<Mail02Icon />}
				error="Invalid email"
			/>
			<Input
				id="password"
				label="Password"
				type="password"
				icon={<AccessIcon />}
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
				icon={<SaleTag02Icon />}
			/>
		</div>
	);
}
