import { Outlet } from "react-router-dom";

export function AuthLayout() {
	return (
		<div className="flex justify-center items-center bg-background w-full h-screen">
			<aside className="relative w-1/2 h-full">
				<div className="flex p-10">
					<img src="/logo-full.svg" alt="" />
				</div>
				<div className="absolute inset-0 flex justify-center items-center">
					<img src="/background.png" className="w-[755px] h-[497px]" alt="" />
				</div>
			</aside>
			<main className="flex flex-1 bg-white m-24 p-20 rounded-[32px] max-w-[611px]">
				<Outlet />
			</main>
		</div>
	);
}
