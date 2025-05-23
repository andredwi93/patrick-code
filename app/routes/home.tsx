import Portfolio from "~/pages/portfolio";
import type { Route } from "./+types/home";
import { data, type ActionFunctionArgs } from "react-router";
import { Toaster } from "~/components/ui/sonner";
import { WhatsappIcon } from "~/components/icons/skills";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to Patrick Coding!" },
  ];
}

interface Errors {
  email?: string;
  yourname?: string;
  yourmessage?: string;
}

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = String(formData.get("youremail"));
  const yourname = String(formData.get("yourname"));
  const yourmessage = String(formData.get("yourmessage"));

  const errors: Errors = {};

  if (!emailRegex.test(email.trim())) {
    errors.email = "Invalid email address";
  }

  if (yourname.length < 4) {
    errors.yourname = "Your name should be at least 5 characters";
  }

  if (yourmessage.length < 4 || yourmessage.length > 1000) {
    errors.yourmessage =
      "Your message should be at least 5 characters and less than 1000 characters";
  }

  if (Object.keys(errors).length > 0) {
    return data({ errors }, { status: 400 });
  }

  await fetch("https://formspree.io/f/mdkgvyow", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, yourname, yourmessage }),
  })
    .then(() => {
      console.log("success");
    })
    .catch((e) => console.log(e));

  return {
    message: "success",
  };
}

export default function Home() {
  return (
    <main>
      <Portfolio />
      <Toaster />
      <a
        href="https://wa.me/6285233755399"
        target="_blank"
        className="fixed bottom-10 right-10 z-50 "
      >
        <WhatsappIcon className="w-14 h-14" />
      </a>
    </main>
  );
}
