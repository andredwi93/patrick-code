import Icons from "~/lib/data";


export default function ProjectComponent() {
  return (
    <div
      id="projects"
      className="bg-primary-300"
    >
      <div className="wrapper mx-auto py-16">
        <div>
          <h2 className="text-3xl text-white font-bold">
            My recent <span className="text-green-100">works</span>
          </h2>
          <div className="mt-6 flex gap-12">
            <div className="flex-1 h-[280px] bg-primary-100/50 backdrop-blur-xs rounded-2xl flex items-center justify-center">
              <img
                src="/assets/impactsea.webp"
                alt="impactsea"
                className="w-[265px] h-[130px] hover:scale-125 duration-300"
              />
            </div>
            <div className="flex-1 h-[280px] bg-primary-100/50 backdrop-blur-xs rounded-2xl flex items-center justify-center">
              <img
                src="/assets/riliv-landingpage.webp"
                alt="riliv-landingpage"
                className="w-[265px] h-[130px] hover:scale-125 duration-300"
              />
            </div>
            <div className="flex-1 h-[280px] bg-primary-100/50 backdrop-blur-xs rounded-2xl flex items-center justify-center">
              <img
                src="/assets/delvio.webp"
                alt="delvio"
                className="w-[265px] h-[130px] hover:scale-125 duration-300"
              />
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl text-white font-bold">
            My <span className="text-green-100">skills</span>
          </h2>
          <div className="mt-6 flex gap-4">
            <Icons />
          </div>
        </div>
      </div>
    </div>
  );
}
