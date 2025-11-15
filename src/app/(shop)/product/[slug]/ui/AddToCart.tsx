"use client";

import { useState } from "react";
import type { CartProduct, Product } from "@/src/interfaces";
import { QuantitySelector } from "@/src/components";

interface Props {
  product: Product;
}

export const AddToCart = ({ product }: Props) => {
  //TODO: Agregar un store para los productos en el carrito.

  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState<boolean>(false);

  const addToCart = async () => {
    setPosted(true);

    const cartProduct: CartProduct = {
      id: product.id,
      title: product.title,
      slug: product.slug,
      price: product.price,
      quantity: quantity,
      image: product.images[0],
    };

    //store Zustand -> addProductToCart(cartProduct);

    setPosted(false);
    setQuantity(1);
  };

  return (
    <>
      {posted && (
        <span className="mt-2 text-red-500 fade-in">posted en true...</span>
      )}

      {/* Selector de cantidad */}
      <QuantitySelector quantity={quantity} onQuantityChanged={setQuantity} />

      {/* Botón */}
      <button onClick={addToCart} className="btn-primary my-5">
        Agregar al carrito
      </button>
    </>
  );
};
