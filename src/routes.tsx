import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./_layouts/app";
import { AuthLayout } from "./_layouts/auth";
import { Dashboard } from "./pages/app/dashboard";
import { Products } from "./pages/app/dashboard/products";
import { SignIn } from "./pages/auth/sign-in";
import { ErrorPage } from "./pages/error";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Dashboard />,
			},
			{
				path: "/products",
				element: <Products />,
			},
		],
	},
	{
		path: "/",
		element: <AuthLayout />,
		children: [
			{
				path: "/sign-in",
				element: <SignIn />,
			},
		],
	},
	{
		path: "*",
		element: <div>Not found</div>,
	},
]);
