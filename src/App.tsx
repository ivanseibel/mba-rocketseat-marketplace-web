import { AccessIcon, Mail02Icon } from "hugeicons-react";
import { Input } from "./components/input";
import "./index.css";

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
		</div>
	);
}
