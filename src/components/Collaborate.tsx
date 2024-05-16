import Link from "next/link";
import collaborate_bg from "../../public/images/bg_collaborate.jpg";
import collaborate_gform from "../../public/images/gform_join.png";
import Image from "next/image";
import React from "react";

function Collaborate() {
  return (
    <section className="relative">
      <Image
        src={collaborate_bg}
        alt="work with us background image"
        className="h-[90vh] sm:h-[150vh] md:h-screen w-screen opacity-50 block object-cover object-center"
      />
      <div className="absolute top-0 left-0 px-5 md:px-[5vw] py-10 md:py-16">
        <h1 className="text-[9vw] sm:text-[4.5vw] md:text-[3.7vw] font-semibold">
          COLLABORATE
        </h1>

        <div className="flex flex-col md:flex-row gap-16">
          <p className="text-[3.8vw] sm:text-[2.5vw] md:text-[1.35vw] font-medium py-3 md:w-[40vw]">
            We envision events not just as moments in time, but as stories
            waiting to be told. Through our innovative approach to OnChain media
            production, we don't just document events — we bring them to life.
            From captivating imagery to secure on-chain archiving, our mission
            is to weave immersive narratives that transcend borders and resonate
            with audiences worldwide. Join us in shaping the future of event
            storytelling.
          </p>

          <Link
            target="_blank"
            className="w-[90vw] md:w-[40vw] h-auto"
            href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdcU6tATw5wAMNKxf74XZV2O0B-Hi2hPo03Xp0GjyJimrwGCA/viewform"
          >
            <Image
              src={collaborate_gform}
              alt="Google Form - Work with us"
              className="w-[90vw] md:w-[40vw] h-auto"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Collaborate;
