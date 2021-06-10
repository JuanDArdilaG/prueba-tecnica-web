import React, { PropsWithoutRef, useState } from "react";
import { Product } from "../../../definitions/Product";
import AddToCartButton from "../add_to_cart_button/AddToCartButton";

export default function ProductCard(
  props: PropsWithoutRef<{ product: Product }>
) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="flex flex-col px-1"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="border rounded flex flex-col bg-white">
        <img src={props.product.image} alt="Product" className="py-8 px-4" />
        {hover && (
          <div id="productcard-title" className="pl-2 pb-2">
            {props.product.name}
          </div>
        )}
      </div>

      {!hover && (
        <div id="productcard-title" className="pl-3 pt-1 pb-2">
          {props.product.name}
        </div>
      )}
      <AddToCartButton className={hover ? "" : "opacity-0"} />
    </div>
  );
}
