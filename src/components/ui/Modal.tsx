import {
  Fragment,
  Dispatch,
  SetStateAction,
  ForwardRefExoticComponent,
  SVGProps,
} from "react";
import { Dialog, Transition } from "@headlessui/react";

interface ModalProps {
  title: string;
  content: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  IdentificationIcon: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;
  bg: string;
  color: string;
  firstOnClick: () => void;
  secondOnClick: () => void;
}

const Modal = ({
  title,
  content,
  open,
  setOpen,
  IdentificationIcon,
  bg,
  color,
  firstOnClick,
  secondOnClick,
}: ModalProps) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500/75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative overflow-hidden rounded-lg bg-black text-center shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="flex flex-col items-center justify-center">
                    <div
                      className={`mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${bg} sm:mx-0 sm:h-10 sm:w-10`}
                    >
                      <IdentificationIcon
                        className={`h-6 w-6 ${color}`}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-6 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-center text-xl font-semibold leading-6 text-white"
                      >
                        {title}
                      </Dialog.Title>
                      <div className="mt-3 text-center text-sm text-white">
                        {content.split("\n").map((txt) => (
                          <p key={txt}>
                            {txt}
                            <br />
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-3 px-4 py-3 flex justify-center sm:px-6">
                  <button className="button">
                    <a href="/login">
                      Sign in
                      <span>
                        <img
                          src="https://digitalpresent.io/wp-content/themes/digital-present/src/assets/arrow-right-white.svg"
                          alt=""
                        />
                        <img
                          src="https://digitalpresent.io/wp-content/themes/digital-present/src/assets/arrow-right-white.svg"
                          alt=""
                        />
                      </span>
                    </a>
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
