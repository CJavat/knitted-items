import { Metadata, ResolvingMetadata } from "next";
import { Pagination, ProductGrid, Title } from "@/src/components";
import { getPaginatedProductsWithImages } from "@/src/actions";
import { textCapitalized } from "@/src/utils";

interface Props {
  params: Promise<{ category: string }>;
  searchParams: Promise<{
    page?: string;
  }>;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const category = (await params).category;

  return {
    title: `${textCapitalized(category)} | Categoría`,
    description: `Explora nuestra selección de productos en la categoría de ${textCapitalized(
      category
    )}.`,

    openGraph: {
      title: `${textCapitalized(category)} | Categoría`,
      description: `Explora nuestra selección de productos en la categoría de ${textCapitalized(
        category
      )}.`,
      images: ["/Knitted Items - Logo.png"],
    },
  };
}

export default async function CategoriesPage({ params, searchParams }: Props) {
  const { category } = await params;
  const page = (await searchParams).page
    ? parseInt((await searchParams).page ?? "")
    : 1;

  const { totalPages, products } = await getPaginatedProductsWithImages({
    page,
    category,
  });

  return (
    <>
      <Title
        title={textCapitalized(category)}
        subtitle={`Artículos Para ${textCapitalized(category)}`}
        className="mb-2"
      />

      {products.length === 0 ? (
        <p className="font-bold text-indigo-600">
          No hay artículos para mostrar...
        </p>
      ) : (
        <>
          <ProductGrid products={products} />
          <Pagination totalPages={totalPages} />
        </>
      )}
    </>
  );
}
