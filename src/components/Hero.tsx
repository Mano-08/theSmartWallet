import React, { useState, useEffect } from "react";
import glitter from "../../public/images/glitter.png";
import icon from "../../public/svgs/50mm.svg";
import mainIcon from "../../public/images/50mm.png";
import youtube from "../../public/svgs/youtube.svg";
import director from "../../public/images/directorial.png";
import {
  Sansita_Swashed,
  Petrona,
  Space_Grotesk,
  Montserrat,
} from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const sasita = Sansita_Swashed({ subsets: ["latin"] });
const petrona = Petrona({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin", "latin-ext"] });
const monsterrat = Montserrat({ subsets: ["latin"] });

export default function Hero() {
  return (
    <section>
      <div className="relative">
        <video
          className="h-[60vh] w-auto md:h-full md:w-full block object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
        >
          <source
            src="https://50mmcollective.my.canva.site/50mmcollective/videos/05b1f6f36b0de9f8c66eecad967ad980.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute top-[10vh] left-[5vw] flex flex-col gap-6">
          <div className="flex flex-row gap-4 items-end">
            <Image src={icon} alt="50MM logo" />
            <Image
              src={mainIcon}
              alt="50MM Collection"
              className="h-5 w-auto"
            />
          </div>
          <p className="text-white text-[7vw] sm:text-[4.5vw] md:text-[3.7vw] font-semibold max-w-[80vw] md:max-w-[40vw] leading-[1.2]">
            SMART WALLETS CONNECT TO YOUR DEVICES PASSKEYS THROUGH
            BLUETOOTH/FACEID SMART WALLET
          </p>
          <div>
            <Link href="/signup">
              <button
                className={`${spaceGrotesk.className} bg-yellow-400 px-10 py-2 text-[1.4rem]`}
              >
                Get started
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative">
        <Image
          loading="lazy"
          className="h-[40vh] w-auto md:w-full block object-cover object-center"
          src={glitter}
          sizes="(max-width: 375px) 321.19235781vw, (min-width: 375.05px) and (max-width: 480px) 278.98138967vw, (min-width: 480.05px) and (max-width: 768px) 219.57149579vw, (min-width: 768.05px) and (max-width: 1024px) 179.86713965vw, (min-width: 1024.05px) 133.07111854vw"
          alt="Grain background"
        ></Image>
        <div className="absolute top-0 left-0 h-full w-full flex flex-col md:flex-row items-center px-5 md:px-24 justify-evenly md:justify-between">
          <Image
            src={youtube}
            className="md:h-[120px] h-[80px] w-auto"
            alt="YouTube"
            loading="lazy"
          />
          <p className="text-white text-[4.5vw] sm:text-[3.3vw] md:text-[2.4vw] text-center md:text-left mx-w-[100vw] md:max-w-[50vw] font-semibold">
            YOUR PREMIER CREATIVE AGENCY FOR DIGITAL MEDIA WORLDWIDE.
            SAFEGUARDING YOUR CONTENT WITH SECURE ONCHAIN STORAGE.
          </p>
        </div>
      </div>

      <div>
        <Image
          src={director}
          alt="Director"
          sizes="(max-width: 375px) 91.46666667vw, (min-width: 375.05px) and (max-width: 480px) 93.33333333vw, (min-width: 480.05px) and (max-width: 768px) 91.66666667vw, (min-width: 768.05px) and (max-width: 1024px) 93.75vw, (min-width: 1024.05px) 100vw"
          className="h-auto w-[100vw] block object-cover object-center"
        />
      </div>
    </section>
  );
}
