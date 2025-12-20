import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Unblocked games 674189" },
    { name: "description", content: "Unblocked games 674189" },
  ];
}

export default function Home() {
  return <Welcome />;
}
