import { Header } from "@/components/layout/header";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="relative min-h-screen">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-0 -right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-full blur-3xl opacity-20" />
        </div>
        {children}
      </div>
    </>
  );
}
