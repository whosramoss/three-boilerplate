export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="pointer-events-none absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-2xl font-medium text-slate-200 md:text-5xl">
      {children}
    </h1>
  );
}
