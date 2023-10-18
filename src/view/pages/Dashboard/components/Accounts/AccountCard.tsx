import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { BankAccountTypeIcon } from "../../../../components/icons/BankAccountTypeIcon";
import { iconsMap } from "../../../../components/icons/BankAccountTypeIcon/iconsMap";

interface AccountCardProps {
  name: string;
  balance: number;
  color: string;
  icon: keyof typeof iconsMap;
}

export const AccountCard = ({
  name,
  balance,
  color,
  icon,
}: AccountCardProps) => {
  return (
    <div
      className="flex h-[200px] flex-col justify-between rounded-2xl border-b-4 border-teal-950 bg-white p-4"
      style={{ borderColor: color }}
    >
      <div>
        <BankAccountTypeIcon type={icon} />

        <span className="mt-4 inline-block text-base font-medium tracking-[-0.5px] text-gray-800">
          {name}
        </span>
      </div>

      <div>
        <span className="block text-base font-medium tracking-[-0.5px] text-gray-800">
          {formatCurrency(balance)}
        </span>
        <small className="text-sm text-gray-600">Current balance</small>
      </div>
    </div>
  );
};
