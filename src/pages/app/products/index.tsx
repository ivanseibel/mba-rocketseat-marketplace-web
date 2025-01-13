import { Helmet } from "react-helmet-async";
import {
	ProductCard,
	type ProductCardProps,
} from "../../../components/product-card";
import { Filters } from "./filters";

const productData: ProductCardProps[] = [
	{
		id: "a1b2c3d4",
		imageUrl:
			"https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Vintage Leather Jacket",
		description:
			"Classic brown leather jacket, perfect for a retro look. Made with genuine leather and in excellent condition.",
		price: 125.99,
		status: "published",
		category: "Clothing",
	},
	{
		id: "e5f6g7h8",
		imageUrl:
			"https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Handmade Ceramic Vase",
		description:
			"Beautifully crafted ceramic vase with a unique glaze. Adds a touch of elegance to any room.",
		price: 45.0,
		status: "published",
		category: "Home Decor",
	},
	{
		id: "i9j0k1l2",
		imageUrl:
			"https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=3762&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=3762&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Antique Wooden Chest",
		description:
			"A stunning antique wooden chest, ideal for storage or as a statement piece. Features intricate carvings.",
		price: 350.5,
		status: "sold",
		category: "Furniture",
	},
	{
		id: "m3n4o5p6",
		imageUrl:
			"https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Modern Abstract Painting",
		description:
			"Vibrant abstract painting on canvas. Perfect for adding a splash of color to your living space.",
		price: 180.0,
		status: "inactive",
		category: "Art",
	},
	{
		id: "q7r8s9t0",
		imageUrl:
			"https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Retro Turntable",
		description:
			"Fully functional retro turntable. Play your favorite vinyl records with this stylish and nostalgic piece.",
		price: 200.0,
		status: "published",
		category: "Electronics",
	},
	{
		id: "u1v2w3x4",
		imageUrl:
			"https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Designer Sunglasses",
		description:
			"Stylish sunglasses from a top designer brand. Offers UV protection and comes with a protective case.",
		price: 99.99,
		status: "published",
		category: "Accessories",
	},
];

export function Products() {
	return (
		<>
			<Helmet>
				<title>Products</title>
			</Helmet>
			<div className="flex flex-col gap-10 px-32 p-4">
				<section className="flex flex-col gap-2">
					<h1 className="title-md">Your products</h1>
					<p className="body-sm">Explore and manage your products here</p>
				</section>
				<section className="gap-4 grid grid-cols-3">
					<aside className="items-start col-span-1 self-start">
						<Filters />
					</aside>
					<div className="items-start col-span-2">
						<div className="gap-4 grid grid-cols-2">
							{productData.map((product) => (
								<ProductCard
									id={product.id}
									key={product.id}
									imageUrl={product.imageUrl}
									title={product.title}
									description={product.description}
									price={product.price}
									status={product.status}
									category={product.category}
								/>
							))}
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
