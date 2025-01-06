import "./index.css";

export function App() {
	return (
		<div className="flex flex-col justify-center items-center">
			<h1 className="text-orange-dark title-lg">Hello World</h1>
			<button
				type="button"
				className="text-white subtitle bg-success p-4 rounded-md"
			>
				Let's rock!
			</button>
		</div>
	);
}
