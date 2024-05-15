import Image from "next/image";
import higherSession2024Image from "../../public/images/higher_session.jpg";
import React from "react";
import { Space_Grotesk } from "next/font/google";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

function OurWork() {
  const ourWork = [
    {
      content: "video",
      title: "BAGGAGE CLAIM 2024",
      src: "https://50mmcollective.my.canva.site/50mmcollective/videos/1cc72f6c94e3e6bf34b6c68bda0a6154.mp4",
    },
    {
      content: "image",
      title: "HIGHER SESSIONS 2024",
      src: higherSession2024Image,
    },
    {
      content: "video",
      title: "Young Thug 2020",
      src: "https://50mmcollective.my.canva.site/50mmcollective/videos/c025ef1c9343fb6326fd2f6f83aed42f.mp4",
    },
  ];
  return (
    <section className="bg-black text-white px-5 py-10 md:py-16 md:px-[5vw]">
      <h1 className="text-[9vw] font-semibold sm:text-[3.5vw] md:text-[3vw] my-3 text-center sm:text-left">
        OUR WORK
      </h1>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-7">
        {ourWork.map((ele, index) => (
          <>
            <div className="flex flex-col gap-5 items-center md:justify-between">
              <div className="flex grow justify-center items-center">
                {ele.content === "video" ? (
                  <video
                    className=" block object-cover object-center"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                  >
                    <source src={ele.src as string} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={higherSession2024Image}
                    alt={ele.title}
                    className="px-10"
                  />
                )}
              </div>
              <p
                className={`${spaceGrotesk.className} text-[7vw] sm:text-[2.5vw] md:text-[1.6vw]`}
              >
                {ele.title}
              </p>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}

export default OurWork;
