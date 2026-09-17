import React from "react";
import { ScanLine } from "lucide-react";

const ProductSummary = ({ image }) => {
  return (
    <div className="flex gap-4 px-4 pt-5">

      {/* Product Image */}
      <div className="h-32 w-28 shrink-0 overflow-hidden rounded-2xl bg-gray-100">
        <img
          src={image}
          alt="Inspected product"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="min-w-0 flex-1">

        <div className="flex items-start justify-between gap-2">

          <div>
            <h1 className="text-lg font-bold leading-6 text-gray-900">
              Amul Taaza Toned Milk
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Amul
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductSummary;