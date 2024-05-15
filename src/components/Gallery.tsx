import React from "react";

function Gallery() {
  const content = [
    {
      title: "50MM COLLECTIVE",
      context: "EDUCATIONAL VIDEO",
      src: "https://50mmcollective.my.canva.site/50mmcollective/videos/c025ef1c9343fb6326fd2f6f83aed42f.mp4",
    },
    {
      title: "THE LEGACY PORTRAIT PROJECT",
      context: "AR ACTIVATED PHOTOGRAPHY",
      src: "https://50mmcollective.my.canva.site/50mmcollective/videos/30d7e23aedf7a2038720bf8199577e85.mp4",
    },
    {
      title: "VISIBILITY GALLERY",
      context: "VR EXHIBITION",
      src: "https://50mmcollective.my.canva.site/50mmcollective/videos/753c77c04d3e735ec70fda19808b9523.mp4",
    },
    {
      title: "IMAN ART BRAND",
      context: "BRAND VIDEO",
      src: "https://50mmcollective.my.canva.site/50mmcollective/videos/5560dd1a49af57195be4cc7bb3a3ff4b.mp4",
    },
  ];
  return (
    <section className="flex flex-col px-5 md:px-[5vw] py-10 md:py-16">
      {content.map((ele, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row lg:items-center justify-between"
        >
          <div className="leading-[1.4]">
            <h1 className="text-[6.5vw] sm:text-[4vw] md:text-[3.2vw] font-bold">
              {ele.title}
            </h1>
            <h2 className="text-[6.3vw] sm:text-[3.8vw] md:text-[3vw]">
              {ele.context}
            </h2>
          </div>
          <video
            className="py-16 h-[60vh] w-auto lg:h-auto lg:w-[50vw] block object-cover object-center"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
          >
            <source src={ele.src as string} type="video/mp4" />
          </video>
        </div>
      ))}
    </section>
  );
}

export default Gallery;
