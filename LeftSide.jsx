"use client";

import Link from "next/link";
import SocialLinks from "../SocialLinks";
import RelatedBlog from "./RelatedBlog";

/**
 * Componente Client per la parte sinistra della pagina di dettaglio.
 * Riceve una stringa HTML (body) come prop e la visualizza.
 *
 * @param {object} props
 * @param {string} props.body - La stringa HTML da visualizzare.
 */
export default function LeftSide({ body }) {

  // console.log("BODY ricevuto in LeftSide:", body); // Utile per debug, lascialo commentato se non serve

  return (
    <div className="w-full">
      <article className="prose max-w-full prose-li:marker:text-primary prose-h2:text-[32px] prose-h2:mt-12 lg:prose-h2:text-[48px] xl:prose-h2:text-[60px]">
        {/* Visualizza l'HTML in modo sicuro. */}
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </article>

      {/* Resto del layout (Share, Tag, Next...) */}
      <div className="flex flex-col sm:flex-row gap-6 justify-between items-start py-10">
        <div className="space-y-4">
          <div className="flex gap-2 items-center">
            <p className="text-lg xl:text-2xl text-black">Share : </p>
            <SocialLinks
              Classes="size-[34px] sm:size-[42px]"
              iconClasses="size-[20px] sm:size-[24px]"
              parentClass="flex gap-2 xl:gap-4 justify-between items-center"
            />
          </div>
          {/* Rimosso breadcrumb statico, dato che usi il componente <Breadcrumb>*/}
          <div className="flex gap-2 flex-col sm:flex-row sm:items-center">
            <p className="shrink-0 text-base lg:text-lg">Tag : </p>
            <ul className="flex gap-2.5 flex-wrap">
              <li>
                <Link
                  href="#"
                  className="px-4 sm:px-6 py-1 rounded-full border text-base inline-block font-medium border-[#8FC668] text-[#8FC668]"
                >
                  Natura E Territorio
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="px-4 sm:px-6 py-1 rounded-full border text-base inline-block font-medium border-[#D1544D] text-[#D1544D]"
                >
                  Spiagge E Calette
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="px-4 sm:px-6 py-1 rounded-full border text-base inline-block font-medium border-[#00BCD5] text-[#00BCD5]"
                >
                  Itinerario Sole e Mare
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Link
          href="#"
          className="flex gap-1 text-sm sm:gap-2 justify-center sm:text-base group text-primary font-medium hover:text-white hover:bg-primary transition-all items-center px-7 py-3 rounded-full border border-primary"
        >
          <span>Next</span>
          <svg
            className="group-hover:stroke-white stroke-primary transition-all"
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="14"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 13 6-6-6-6"
            />
          </svg>
        </Link>
      </div>

      <RelatedBlog />

      <div className="flex justify-start pt-12">
        <Link
          href="#"
          className="flex gap-1 text-sm sm:gap-2 justify-center sm:text-base group text-primary font-medium hover:text-white hover:bg-primary transition-all items-center px-4 sm:px-6 py-3 sm:py-4 rounded-full border border-primary"
        >
          <span>Click Here To See More</span>
          <svg
            className="group-hover:stroke-white stroke-primary transition-all"
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="11"
            fill="none"
            viewBox="0 0 11 11"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M1.375 9.523 9.45 1.81M3.224 1.555h6.667v6.667"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}