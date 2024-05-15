"use client";

import axios from "axios";
import Link from "next/link";
import React from "react";
import { useAccount } from "wagmi";

function page({ params }: { params: { id: string } }) {
  const account = useAccount();
  if (!account.address) {
    return (
      <div className="h-screen w-screen flex bg-neutral-50 items-center justify-center text-[1.2rem] font-medium">
        <Link
          href="/signup"
          className="px-5 py-2 rounded-md bg-neutral-100 shadow-sm"
        >
          Sign in to view this page
        </Link>
      </div>
    );
  }
  async function getData() {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER}/api/get-user`,
      { walletAddress: params.id }
    );

    // GET DATA FROM BACKEND
    // const data = res;
    // return data;
  }
  // const data = getData();

  // DUMMY DATA
  const data = {
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "08012345678",
    location: "Lagos",
    portfolio: "https://www.johndoe.com",
    expertise: [
      "Frontend Developer",
      "Backend Developer",
      "UI/UX Designer",
      "Product Manager",
    ],
    expLevel: "Senior",
    collabTypes: ["Full-time", "Part-time", "Contract", "Remote"],
  };
  return (
    <main className="flex flex-col">
      <div className="bg-violet-900 h-[40vh] w-screen relative"> </div>
      <div className="flex flex-col items-center gap-5">
        <h1 className="sm:text-[4.5vw] md:text-[3.7vw] font-semibold">
          {data.firstName} {data.lastName}
        </h1>
        <div className="flex flex-row items-end gap-9 text-[1.3rem]">
          <p>{data.phoneNumber}</p>
          <p>{data.location}</p>
          <Link
            className="text-violet-800 underline text-[1.2rem]"
            href={data.portfolio}
          >
            {data.portfolio}
          </Link>
        </div>

        <div className="text-center font-medium text-[1.2rem] my-6">
          <p className="pb-2">Areas of Expertise</p>
          <div className="flex flex-wrap gap-4">
            {data.expertise.map((ele) => (
              <div
                key={ele}
                className="px-4 py-2 rounded-full outline-2 outline-violet-950 bg-violet-200 font-medium"
              >
                {ele}
              </div>
            ))}
          </div>
        </div>

        <div>
          <span className="font-medium text-[1.2rem]">Experience Level:</span>{" "}
          {data.expLevel}
        </div>

        <div className="text-center font-medium text-[1.2rem] my-6">
          <p className="pb-2">Preferred Collaboration</p>
          <div className="flex flex-wrap gap-4">
            {data.collabTypes.map((ele) => (
              <div
                key={ele}
                className="px-4 py-2 rounded-full outline-2 outline-violet-950 bg-violet-200 font-medium"
              >
                {ele}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
