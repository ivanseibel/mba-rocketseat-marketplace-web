import * as Avatar from "@radix-ui/react-avatar";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Separator from "@radix-ui/react-separator";
import { Logout01Icon } from "hugeicons-react";

export function User() {
	return (
		<div className="flex">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild className="inline-flex items-center">
					<button type="button">
						<Avatar.Root className="w-12 h-w-12 rounded-xl overflow-hidden bg-shape flex items-center justify-center cursor-pointer">
							<Avatar.Image
								src="https://github.com/ivanseibel.png"
								alt="John Doe"
							/>
						</Avatar.Root>
					</button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Portal>
					<DropdownMenu.Content
						className="rounded-xl p-4 w-[168px] bg-white border"
						align="end"
						side="bottom"
						sideOffset={15}
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
								<p className="body-xs text-gray-300 text-pretty flex-1">
									Ivan Luis Seibel
								</p>
							</div>

							<Separator.Root
								className="w-full bg-shape h-[1px]"
								orientation="horizontal"
							/>

							<div className="inline-flex">
								<DropdownMenu.Item asChild>
									<button
										type="button"
										className="flex w-full items-center justify-between text-sm font-medium text-orange-base hover:text-orange-dark transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-base focus:ring-opacity-50"
									>
										Sign out
										<Logout01Icon width={20} strokeWidth={1.5} />
									</button>
								</DropdownMenu.Item>
							</div>
						</div>
					</DropdownMenu.Content>
				</DropdownMenu.Portal>
			</DropdownMenu.Root>
		</div>
	);
}
