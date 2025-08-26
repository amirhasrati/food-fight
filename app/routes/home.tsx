import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home | Food Fight" },
    { name: "description", content: "Welcome to Food Fight!" },
  ];
}

export default function Home() {
  return (
    <h1 className="text-4xl text-center text-blue-800">Food Fight!</h1>
  );
}
