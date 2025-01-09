import * as Avatar from "@radix-ui/react-avatar";
import * as Popover from "@radix-ui/react-popover";
import * as Separator from "@radix-ui/react-separator";
import { Logout01Icon } from "hugeicons-react";
import { Link } from "./link";

export function User() {
	return (
		<Popover.Root>
			<Popover.Trigger asChild>
				<button type="button">
					<Avatar.Root className="w-12 h-w-12 rounded-xl overflow-hidden bg-shape flex items-center justify-center cursor-pointer">
						<Avatar.Image
							src="https://github.com/ivanseibel.png"
							alt="John Doe"
						/>
					</Avatar.Root>
				</button>
			</Popover.Trigger>
			<Popover.Portal>
				<Popover.Content
					className="rounded-xl p-4 w-[168px] bg-white border"
					align="end"
					side="bottom"
					alignOffset={80}
					sideOffset={-30}
				>
					<div className="flex flex-col gap-4">
						<div className="flex items-center justify-between gap-3">
							<Avatar.Root className="w-8 h-8 flex overflow-hidden align-center justify-center rounded-lg">
								<Avatar.Image
									src="https://github.com/ivanseibel.png"
									alt="John Doe"
									className="object-cover"
								/>
							</Avatar.Root>
							<p className="body-xs text-gray-300 flex flex-1">
								Brandon Ekstrom
							</p>
						</div>

						<Separator.Root
							className="w-full bg-shape h-[1px]"
							orientation="horizontal"
						/>

						<div className="flex w-full">
							<button
								type="button"
								className="flex items-center justify-between w-full text-sm font-medium text-orange-base hover:text-orange-dark transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-base focus:ring-opacity-50"
							>
								Sign out
								<Logout01Icon width={20} strokeWidth={1.5} />
							</button>
						</div>
					</div>
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root>
	);
}
