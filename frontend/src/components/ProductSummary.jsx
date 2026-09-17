import React from "react";

const ProductSummary = ({ image, result }) => {

  const compliance = result?.compliance || {};

  const totalDeclarations = Object.keys(compliance).length;

  const verifiedDeclarations = Object.values(compliance).filter(
    (status) => status === "PRESENT"
  ).length;

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

            {/* Product Name */}
            <h1 className="text-lg mt-2 font-bold leading-6 text-gray-900">
              Amul Taaza Toned Milk
            </h1>

            
            <p className="mt-3 text-sm font-medium text-green-600">
               {verifiedDeclarations} of {totalDeclarations} declarations verified
            </p>
            

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductSummary;