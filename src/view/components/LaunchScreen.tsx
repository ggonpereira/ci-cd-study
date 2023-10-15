import { Transition } from "@headlessui/react";
import { Logo } from "./Logo";
import { Spinner } from "./Spinner";

interface LaunchScreenProps {
  isLoading: boolean;
}

export const LaunchScreen = ({ isLoading }: LaunchScreenProps) => {
  return (
    <Transition
      show={isLoading}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed left-0 top-0 grid h-full w-full place-items-center bg-blue-900">
        <div className="w-100 flex flex-col items-center gap-6">
          <Logo className="animate-breathing h-10 text-white" />
          <Spinner className="fill-white text-blue-900" />
        </div>
      </div>
    </Transition>
  );
};
