"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useAccount } from "wagmi";
import loading from "../../../../public/images/loading.gif";
import defaultPic from "../../../../public/images/cat.jpg";
import { toast } from "react-hot-toast";
import upload from "@/utils/upload";

function page({ params }: { params: { id: string } }) {
  const { id } = params;
  const account = useAccount();

  const [data, setData] = React.useState<any | null>();
  const [imgFile, setImgFile] = React.useState<any | null>(null);
  const [uploading, setUploading] = React.useState<boolean>(false);
  const [removedImage, setRemovedImage] = React.useState<boolean>(false);
  const [uploadedImage, setUploadedImage] = React.useState<any | null>(null);
  const [loaded, setLoaded] = React.useState(false);
  const [profileDialog, setProfileDialog] = React.useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImgFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImg = () => {
    setImgFile(null);
    setUploadedImage(null);
    setRemovedImage(true);
  };

  const uploadImgToCloud = async () => {
    try {
      if (imgFile) {
        setUploading(true);
        const url = await upload(account.address, imgFile);
        console.log(url, "Uploaded IMG URL");
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_SERVER}/api/upload-profile-pic`,
          { walletAddress: id, profilePicURL: url }
        );
        setData((oldData: any) => {
          const newData = { ...oldData, profilePicURL: url };
          return newData;
        });
        toast.success("Updated profile successfully!");
      } else {
        if (removedImage) {
          setUploading(true);
          const res = await axios.post(
            `${process.env.NEXT_PUBLIC_SERVER}/api/upload-profile-pic`,
            { walletAddress: id, profilePicURL: "" }
          );
          setData((oldData: any) => {
            const newData = { ...oldData, profilePicURL: "" };
            return newData;
          });
        }
      }
      setUploading(false);
      setProfileDialog(false);
      setImgFile(null);
      setUploadedImage(null);
      setRemovedImage(false);
    } catch (error) {
      setUploading(false);

      console.log(error);
    }
  };

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_SERVER}/api/get-user`,
          { walletAddress: id }
        );
        const dataFromBackend = res.data;
        setData(dataFromBackend);
        setLoaded(true);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  if (!loaded) {
    return (
      <div className="relative z-[100] h-screen w-screen flex bg-neutral-950 items-center justify-center text-[1.2rem] font-medium">
        <Image
          src={loading}
          alt="avatar"
          className="h-[180px] w-[180px] block object-cover object-center rounded-full"
        />
      </div>
    );
  } else {
    return (
      <main className="flex flex-col min-h-screen w-screen">
        {profileDialog && (
          <>
            <div
              onClick={() => setProfileDialog(false)}
              className="h-screen w-screen fixed z-[10000] bg-black/70"
            ></div>
            {uploading && (
              <div className="absolute z-[11000] h-screen w-screen flex bg-black/10 items-center justify-center text-[1.2rem] font-medium">
                <Image
                  src={loading}
                  alt="avatar"
                  className="h-[180px] w-[180px] block object-cover object-center rounded-full"
                />
              </div>
            )}

            <div className="flex bg-white px-5 py-16 flex-col items-center gap-2 h-[70vh] w-[90vw] md:w-[30vw] fixed z-[10055] top-[15vh] left-[5vw] md:left-[35vw] shadow-md">
              <Image
                src={
                  removedImage
                    ? defaultPic
                    : uploadedImage
                      ? uploadedImage
                      : data["profilePicURL"] === undefined ||
                          data["profilePicURL"] === ""
                        ? defaultPic
                        : data["profilePicURL"]
                }
                alt="profile picture"
                width={210}
                height={210}
                className="w-[210px] h-[210px] block object-cover object-center"
              />
              <div className="flex flex-row gap-3 items-center justify-between mt-6">
                <button
                  onClick={handleRemoveImg}
                  className="text-center bg-red-100 hover:bg-red-50 py-2 cursor-pointer px-5 hover:shadow-sm transition-all duration-150"
                >
                  Remove
                </button>
                <label
                  htmlFor="file-upload"
                  className="text-center bg-orange-100 hover:bg-orange-50 py-2 cursor-pointer px-5 hover:shadow-sm transition-all duration-150"
                >
                  Upload
                </label>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
              <div className="flex flex-row gap-3 items-center justify-between">
                <button
                  disabled={uploadedImage === null && !removedImage}
                  onClick={uploadImgToCloud}
                  className="text-center w-[210px] disabled:cursor-not-allowed bg-green-100 hover:bg-green-50 py-2 cursor-pointer px-5 hover:shadow-sm transition-all duration-150"
                >
                  Save changes
                </button>
              </div>
            </div>
          </>
        )}
        <div className="h-[30vh] w-screen bg-neutral-900"></div>
        <section className="flex flex-col items-center md:flex-row md:items-start gap-6 py-10 px-5 sm:px-[5vw] md:px-[10vw]">
          <Image
            src={
              data["profilePicURL"] === "" ||
              data["profilePicURL"] === undefined
                ? defaultPic
                : data["profilePicURL"]
            }
            height={180}
            width={180}
            onClick={() => id === account.address && setProfileDialog(true)}
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {data.phoneNumber}
              </span>
            </div>
            <Link
              href={data.portfolio ? data.portfolio : "#"}
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
              {data.expertise &&
                data.expertise.map((ele: string) => <li key={ele}>{ele}</li>)}
            </ul>
          </div>
          <div className="outline-1 outline flex-[50%] outline-black p-4 flex flex-col gap-3">
            <h1 className="font-medium text-[4.3vw] sm:text-[2.2vw] md:text-[1.4vw]">
              Preferred Collaboration Types
            </h1>
            <ul>
              {data.collabTypes &&
                data.collabTypes.map((ele: string) => <li key={ele}>{ele}</li>)}
            </ul>
          </div>
        </section>
      </main>
    );
  }
}

export default page;
