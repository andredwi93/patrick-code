import Icons from "~/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function ProjectComponent() {
  const dataProjects = [
    {
      link: "https://impactsea.org/",
      src: "/assets/impactsea.webp",
      alt: "impactsea",
    },
    {
      link: "https://www.riliv.co/",
      src: "/assets/riliv-landingpage.webp",
      alt: "riliv-landingpage",
    },
    {
      link: "https://www.delvio.co/",
      src: "/assets/delvio.webp",
      alt: "delvio",
    },
    {
      link: "https://student.riliv.ai/",
      src: "/assets/rfe-student.png",
      alt: "rfe-student",
    },
    {
      link: "https://indonesiamendengar.riliv.co/",
      src: "/assets/indonesia.png",
      alt: "indonesia",
    },
    {
      link: "https://employee.riliv.co/",
      src: "/assets/employee-riliv.png",
      alt: "employee-riliv",
    },
    {
      link: "https://parent.riliv.ai",
      src: "/assets/rfe-parent.png",
      alt: "rfe-parent",
    },
    {
      link: "https://scheduling.riliv.co/",
      src: "/assets/scheduling.png",
      alt: "scheduling",
    },
  ];
  return (
    <div id="projects" className="bg-primary-300">
      <div className="wrapper mx-auto px-5 lg:px-0 py-10 md:py-16">
        <div className="relative">
          <h2 className="text-3xl text-white font-bold">
            My recent <span className="text-green-100">works</span>
          </h2>
          <Carousel
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="mt-6 w-full"
          >
            <CarouselContent className="ml-0">
              {dataProjects.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full ml-5 pl-0 md:basis-1/2 lg:basis-1/4 h-[245px] bg-primary-100/50 backdrop-blur-xs rounded-2xl flex items-center justify-center"
                >
                  <a href={item.link} target="_blank" aria-label={item.alt}>
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-[260px] md:w-[245px] h-[130px] hover:scale-110 duration-300"
                    />
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -top-16 z-30 left-9/12 md:left-10/12 lg:left-11/12" />
            <CarouselNext className="absolute -top-16 z-30 right-0" />
          </Carousel>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl text-white font-bold">
            My <span className="text-green-100">skills</span>
          </h2>
          <div className="mt-6 flex gap-4 flex-wrap">
            <Icons />
          </div>
        </div>
      </div>
    </div>
  );
}
