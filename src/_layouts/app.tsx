import { Link, Outlet } from "react-router-dom";
import { Button } from "../components/button";
import { NavLink } from "../components/nav-link";
import { User } from "../components/user";

export function AppLayout() {
	return (
		<div className="h-screen bg-background">
			<div className="flex flex-col h-full w-full max-w-7xl mx-auto">
				<header className="flex items-center justify-between shadow-sm max-h-20">
					<div className="flex items-center gap-4">
						<Link to={"/"}>
							<img src="logo.svg" alt="" />
						</Link>
					</div>
					<nav className="flex gap-4 flex-1 justify-center">
						<NavLink icon="ChartHistogramIcon" to={"/"}>
							Dashboard
						</NavLink>
						<NavLink icon="PackageIcon" to={"/products"}>
							Products
						</NavLink>
					</nav>
					<div className="flex items-center gap-4">
						<Button
							label="New product"
							icon="PlusSignIcon"
							iconPosition="left"
							size="sm"
							variant="solid"
							onClick={() => {}}
						/>
						<User />
					</div>
				</header>
				<div>
					<Outlet />
				</div>
			</div>
		</div>
	);
}
