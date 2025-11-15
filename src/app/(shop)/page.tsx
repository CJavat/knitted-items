export const revalidate = 60;

import { redirect } from "next/navigation";
import { getPaginatedProductsWithImages } from "@/src/actions";
import { Pagination, ProductGrid, Title } from "@/src/components";

interface Props {
  searchParams: Promise<{
    page?: string;
  }>;
}

export const metadata = {
  title: "Inicio",
  description:
    "Tienda en línea de productos tejidos con varias presentaciones, artículos de todo tipo, muñecos y mucho más.",
};

export default async function HomePage({ searchParams }: Props) {
  const page = (await searchParams).page
    ? parseInt((await searchParams).page ?? "")
    : 1;

  const { products, totalPages } = await getPaginatedProductsWithImages({
    page,
  });

  if (products.length === 0) redirect("/404");

  return (
    <>
      <Title title="Tienda" subtitle="Todos los productos" className="mb-2" />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </>
  );
}
