"use client";

import { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Field,
  Label,
  Switch,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/20/solid";

interface ModalProps {
  buttonText: string;
  buttonClass: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Modal({ buttonText, buttonClass }: ModalProps) {
  const [open, setOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handleContinue = () => {
    if (enabled) {
      window.location.href = "https://calendly.com/bettercyber";
    } else {
      setShowWarning(true);
    }
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className={buttonClass}>
        {buttonText}
      </button>
      <Transition show={open}>
        <Dialog className="relative z-10" onClose={setOpen}>
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </TransitionChild>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:p-6">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                      <ArrowTopRightOnSquareIcon
                        className="h-6 w-6 text-emerald-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 sm:mt-5">
                      <DialogTitle
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        You will be redirected to Calendly.com
                      </DialogTitle>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          You are about to enter the calendly.com website hosted
                          and owned by Calendly. BetterCyber uses Calendly to
                          schedule free consultations. By clicking the{" "}
                          <span className="font-bold text-black">Continue</span>{" "}
                          button, you are acknowledging that you are leaving
                          BetterCyber website and proceeding to the Calendly
                          website.
                        </p>
                      </div>
                      <div className="mt-4">
                        <Field as="div" className="flex items-center">
                          <Switch
                            checked={enabled}
                            onChange={setEnabled}
                            className={classNames(
                              enabled ? "bg-emerald-600" : "bg-gray-200",
                              "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
                            )}
                          >
                            <span
                              aria-hidden="true"
                              className={classNames(
                                enabled ? "translate-x-5" : "translate-x-0",
                                "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                              )}
                            />
                          </Switch>
                          <Label
                            as="span"
                            className="ml-3 text-sm text-gray-500"
                          >
                            By selecting this, you agree to the{" "}
                            <a
                              href="/privacy-policy"
                              className="font-medium text-blue-500 underline"
                            >
                              Privacy Policy
                            </a>{" "}
                            and{" "}
                            <a
                              href="/cookie-policy"
                              className="font-medium text-blue-500 underline"
                            >
                              Cookie Policy
                            </a>
                            .
                          </Label>
                        </Field>
                      </div>

                      {showWarning && (
                        <div className="mt-4 rounded-md bg-red-50 p-4">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <XCircleIcon
                                className="h-5 w-5 text-red-400"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="ml-3">
                              <div className="text-sm text-red-700">
                                Did you read our Privacy and Cookie policies?
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 sm:col-start-2"
                      onClick={handleContinue}
                    >
                      Continue
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                      onClick={() => setOpen(false)}
                      data-autofocus
                    >
                      Cancel
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
