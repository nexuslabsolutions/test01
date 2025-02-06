import Image from "next/image";

export default function Banner() {
  return (
    <section className="py-6 px-4 ">
      <div className="space-y-8 container mx-auto">
        <div className="rounded-md bg-primary/5 px-4 sm:px-6 py-2 flex flex-wrap gap-2 xl:gap-3 items-center">
          <h3 className="text-xl sm:text-2xl font-medium text-primary ">
            News Update :
          </h3>
          <ul className="flex max-xl:flex-wrap gap-x-3 gap-y-1.5 xl:gap-3 items-center">
            <li className="flex gap-1 items-center">
              <div className="size-2 rounded-full bg-primary shrink-0"></div>
              <p className="text-sm sm:text-base lg:text-lg font-light text-black">
                Wine tourism itinerary among Calabrian estates and wineries
              </p>
            </li>
            <li className="flex gap-1 items-center">
              <div className="size-2 rounded-full bg-primary shrink-0"></div>
              <p className="text-sm sm:text-base lg:text-lg font-light text-black">
                Autumn in Calabria is a magic of colours, scents
              </p>
            </li>
            <li className="flex gap-1 items-center">
              <div className="size-2 rounded-full bg-primary shrink-0"></div>
              <p className="text-sm sm:text-base lg:text-lg font-light text-black">
                How to Reach air ports in calabriya
              </p>
            </li>
          </ul>
        </div>
        <div className="w-full">
          <Image
            src={"/images/image-1.png"}
            alt="banner main image"
            width={1440}
            height={700}
            loading="lazy"
            className="rounded-2xl sm:rounded-3xl max-sm:min-h-[300px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
