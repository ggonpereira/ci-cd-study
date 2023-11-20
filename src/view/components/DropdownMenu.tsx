import * as RdxDropdownMenu from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";
import { cn } from "../../app/utils/cn";

type Children = {
  children: ReactNode;
};

interface DropdownMenuProps extends Children {
  className?: string;
}

interface DropdownMenuItemProps extends DropdownMenuProps {
  onSelect?: () => void;
}

const DropdownMenuRoot = ({ children }: Children) => {
  return <RdxDropdownMenu.Root>{children}</RdxDropdownMenu.Root>;
};

const DropdownMenuTrigger = ({ children, className }: DropdownMenuProps) => {
  return (
    <RdxDropdownMenu.Trigger className={cn("outline-none", className)}>
      {children}
    </RdxDropdownMenu.Trigger>
  );
};

const DropdownMenuContent = ({ children, className }: DropdownMenuProps) => {
  return (
    <RdxDropdownMenu.Portal>
      <div className="absolute z-10">
        <RdxDropdownMenu.Content
          className={cn(
            "mt-3 rounded-2xl bg-white p-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]",
            className,
          )}
        >
          {children}
        </RdxDropdownMenu.Content>
      </div>
    </RdxDropdownMenu.Portal>
  );
};

const DropdownMenuItem = ({
  children,
  className,
  onSelect,
}: DropdownMenuItemProps) => {
  return (
    <RdxDropdownMenu.Item
      className={cn(
        "min-h-[32px] select-none p-4 text-sm text-gray-800 outline-none transition-colors hover:cursor-pointer data-[highlighted]:bg-gray-50",
        className,
      )}
      onSelect={onSelect}
    >
      {children}
    </RdxDropdownMenu.Item>
  );
};

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
};
