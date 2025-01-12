import { Button } from "../../../components/button";
import { Input } from "../../../components/input";
import { Select } from "../../../components/select";

export function Filters() {
	return (
		<aside className="bg-white rounded-[20px] p-6 flex flex-col gap-6">
			<h3 className="title-sm text-gray-300">Filters</h3>

			<form className="flex flex-col gap-4">
				<Input
					id="search"
					type="text"
					error=""
					icon="Search01Icon"
					placeholder="Search for products"
				/>
				<Select
					options={[
						{ label: "All status", value: "all" },
						{ label: "Published", value: "published" },
						{ label: "Sold", value: "sold" },
						{ label: "Inactive", value: "inactive" },
					]}
					error=""
					id="status"
					icon="SaleTag02Icon"
					iconPosition="left"
					placeholder="Select a status"
				/>

				<Button
					label="Apply filters"
					onClick={() => {}}
					size="md"
					variant="solid"
				/>
			</form>
		</aside>
	);
}
