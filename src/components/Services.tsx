import React from "react";
import Image from "next/image";
import goal from "../../public/svgs/goal.svg";
import eye from "../../public/svgs/eye.svg";
import bulb from "../../public/svgs/bulb.svg";
import { Montserrat } from "next/font/google";
const monsterrat = Montserrat({ subsets: ["latin"] });

function Services() {
  const services = [
    {
      img: goal,
      title: "OnChain Media Integration",
    },
    {
      img: eye,
      title: "Blockchain-Powered Content Verification",
    },
    {
      img: bulb,
      title: "Integration with XR Technologies",
    },
  ];
  return (
    <section className="flex flex-col gap-16 px-5 md:px-[5vw] py-7 md:py-10">
      <div className="flex flex-col md:flex-row items-start justify-between">
        <p className="font-semibold text-[9vw] sm:text-[4.5vw] md:text-[3.7vw]">
          OUR SERVICES
        </p>
        <aside className="my-3 md:max-w-[45vw] text-[3.6vw] sm:text-[2.2vw] md:text-[1.61vw]">
          At 50MM Collective, we specialize in partnering with brands and
          companies to elevate their digital presence through OnChain media
          solutions. Join us in revolutionizing digital asset management and
          storytelling on a global scale.
        </aside>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-0 items-center md:items-start justify-between">
        {services.map((ele, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-4 text-center"
            >
              <Image src={ele.img} alt={ele.title} className="" />
              <p
                className={`${monsterrat.className} text-[5vw] max-w-[230px] md:max-w-[250px] sm:text-[2.5vw] md:text-[1.75vw]`}
              >
                {ele.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
