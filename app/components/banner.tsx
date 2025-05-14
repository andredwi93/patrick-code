import { Button } from "./ui/button";

export default function Banner() {
  return (
    <section id="banner" className="bg-primary-300">
      <div className="wrapper mx-auto py-16 relative flex gap-12">
        <div className="w-[586px]">
          <div className="capitalize">
            <h2 className="text-4xl text-white font-bold">frontend</h2>
            <h3 className="text-4xl text-green-100 font-bold">engineer</h3>
          </div>
          <div className="flex gap-6 mt-12">
            <Button>Hire Me</Button>
            <Button
              variant="secondary"
              className="flex items-center gap-[10px]"
            >
              Download CV
              <img
                src="/assets/icons/download.svg"
                alt="ic-download"
                className="w-6 h-6"
              />
            </Button>
          </div>
        </div>
        <div className="w-full h-[514px] relative">
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
