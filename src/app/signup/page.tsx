"use client";
import React, { useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { toast } from "react-hot-toast";
import * as Form from "@radix-ui/react-form";
import axios from "axios";
import { useRouter } from 'next/navigation'
function Connect() {
  const account = useAccount();
  const router = useRouter()
  
  const areasOfExpertise = [
    "Videography",
    "Photography",
    "Editing/Post-production",
    "Storyboarding/Scriptwriting",
    "Animation/Graphics",
    "Other (please specify)",
  ];
  const preferredCollab = [
    "Event Photography",
    "Event Videography",
    "Educational Workshops",
    "Virtual Gallery Curation",
    "Video Editing",
  ];

  const expLevels = ["Beginner", "Intermediate", "Advanced", "Highly Advanced"];
  const [experienceLevel, setExperienceLevel] = useState("Intermediate");
  const { connectors, connect, status, error } = useConnect();
  const [myCollab, setMyCollab] = useState<string[]>([]);
  const [myExpertise, setMyExpertise] = useState<string[]>([]);
  const connector = connectors[0];

  const submitForm = async (data: any) => {
    console.log(data);
    await connect({ connector });

    data["walletAddress"] = account?.address;
    console.log(account.address)
     await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/api/create-user`, data);
     router.push('/portfolio')
  };

  return (
    <section className="min-h-screen bg-sky-100 text-blackA10 flex flex-col text-left items-center gap-10 py-20">
      <h1 className="text-[35px] font-bold leading-[35px] text-black">
        Join Our Global Network of Creators
        <span className="text-orange-500 px-2">.</span>
      </h1>
      <Form.Root
        className="w-[360px] sm:w-[430px] md:w-[460px] flex flex-col gap-5"
        onSubmit={(event) => {
          event.preventDefault();

          const walletID = "wallet";

          const data: any = Object.fromEntries(
            new FormData(event.currentTarget)
          );
          data["expLevel"] = experienceLevel;
          data["collabTypes"] = myCollab;
          data["expertise"] = myExpertise;
          data["walletAddress"] = walletID;

          console.log(data);
          submitForm(data)
            .then((d) => {
              console.log(d);
              toast.success("Account created successfully");
            })
            .catch((errors: any) => console.log(errors));
        }}
      >
        <Form.Field className="grid mb-[10px]" name="email">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
              Email
            </Form.Label>
            <Form.Message
              className="text-[13px] text-black opacity-[0.8]"
              match="valueMissing"
            >
              Please enter your email
            </Form.Message>
            <Form.Message
              className="text-[13px] text-black opacity-[0.8]"
              match="typeMismatch"
            >
              Please provide a valid email
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
              type="email"
              required
            />
          </Form.Control>
        </Form.Field>

        <Form.Field className="grid mb-[10px]" name="firstName">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
              First Name
            </Form.Label>
            <Form.Message
              className="text-[13px] text-black opacity-[0.8]"
              match="valueMissing"
            >
              Please enter your first name
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
              type="text"
              required
            />
          </Form.Control>
        </Form.Field>

        <Form.Field className="grid mb-[10px]" name="lastName">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
              Last Name
            </Form.Label>
            <Form.Message
              className="text-[13px] text-black opacity-[0.8]"
              match="valueMissing"
            >
              Please enter your last name
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
              type="text"
              required
            />
          </Form.Control>
        </Form.Field>

        <Form.Field className="grid mb-[10px]" name="phoneNumber">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
              Phone Number
            </Form.Label>
            <Form.Message
              className="text-[13px] text-black opacity-[0.8]"
              match="valueMissing"
            >
              Please enter your phone number
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
              type="text"
              required
            />
          </Form.Control>
        </Form.Field>

        <Form.Field className="grid mb-[10px]" name="location">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
              Location
            </Form.Label>
            <Form.Message
              className="text-[13px] text-black opacity-[0.8]"
              match="valueMissing"
            >
              Please enter your location
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
              type="text"
              required
            />
          </Form.Control>
        </Form.Field>

        <Form.Field className="grid mb-[10px]" name="portfolio">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
              Portfolio/Website
            </Form.Label>
            <Form.Message
              className="text-[13px] text-black opacity-[0.8]"
              match="valueMissing"
            >
              Please enter your portfolio/website
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
              type="text"
              required
            />
          </Form.Control>
        </Form.Field>

        <Form.Field className="grid mb-[10px]" name="portfolio">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
              Areas of Expertise {"(Check all that apply):"}
            </Form.Label>
            <Form.Message
              className="text-[13px] text-black opacity-[0.8]"
              match="valueMissing"
            >
              Please enter your areas of expertise
            </Form.Message>
          </div>
          {areasOfExpertise.map((area, index) => (
            <div key={index} className="flex items-center">
              <Checkbox.Root
                checked={myExpertise.includes(area)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setMyExpertise((old) => [...old, area]);
                  } else {
                    setMyExpertise((old) =>
                      old.filter((item) => item !== area)
                    );
                  }
                }}
                className="shadow-blackA4 hover:bg-violet3 flex h-[25px] w-[25px] my-2 appearance-none items-center justify-center rounded-[4px] bg-white shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px_black]"
                id={`c${index + 1}`}
              >
                <Checkbox.Indicator className="text-violet11">
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label
                className="pl-[15px] text-[15px] leading-none text-black"
                htmlFor={`c${index + 1}`}
              >
                {area}
              </label>
            </div>
          ))}
        </Form.Field>

        <Form.Field className="grid mb-[10px]" name="portfolio">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
              Experience Level
            </Form.Label>
            <Form.Message
              className="text-[13px] text-black opacity-[0.8]"
              match="valueMissing"
            ></Form.Message>
          </div>
          <RadioGroup.Root
            className="flex flex-col gap-2.5"
            defaultValue="default"
            aria-label="View density"
            value={experienceLevel}
            onValueChange={(newValue) => setExperienceLevel(newValue)}
          >
            {expLevels.map((exp) => (
              <div key={exp} className="flex items-center">
                <RadioGroup.Item
                  className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
                  value={exp}
                  id={exp}
                >
                  <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11" />
                </RadioGroup.Item>
                <label
                  className="text-black text-[15px] leading-none pl-[15px]"
                  htmlFor={exp}
                >
                  {exp}
                </label>
              </div>
            ))}
          </RadioGroup.Root>
        </Form.Field>

        <Form.Field className="grid mb-[10px]" name="portfolio">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
              Preferred Collaboration Types {"(Check all that apply):"}
            </Form.Label>
            <Form.Message
              className="text-[13px] text-black opacity-[0.8]"
              match="valueMissing"
            >
              Please enter your areas of expertise
            </Form.Message>
          </div>
          {preferredCollab.map((collab, index) => (
            <div key={index} className="flex items-center">
              <Checkbox.Root
                checked={myCollab.includes(collab)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setMyCollab((old) => [...old, collab]);
                  } else {
                    setMyCollab((old) => old.filter((item) => item !== collab));
                  }
                }}
                className="shadow-blackA4 hover:bg-violet3  my-2 flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] bg-white shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px_black]"
                id={`collab${index + 1}`}
              >
                <Checkbox.Indicator className="text-violet11">
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label
                className="pl-[15px] text-[15px] leading-none text-black"
                htmlFor={`collab${index + 1}`}
              >
                {collab}
              </label>
            </div>
          ))}
        </Form.Field>

        <Form.Submit asChild>
          <button className="box-border w-full text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
            Create Account
          </button>
        </Form.Submit>
      </Form.Root>
    </section>
  );
}

export default Connect;
