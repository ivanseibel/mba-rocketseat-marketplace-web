import { Button } from "../../components/button";
import { Input } from "../../components/input";

export function SignIn() {
	return (
		<div className="flex flex-col gap-32 w-full">
			<form className="flex flex-col gap-12 w-full max-w-">
				<div className="flex flex-col gap-2">
					<h1 className="text-gray-500 title-md">Sign in</h1>
					<p className="text-gray-300 text-sm">
						Welcome back! Please sign in to your account.
					</p>
				</div>
				<div className="flex flex-col gap-5 w-full">
					<Input
						id="email"
						type="email"
						error=""
						icon="Mail01Icon"
						label="E-Mail"
						placeholder="Type your e-mail"
					/>
					<Input
						id="password"
						type="password"
						error=""
						icon="LockIcon"
						label="Password"
						placeholder="Type your password"
					/>
				</div>
				<Button
					label="Sign in"
					onClick={() => {}}
					size="md"
					variant="solid"
					icon="ArrowRight02Icon"
					iconPosition="right"
				/>
			</form>
			<div className="flex flex-col gap-2">
				<p>Don't have an account? </p>
				<Button
					label="Sign up"
					onClick={() => {}}
					size="md"
					variant="outline"
				/>
			</div>
		</div>
	);
}
