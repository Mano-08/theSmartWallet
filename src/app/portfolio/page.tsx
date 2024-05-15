"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
const features = [
  {
    name: "Be Limited to Single Device",
    description:
      "Each user account is generally expected to link single device to wallet . While you can create multiple accounts with different passkeys",
  },
  {
    name: "Secure Wallet Creation",
    description:
      "Create smart wallets using multiple authentication methods, including passkeys, Bluetooth, face ID, and external USB devices.",
  },
  {
    name: "Profile Launch",
    description:
      "After signup, launch your profile and initialize your smart wallet, enabling seamless access to platform features and functionalities.",
  },
];

export default function Feature() {
  // const account = useAccount();
  const [responses, setResponses] = useState({});
  const account = {
    address: "qwerty",
  };

  useEffect(() => {
    async function fetchResponses() {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/get-user",
          {
            walletAddress: account?.address,
          }
        );

        console.log("response from backend", response);
        return response;
      } catch (error) {
        return false;
      }
    }

    fetchResponses();
  }, []);

  const { connectors, connect, status, error } = useConnect();
  const connector = connectors[0];
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#01A4F1]">
            {account
              ? ` Your Wallet Address: ${account?.address}`
              : "Welcome to Smart Wallet"}
          </h2>
          {account ? (
            <div>
              <a
                href={`https://debank.com/profile/${account.address}`}
                className=" underline block mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl"
              >
                Your Portfolio
              </a>
              <p className=" text-gray-300 mt-2 font-semibold text-2xl">
                Explore your portfolio for insights on your assets.
              </p>
            </div>
          ) : (
            <div>
              <button
                type="button"
                onClick={() => connect({ connector })}
                className="text-blue-500 underline cursor-pointer dark:text-blue-300 font-bold"
              >
                Sign In
              </button>
            </div>
          )}
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
