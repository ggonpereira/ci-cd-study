import { iconsMap } from "./iconsMap";

export type IconType = "income" | "expense";

interface CategoryIconProps {
  type: IconType;
  category?: string;
}

export function CategoryIcon({ type, category }: CategoryIconProps) {
  const Icon =
    iconsMap[type][
      (category as keyof (typeof iconsMap.expense | typeof iconsMap.income)) ??
        "default"
    ] ?? iconsMap[type].default;

  return <Icon />;
}
