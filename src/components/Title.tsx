export default function Title({ children }: { children: React.ReactNode }) {
    return (
        <h1 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-200 font-medium text-2xl md:text-5xl pointer-events-none">
            {children}
        </h1>
    )
}