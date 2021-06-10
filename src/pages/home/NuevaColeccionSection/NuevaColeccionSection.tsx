import React, { PropsWithoutRef } from "react";
import { Product } from "../../../shared/definitions/Product";
import ProductsGrid from "../../../shared/ProductsGrid/ProductsGrid";

export default function NuevaColeccionSection(
  props: PropsWithoutRef<{ products: Product[] }>
) {
  return (
    <div className="p-10">
      <ProductsGrid
        title="Nueva Colección"
        cols={3}
        products={props.products}
      />
    </div>
  );
}
