import { getCategories } from "@/src/actions";
import { Footer, Sidebar, TopMenu } from "@/src/components";

export default async function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();

  return (
    <main className="min-h-screen flex flex-col">
      <TopMenu categories={categories} />
      <Sidebar />

      <div className="flex-grow">{children}</div>

      <Footer />
    </main>
  );
}
