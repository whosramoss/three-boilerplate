import Title from "@/client/components/Title";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section>
      <div className="flex min-h-screen w-screen flex-col items-center justify-start">
        <Title>Page not found</Title>
        <Link className="text-slate-200 font-medium text-2xl pt-16" to="/">
          Go back
        </Link>
      </div>
    </section>
  );
};
