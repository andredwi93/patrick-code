import Portfolio from "~/pages/portfolio";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to Patrick Coding!" },
  ];
}

export default function Home() {
  return (
    <main>
      <Portfolio />
    </main>
  );
}
