import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { Button } from "../../../components/button";
import { Input } from "../../../components/input";
import { ProductImageUpload } from "../../../components/product-image-upload";
import { Select } from "../../../components/select";

export function ProductForm() {
	const params = useParams<{ id: string }>();
	const operation = params.id ? "Edit" : "Create";
	return (
		<>
			<Helmet>
				<title>{operation} product</title>
			</Helmet>
			<div className="flex flex-col gap-10 px-32 p-4">
				<section className="flex flex-col gap-2">
					<h1 className="title-md">{operation} product</h1>
					<p className="body-sm">
						{operation} a product here by filling out the form below. Please
						provide all the necessary details to ensure the product is
						accurately represented.
					</p>
				</section>
				<section className="flex gap-4">
					<aside className="flex items-start self-start">
						<ProductImageUpload />
					</aside>
					<form className="flex flex-col flex-1 items-start p-6 gap-6 rounded-[20px] bg-white">
						<h3 className="title-sm text-gray-300 w-full">Product details</h3>
						<div className="flex gap-6 w-full">
							<Input
								id="title"
								type="text"
								label="Title"
								placeholder="Enter the product title"
							/>
							<Input
								id="price"
								type="number"
								label="Price"
								placeholder="0.00"
							/>
						</div>
						<Input
							id="description"
							type="text"
							label="Description"
							placeholder="Enter the product description"
						/>
						<Select
							id="category"
							label="Category"
							placeholder="Select a category"
							options={[
								{ label: "Electronics", value: "electronics" },
								{ label: "Accessories", value: "accessories" },
								{ label: "Clothing", value: "clothing" },
							]}
						/>
						<div className="flex gap-4 w-full">
							<Button
								label="Cancel"
								variant="outline"
								size="md"
								onClick={() => {}}
							/>
							<Button
								label="Save product"
								variant="solid"
								size="md"
								onClick={() => {}}
							/>
						</div>
					</form>
				</section>
			</div>
		</>
	);
}
