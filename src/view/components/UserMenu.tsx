import { ExitIcon } from "@radix-ui/react-icons";
import { useAuthContext } from "../../app/hooks/useAuth";
import { DropdownMenu } from "./DropdownMenu";

export const UserMenu = () => {
  const { signOut } = useAuthContext();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className="flex select-none rounded-full border border-blue-100 bg-blue-50 p-3.5">
          <span className="text-sm font-medium tracking-[-0.5px] text-blue-900">
            GA
          </span>
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="w-36">
        <DropdownMenu.Item
          className="flex items-center justify-between gap-2"
          onSelect={signOut}
        >
          Log out
          <ExitIcon className="h-4 w-4" />
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
