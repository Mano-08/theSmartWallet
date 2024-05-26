"use client";

import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useAccount, useDisconnect } from "wagmi";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const account = useAccount();
  const { disconnect } = useDisconnect();

  const handleClickPortfolio = () => {
    if (account?.address) {
      router.push(`/portfolio/${account.address}`);
    } else {
      toast.error("Please sign in to view portfolio");
      router.push("/signup");
    }
  };

  const signout = async () => {
    await disconnect();
    window.location.href="/"
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex flex-row items-center justify-end p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors duration-150 text-neutral-400 hover:text-neutral-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-end lg:gap-x-12">
          <Link
            href="/"
            className="text-sm font-semibold leading-6 transition-colors duration-150 text-neutral-400 hover:text-neutral-300"
          >
            Home
          </Link>
          {account?.address ? (
            <button
              onClick={signout}
              className="text-sm font-semibold leading-6 transition-colors duration-150 text-neutral-400 hover:text-neutral-300"
            >
              Sign Out
            </button>
          ) : (
            <Link
              href="/signup"
              className="text-sm font-semibold leading-6 transition-colors duration-150 text-neutral-400 hover:text-neutral-300"
            >
              Sign Up
            </Link>
          )}

          <button
            onClick={handleClickPortfolio}
            className="text-sm font-semibold leading-6 transition-colors duration-150 text-neutral-400 hover:text-neutral-300"
          >
            Portfolio
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 transition-colors duration-150 text-neutral-400 hover:text-neutral-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                {account?.address ? (
                  <button
                    onClick={signout}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Sign Out
                  </button>
                ) : (
                  <Link
                    href="/signup"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Sign Up
                  </Link>
                )}
                <button
                  onClick={handleClickPortfolio}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Portfolio
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Nav;
