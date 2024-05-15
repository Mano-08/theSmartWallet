import { Space_Grotesk } from "next/font/google";
import twitter from "../../public/svgs/twitter.svg";
import work_bg from "../../public/images/bg_work.png";
import work_gform from "../../public/images/gform_work.png";
import instagram from "../../public/svgs/instagram.svg";
import Image from "next/image";
import React from "react";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

function WorkWithUs() {
  return (
    <section className="relative">
      <Image
        src={work_bg}
        alt="work with us background image"
        className="h-[90vh] sm:h-[150vh] md:h-screen w-screen opacity-50 block object-cover object-center"
      />
      <div className="absolute top-0 left-0 px-5 md:px-[5vw] py-10 md:py-16">
        <h1 className="text-[8vw] sm:text-[4vw] md:text-[3.9vw] font-semibold">
          WORK WITH US
        </h1>

        <div className="flex flex-col md:flex-row gap-7 sm:gap-10 md:gap-16">
          <div className="flex flex-col justify-between py-5">
            <p className="text-[3.5vw] sm:text-[2vw] md:text-[1.35vw] font-medium py-3">
              We envision events not just as moments in time, but as stories
              waiting to be told. Through our innovative approach to OnChain
              media production, we don't just document events — we bring them to
              life. From captivating imagery to secure on-chain archiving, our
              mission is to weave immersive narratives that transcend borders
              and resonate with audiences worldwide. Join us in shaping the
              future of event storytelling.
            </p>
            <div className="flex flex-col">
              <h2
                className={`${spaceGrotesk.className} text-[4.5vw] sm:text-[3.5vw] md:text-[1.85vw] py-2 text-white`}
              >
                SOCIALS
              </h2>
              <div className="flex flex-row items-center gap-1 sm:gap-3">
                <Image
                  src={twitter}
                  alt="Twitter"
                  className="h-8 w-8 sm:h-12 sm:w-12"
                />
                <Image
                  src={instagram}
                  alt="Instagram"
                  className="h-8 w-8 sm:h-12 sm:w-12"
                />
              </div>
            </div>
          </div>

          <Image
            src={work_gform}
            alt="Google Form - Work with us"
            className="w-[90vw] md:w-[40vw] h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default WorkWithUs;
