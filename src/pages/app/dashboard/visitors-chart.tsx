import {
	Calendar04Icon,
	Loading01Icon,
	UserMultipleIcon,
} from "hugeicons-react";
import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import colors from "tailwindcss/colors";

// Fake data - delete this when you fetch real data
const chartData = [
	{ date: "01", visits: 100 },
	{ date: "02", visits: 120 },
	{ date: "03", visits: 99 },
	{ date: "04", visits: 150 },
	{ date: "05", visits: 130 },
	{ date: "06", visits: 90 },
	{ date: "07", visits: 80 },
	{ date: "08", visits: 100 },
	{ date: "09", visits: 120 },
	{ date: "10", visits: 99 },
	{ date: "11", visits: 150 },
	{ date: "12", visits: 130 },
	{ date: "13", visits: 90 },
	{ date: "14", visits: 80 },
	{ date: "15", visits: 100 },
	{ date: "16", visits: 120 },
	{ date: "17", visits: 99 },
	{ date: "18", visits: 150 },
	{ date: "19", visits: 130 },
	{ date: "20", visits: 90 },
	{ date: "21", visits: 80 },
	{ date: "22", visits: 100 },
	{ date: "23", visits: 120 },
	{ date: "24", visits: 99 },
	{ date: "25", visits: 150 },
	{ date: "26", visits: 130 },
	{ date: "27", visits: 90 },
	{ date: "28", visits: 80 },
	{ date: "29", visits: 100 },
	{ date: "30", visits: 120 },
];

export function VisitorsChart() {
	return (
		<div className="flex flex-col gap-4 w-full p-6">
			<div className="flex flex-row items-center justify-between">
				<div className="space-y-1">
					<h2 className="font-medium title-sm">Visitors</h2>
				</div>

				<div className="flex items-center gap-2">
					<Calendar04Icon size={16} />
					<span className="label-sm text-gray-300">26th June - 25th July</span>
				</div>
			</div>
			<div className="border">
				{chartData ? (
					<ResponsiveContainer width="100%" height={266}>
						<LineChart data={chartData} style={{ fontSize: 12 }}>
							<XAxis dataKey="date" axisLine={true} tickLine={false} dy={16} />
							<YAxis stroke="#888" axisLine={false} tickLine={false} />
							<CartesianGrid
								vertical={false}
								strokeDasharray="5 5"
								stroke="#ccc"
							/>
							<Tooltip content={CustomTooltip} />
							<Line
								type="monotone"
								dataKey="visits"
								stroke={colors.violet[500]}
								dot={false}
							/>
						</LineChart>
					</ResponsiveContainer>
				) : (
					<div className="flex h-[240px] w-full items-center justify-center">
						<Loading01Icon
							size={40}
							className="h-8 w-8 animate-spin text-muted-foreground"
						/>
					</div>
				)}
			</div>
		</div>
	);
}

import type { TooltipProps } from "recharts";

function CustomTooltip({
	payload,
	label,
	active,
}: TooltipProps<number, string>) {
	if (active) {
		return (
			<div className="flex flex-col gap-2 p-3 bg-white rounded-lg shadow-md">
				<p className="label-sm">{label}th July</p>
				<div className="flex items-center gap-2">
					<UserMultipleIcon size={16} />
					<span className="body-xs">{payload?.[0]?.value} visitors</span>
				</div>
			</div>
		);
	}

	return null;
}
