import * as Separator from "@radix-ui/react-separator";
import { useNavigate } from "react-router-dom";
import { AvatarUpload } from "../../components/avatar-upload";
import { Button } from "../../components/button";
import { Input } from "../../components/input";

export function SignUp() {
	const navigate = useNavigate();

	function handleSignIn() {
		navigate("/sign-in");
	}

	return (
		<div className="flex flex-col justify-start gap-32 w-full">
			<form className="flex flex-col gap-12 w-full">
				<div className="flex flex-col gap-2">
					<h1 className="text-gray-500 title-md">Sign up</h1>
					<p className="text-gray-300 text-sm">
						Welcome! Please sign up to create your account.
					</p>
				</div>
				<div className="flex flex-col gap-5 w-full">
					<div className="flex flex-col gap-2">
						<h3>Profile</h3>
						<AvatarUpload />
						<Separator.Root
							className="bg-transparent w-full h-2"
							orientation="horizontal"
						/>
						<Input
							id="name"
							type="text"
							error=""
							icon="UserIcon"
							label="Name"
							placeholder="Type your name"
						/>
						<Input
							id="phone"
							type="tel"
							error=""
							icon="CallIcon"
							label="Phone"
							placeholder="Type your phone"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<h3>Access</h3>
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
				<p>Already have an account? </p>
				<Button
					label="Sign up"
					onClick={handleSignIn}
					size="md"
					variant="outline"
				/>
			</div>
		</div>
	);
}
