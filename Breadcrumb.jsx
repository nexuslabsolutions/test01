import Link from "next/link";

export default function Breadcrumb() {
  return (
    <section className="px-4">
      <div className="container mx-auto">
        <div className=" " id="breadcrumb">
          <ul className="list-none">
            <li className="group inline before:relative before:content-arrowright before:mx-3 first:before:hidden">
              <Link href={"#"} className="text-black/70 text-base lg:text-lg ">
                HOME
              </Link>
            </li>
            <li className="group inline before:relative before:content-arrowright before:mx-3 first:before:hidden">
              <Link href={"#"} className="text-black/70 text-base lg:text-lg ">
                Sardegna
              </Link>
            </li>
            <li className="group inline before:relative before:content-arrowright before:mx-3 first:before:hidden">
              <Link href={"#"} className="text-black/70 text-base lg:text-lg ">
                Nature e territorio
              </Link>
            </li>
            <li className="group inline before:relative before:content-arrowright before:mx-3 first:before:hidden">
              <Link href={"#"} className="text-black/70 text-base lg:text-lg ">
                Spiagge e coste
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
