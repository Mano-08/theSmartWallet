import Image from "next/image";
import React from "react";
import quotation from "../../public/svgs/quotation.svg";

function ClientReviews() {
  const reviews = [
    "Working with 50MM Collective was an absolute pleasure. Their team's professionalism and attention to detail ensured that every moment of our summit was captured flawlessly. The immersive storytelling experiences they produced truly brought our event to life for our global audience. I highly recommend 50MM Collective to any event organizer looking for top-tier media production.",
    ,
    "Partnering with 50MM Collective exceeded all expectations. Their interactive event exhibitions were a highlight for our attendees, fostering deeper engagement and connection. Their commitment to blockchain-powered content verification gave us peace of mind knowing that our event documentation was secure and authentic. I can't wait to collaborate with them again!",
    ,
    "We were blown away by the creativity and professionalism of 50MM Collective. From their innovative immersive storytelling experiences to their seamless integration of blockchain-powered content verification, they elevated our event documentation to new heights. Their team's dedication to capturing the essence of our expo truly resonated with our audience. We're grateful for their partnership and look forward to future collaborations.",
  ];
  return (
    <section className="bg-black text-white px-5 md:px-[6vw] py-16 md:py-20">
      <div className="flex flex-row items-end gap-5 lg:justify-start justify-center">
        <h1 className="text-[8vw] sm:text-[4.5vw] md:text-[3.7vw] font-semibold">
          FROM OUR CLIENTS
        </h1>
        <Image
          src={quotation}
          alt="quotation"
          className="h-20 w-20 relative -top-[30px]"
        />
      </div>

      <div className="grid justify-center lg:grid-cols-3 gap-10 sm:gap-12 md:gap-16 lg:gap-20 pt-16">
        {reviews.map((ele, index) => (
          <div
            className="max-w-[80vw] sm:max-w-[50vw] text-[4vw] sm:text-[2.5vw] md:text-[1.35vw]"
            key={index}
          >
            {ele}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClientReviews;
