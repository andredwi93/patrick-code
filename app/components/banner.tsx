import { Button } from "./ui/button";

export default function Banner() {
  return (
    <section id="banner" className="bg-primary-300">
      <div className="wrapper px-5 lg:px-0 mx-auto py-10 lg:py-16 relative flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="w-full lg:w-[586px]">
          <div className="capitalize">
            <h2 className="text-3xl lg:text-4xl text-white font-bold">frontend</h2>
            <h3 className="text-3xl lg:text-4xl text-green-100 font-bold">engineer</h3>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 mt-8 lg:mt-12">
            <Button
              onClick={() => {
                document.getElementById("messages")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Hire Me
            </Button>
            <a
              href="https://docs.google.com/document/d/1e-Sp_fugjf7zvqdFMPmQANSRMTpYatSswXkwK0w9YvU/edit?usp=sharing"
              target="_blank"
              className="flex items-center justify-center gap-[10px] py-[10px] px-8 rounded-full cursor-pointer bg-primary-100/75 font-bold text-xl text-slate-50 text-shadow-xl hover:bg-primary-100/80"
            >
              Download CV
              <img
                src="/assets/icons/download.svg"
                alt="ic-download"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
        <div className="hidden lg:flex w-full h-[514px] relative">
          <img
            src="/assets/icons/bg-banner.svg"
            alt="banner"
            className="w-[514px] h-[514px] absolute -top-12 right-0"
          />
          <img
            src="/assets/illus-banner.png"
            alt="illus-banner"
            className="w-[400px] h-[472px] absolute top-24 left-12"
          />
        </div>
      </div>
    </section>
  );
}
