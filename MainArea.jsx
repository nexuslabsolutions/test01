import Image from "next/image";
import SocialLinks from "../SocialLinks";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function MainArea() {
  return (
    <section className="pt-8 pb-8 lg:pb-[60px]  px-4">
      <div className="container mx-auto space-y-8 sm:space-y-12">
        <div className="flex justify-between items-start gap-6">
          <div className="max-w-[1100px]">
            <h2 className="text-black font-semibold text-[28px] sm:text-[32px] lg:text-[48px] xl:text-[60px] leading-[1.1]">
              Tour of the Most Beautiful Villages of Italy in Calabria
            </h2>
          </div>
          <ul className="flex gap-3 sm:gap-5 items-center shrink-0">
            <li>
              <button type="button" className=" ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="34"
                  fill="none"
                  viewBox="0 0 26 34"
                >
                  <path
                    fill="#000"
                    d="M19.75.125H6.25A5.63 5.63 0 0 0 .625 5.75v27a1.125 1.125 0 0 0 1.828.879L13 25.19l10.547 8.438a1.125 1.125 0 0 0 1.828-.879v-27A5.63 5.63 0 0 0 19.75.125m3.375 30.284-9.422-7.538a1.125 1.125 0 0 0-1.406 0L2.875 30.41V5.75A3.375 3.375 0 0 1 6.25 2.375h13.5a3.375 3.375 0 0 1 3.375 3.375z"
                  ></path>
                  <path
                    fill="#000"
                    d="M16.375 12.5h-2.25v-2.25a1.125 1.125 0 1 0-2.25 0v2.25h-2.25a1.125 1.125 0 1 0 0 2.25h2.25V17a1.125 1.125 0 1 0 2.25 0v-2.25h2.25a1.125 1.125 0 1 0 0-2.25"
                  ></path>
                </svg>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="size-7 sm:size-9 flex justify-center items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="8"
                  fill="none"
                  viewBox="0 0 34 8"
                >
                  <path
                    fill="#000"
                    d="M17.002.04a3.962 3.962 0 1 0 .003 7.924A3.962 3.962 0 0 0 17 .04zm-12.6 0a3.962 3.962 0 1 0 0 7.924 3.962 3.962 0 0 0 0-7.924m25.2 0a3.962 3.962 0 1 0 0 7.924 3.962 3.962 0 0 0 0-7.924"
                  ></path>
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
          <div className="flex max-md:flex-wrap gap-4 md:gap-8 xl:gap-20 items-center">
            <div className="flex gap-2 items-center">
              <div className="flex items-center gap-2">
                <Image
                  loading="lazy"
                  src={"/images/avatar.png"}
                  alt={"avatar"}
                  className="object-cover size-8 sm:size-auto rounded-full shrink-0"
                  width={48}
                  height={48}
                />
                <p className="text-sm lg:max-xl:w-48 xl:text-lg text-black/60">
                  Itinerary through authentic Calabrian villages
                </p>
              </div>
              <div className="flex shrink-0 gap-1 items-center">
                <div className="size-2 rounded-full bg-primary"></div>
                <p className="text-sm xl:text-lg text-black/60">
                  Sun April 7,2024
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg xl:text-2xl text-primary">Sardegna</h3>
              <div className="flex gap-1 items-center">
                <div className="size-2 rounded-full bg-black/60"></div>
                <p className="text-sm xl:text-lg text-black/60">5 min read</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-lg xl:text-2xl text-black">Share : </p>

            <SocialLinks
              Classes={"size-[34px] sm:size-[42px]"}
              iconClasses={"size-[20px] sm:size-[24px]"}
              parentClass={"flex gap-2 xl:gap-4 justify-between items-center"}
            />
          </div>
        </div>
        <div className="flex gap-8 flex-col lg:flex-row">
          <LeftSide />
          <RightSide />
        </div>
      </div>
    </section>
  );
}
