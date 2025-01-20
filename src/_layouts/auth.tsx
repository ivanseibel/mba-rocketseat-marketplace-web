import { Outlet } from "react-router-dom";

export function AuthLayout() {
	return (
		<div className="flex bg-background w-full h-screen">
			<aside className="relative w-1/2 h-full">
				<div className="flex p-10">
					<img src="/logo-full.svg" alt="" />
				</div>
				<div className="absolute inset-0 flex justify-center items-center">
					<img src="/background.png" className="w-[755px] h-[497px]" alt="" />
				</div>
			</aside>
			<main className="flex flex-1 bg-white m-10 px-20 py-[72px] rounded-[32px]">
				<Outlet />
			</main>
		</div>
	);
}
