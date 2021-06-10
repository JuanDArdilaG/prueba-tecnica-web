import React, { PropsWithoutRef } from "react";
import ProductCard from "./components/product_card/ProductCard";
import { Product } from "../definitions/Product";

import "./ProductsGrid.css";

export default function ProductsGrid(
  props: PropsWithoutRef<{ products: Product[]; title: string; cols: number }>
) {
  return (
    <>
      <h1 className="text-2xl text-center uppercase font-semibold py-3 text-blue">
        {props.title}
      </h1>
      <div className="flex">
        {props.products.map((prod) => {
          return <ProductCard product={prod} />;
        })}
      </div>
    </>
  );
}
