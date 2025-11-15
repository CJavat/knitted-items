import { getProductBySlug } from "@/src/actions";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 604800; // 7 Días

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;

  const product = await getProductBySlug(slug);

  return {
    title: product?.title ?? "Producto no encontrado",
    description: product?.description ?? "",

    openGraph: {
      title: product?.title ?? "Producto no encontrado",
      description: product?.description ?? "",
      images: product?.images[0],
    },
  };
}

export default async function ProductSlugPage({ params }: Props) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div>
      <h1>Hello ProductSlugPage</h1>
      {/* 
        //TODO: TERMINAR PÁGINA
      */}
    </div>
  );
}
