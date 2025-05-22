import { useState } from "react";

export default function About() {
  const [isReadMore, setIsReadMore] = useState(false);

  return (
    <div id="about" className="bg-primary-300">
      <div className="wrapper mx-auto py-16 flex gap-[180px]">
        <div className="w-[400px] pt-20">
          <h2 className="text-3xl text-white font-bold">
            About <span className="text-green-100">Me</span>
          </h2>
          <p className="text-xl text-slate-50">
            Creative and results-driven front-end engineer with over 5 years of
            experience crafting responsive, accessible, and engaging web
            applications using modern technologies such as React.js, Next.js,
            and React Router v7 Framework. Adept at translating UI/UX designs
            into functional user interfaces, collaborating across teams, and
            delivering high-quality, scalable code.{" "}
            <button
              className={`cursor-pointer text-green-100 ${isReadMore ? "hidden" : "block"}`}
              onClick={() => setIsReadMore(true)}
            >
              Read More...
            </button>
            <span className={`${isReadMore ? "block" : "hidden"}`}>
              {" "}
              Experienced in both corporate environments and impact-driven
              nonprofit projects. Additionally, expanding full-stack
              capabilities by learning backend technologies including Express.js
              and NestJS to build robust APIs and enhance overall application
              architecture.
            </span>
            <button
              className={`cursor-pointer text-green-100 ${isReadMore ? "block" : "hidden"}`}
              onClick={() => setIsReadMore(false)}
            >
              Show less
            </button>
          </p>
        </div>
        <div className="flex-1 relative w-full h-[calc(499px+78px)]">
          <img
            src="/assets/icons/bg-section-1.svg"
            alt="section"
            className="w-[665px] h-[499px]"
          />
          <img
            src="/assets/illus-about.png"
            alt="about"
            className="w-[412px] h-353px] absolute bottom-0 left-1/2 -translate-x-1/2"
          />
        </div>
      </div>
    </div>
  );
}
