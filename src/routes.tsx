import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./_layouts/app";
import { Dashboard } from "./pages/app/dashboard";
// import { AppLayout } from "./_layouts/app";
// import { AuthLayout } from "./_layouts/auth";
// import { Orders } from "./pages/app/orders/orders";
// import { SignIn } from "./pages/auth/sign-in";
// import { SignUp } from "./pages/auth/sign-up";
// import { Error } from "./pages/error";
// import { NotFound } from "./pages/not-found";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		// errorElement: <Error />,
		errorElement: <div>Error</div>,
		children: [
			{
				path: "/",
				element: <Dashboard />,
			},
		],
	},
	{
		path: "*",
		element: <div>Not found</div>,
	},
]);
