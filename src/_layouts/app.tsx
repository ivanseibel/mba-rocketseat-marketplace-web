import { Link, Outlet, useNavigate } from "react-router-dom";
import { Button } from "../components/button";
import { NavLink } from "../components/nav-link";
import { User } from "../components/user";

export function AppLayout() {
	const navigate = useNavigate();

	function handleNewProduct() {
		navigate("/product/create");
	}

	return (
		<div className="bg-background min-h-screen">
			<div className="flex flex-col mx-auto w-full max-w-7xl h-full">
				<header className="flex justify-between items-center shadow-sm min-h-20 max-h-20">
					<div className="flex items-center gap-4">
						<Link to={"/"}>
							<img src="/logo.svg" height={40} width={56} alt="" />
						</Link>
					</div>
					<nav className="flex flex-1 justify-center gap-4">
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
							onClick={handleNewProduct}
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
