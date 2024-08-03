import Title from "@/client/components/Title";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section>
      <div className="flex min-h-screen w-screen flex-col items-center justify-start">
        <Title>Page not found</Title>
        <Link className="pt-16 text-2xl font-medium text-slate-200" to="/">
          Go back
        </Link>
      </div>
    </section>
  );
}
