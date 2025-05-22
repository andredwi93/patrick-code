import { Button } from "./ui/button";

export default function Messages() {
  return (
    <div id="messages" className="bg-primary-300">
      <div className="wrapper mx-auto py-16 flex gap-12">
        <div className="w-[600px]">
          <h2 className="text-3xl text-white font-bold">
            Got a project in <span className="text-green-100">mind?</span>
          </h2>
          <div className="w-full flex items-end justify-end">
            <img
              src="/assets/illus-message.png"
              alt="illus-message"
              className="w-[255px] h-348px]"
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex gap-6">
            <div className="flex-1">
              <label
                htmlFor="yourname"
                className="text-xl text-white font-bold"
              >
                Your name
              </label>
              <input
                type="text"
                id="yourname"
                name="yourname"
                placeholder="Name"
                className="py-4 px-6 w-full bg-primary-100 mt-2 rounded-2xl text-xl text-white font-bold placeholder:text-slate-50/50"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="youremail"
                className="text-xl text-white font-bold"
              >
                Your email
              </label>
              <input
                type="email"
                id="youremail"
                name="youremail"
                placeholder="Email"
                className="py-4 px-6 w-full bg-primary-100 mt-2 rounded-2xl text-xl text-white font-bold placeholder:text-slate-50/50"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              htmlFor="yourmessage"
              className="text-xl text-white font-bold"
            >
              Your message
            </label>
            <textarea
              id="yourmessage"
              name="yourmessage"
              placeholder="Message"
              className="py-4 h-[280px] px-6 w-full bg-primary-100 mt-2 rounded-2xl text-xl text-white font-bold placeholder:text-slate-50/50"
            ></textarea>
          </div>
          <Button className="mt-6 flex items-center gap-3 group">
            Send Message
            <img
              src="/assets/icons/send.svg"
              alt="ic-send"
              className="w-6 h-6 transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-12"
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
