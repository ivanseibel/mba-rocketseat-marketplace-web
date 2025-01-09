import { Outlet } from "react-router-dom";

export function AppLayout() {
	return (
		<div>
			<header>
				<h1>Header</h1>
			</header>
			<div>
				<Outlet />
			</div>
		</div>
	);
}
