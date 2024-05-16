"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useAccount } from "wagmi";
import cat from "../../../../public/images/cat.jpg";

function page({ params: { id } }: { params: { id: string } }) {
  // const account = useAccount();
  const account = {
    address: id,
  };
  if (!account.address) {
    return (
      <div className="relative z-[100] h-screen w-screen flex bg-neutral-50 items-center justify-center text-[1.2rem] font-medium">
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
      { walletAddress: account.address }
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
    <main className="flex flex-col min-h-screen w-screen mb-20">
      <div className="h-[30vh] w-screen bg-neutral-900"></div>
      <section className="flex flex-col items-center md:flex-row md:items-start gap-6 py-10 px-5 sm:px-[5vw] md:px-[10vw]">
        <Image
          src={cat}
          alt="avatar"
          className="h-[180px] w-[180px] block object-cover object-center rounded-full"
        />
        <div className="flex flex-col items-center md:items-start py-3 gap-2">
          <h1 className="font-semibold text-[6.3vw] sm:text-[4.2vw] md:text-[3.4vw] my-1">
            {data.firstName} {data.lastName}
          </h1>
          <div className="flex flex-row items-center gap-6 font-medium">
            <span className="flex flex-row gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {data.location}
            </span>{" "}
            <span className="flex flex-row gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {data.phoneNumber}
            </span>
          </div>
          <Link
            href={data.portfolio}
            target="_blank"
            className="flex flex-row gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
              <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
              <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
              <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
            </svg>{" "}
            <span className="text-purple-950 hover:text-purple-900 transition-colors duration-150">
              {data.portfolio}
            </span>
          </Link>

          <div className="flex flex-row gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
              <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
            </svg>
            <p>{id}</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row mx-5 sm:mx-[5vw] md:mx-[10vw] gap-10 sm:gap-16 md:gap-20 p-5 outline outline-black outline-1">
        <div className="outline-1 outline flex-[50%] outline-black p-4 flex flex-col gap-3">
          <h1 className="font-medium text-[4.3vw] sm:text-[2.2vw] md:text-[1.4vw]">
            Areas of Expertise
          </h1>
          <ul>
            {data.expertise.map((ele) => (
              <li key={ele}>{ele}</li>
            ))}
          </ul>
        </div>
        <div className="outline-1 outline flex-[50%] outline-black p-4 flex flex-col gap-3">
          <h1 className="font-medium text-[4.3vw] sm:text-[2.2vw] md:text-[1.4vw]">
            Preferred Collaboration Types
          </h1>
          <ul>
            {data.collabTypes.map((ele) => (
              <li key={ele}>{ele}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default page;
