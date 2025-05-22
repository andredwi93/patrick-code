import About from "~/components/about";
import Banner from "~/components/banner";
import Messages from "~/components/messages";
import Navbar from "~/components/navbar";
import ProjectComponent from "~/components/projects";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <ProjectComponent />
      <Messages />
    </>
  );
}
