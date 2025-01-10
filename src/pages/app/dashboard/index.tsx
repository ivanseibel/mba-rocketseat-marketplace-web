import { SaleTag02Icon, Store04Icon, UserMultipleIcon } from "hugeicons-react";
import { Helmet } from "react-helmet-async";

export function Dashboard() {
	return (
		<>
			<Helmet>
				<title>Dashboard</title>
			</Helmet>
			<div>
				<section className="flex flex-col gap-2 mt-16">
					<h1 className="title-md">Last 30 days</h1>
					<p className="body-sm">Check the last 30 days of your sales</p>
				</section>
				<section className="flex gap-4 mt-10">
					<div className="grid grid-rows-3 gap-4 w-60">
						<div className="flex items-center justify-between gap-2 pr-7 pl-3 py-3 bg-white rounded-[20px]">
							<div className="flex items-center justify-center h-[86px] w-20 text-blue-dark bg-blue-light rounded-xl">
								<SaleTag02Icon size={40} />
							</div>
							<div className="flex flex-1 flex-col gap-2">
								<h2 className="title-lg">24</h2>
								<p className="body-xs text-pretty">Sold products</p>
							</div>
						</div>
						<div className="flex items-center justify-between gap-2 pr-7 pl-3 py-3 bg-white rounded-[20px]">
							<div className="flex items-center justify-center h-[86px] w-20 text-blue-dark bg-blue-light rounded-xl">
								<Store04Icon size={40} />
							</div>
							<div className="flex flex-1 flex-col gap-2">
								<h2 className="title-lg">56</h2>
								<p className="body-xs text-pretty">Products advertised</p>
							</div>
						</div>
						<div className="flex items-center justify-between gap-2 pr-7 pl-3 py-3 bg-white rounded-[20px]">
							<div className="flex items-center justify-center h-[86px] w-20 text-blue-dark bg-blue-light rounded-xl">
								<UserMultipleIcon size={40} />
							</div>
							<div className="flex flex-1 flex-col gap-2">
								<h2 className="title-lg">1.238</h2>
								<p className="body-xs text-pretty">Visitors</p>
							</div>
						</div>
					</div>
					<div className="flex border bg-white rounded-[20px] flex-1">
						Chart
					</div>
				</section>
			</div>
		</>
	);
}
