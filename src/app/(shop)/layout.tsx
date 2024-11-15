import { Footer, Sidebar, TopMenu } from "@/src/components";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col">
      <TopMenu />
      <Sidebar />

      <div className="flex-grow">{children}</div>

      <Footer />
    </main>
  );
}
