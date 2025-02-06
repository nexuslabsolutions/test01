import Link from "next/link";
import ArticleCardThree from "./ArticleCardThree";

const BeautifulVillages = async ({ title, subTitle, articles }) => {
  return (
    <section className="py-8 lg:py-[60px] px-4">
      <div className="container mx-auto space-y-8 sm:space-y-12">
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-3 pb-6 sm:pb-10 border-b border-black/25">
          <div className="space-y-1.5">
            <h2 className="font-semibold text-black text-[32px] sm:text-[38px] lg:text-[48px] xl:text-[60px] leading-tight">
              {title}
            </h2>
            <p className="text-black text-base lg:text-lg">{subTitle}</p>
          </div>
          <div className="sm:w-[160px] shrink-0">
            <Link
              href={"#"}
              className="flex gap-1 text-sm sm:gap-2 justify-center sm:text-base group text-primary font-medium hover:text-white hover:bg-primary transition-all items-center px-7 sm:px-6 py-3 sm:py-4 rounded-full border-[3px] border-primary "
            >
              <span>Read More</span>
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
                ></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="max-xl:-mr-4">
          <div className="w-full flex hide-scrollbar overflow-x-auto  max-xl:pr-4 justify-between xl:grid grid-cols-4 gap-4 sm:gap-6 ">
            {articles.map((article) => (
              <ArticleCardThree {...article} key={article.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeautifulVillages;
