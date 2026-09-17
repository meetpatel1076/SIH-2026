import React from "react";
import {
  Scale,
  CalendarDays,
  IndianRupee,
  FileText,
  Check,
  X,
} from "lucide-react";

const declarations = [
  {
    label: "Net Quantity",
    field: "quantity",
  },
  {
    label: "Mfg. Date",
    field: "mfg",
  },
  {
    label: "Exp. Date",
    field: "expiryDate",
  },
  {
    label: "MRP (Incl. of all taxes)",
    field: "mrp",
  },
  {
    label: "Batch No.",
    field: "lotNo",
  },
  {
    label: "USP",
    field: "usp",
  },
];

const DeclarationCheck = ({ result }) => {

  const fields = result?.fields || {};
  const compliance = result?.compliance || {};

  return (
    <div className="mx-3 mt-5">

      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900">
          Declaration Check
        </h2>
      </div>

      <div className="border border-gray-200 bg-white px-2">

        {declarations.map((item, index) => {

          const fieldData = fields[item.field];

          const value = fieldData?.value || "Not detected";

          const status = compliance[item.field];

          const isPresent = status === "PRESENT";

          return (
            <div
              key={item.label}
              className={`flex items-center gap-3 py-4 ${
                index !== declarations.length - 1
                  ? "border-b border-gray-100"
                  : ""
              }`}
            >

              {/* ICON */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-50">
                <FileText
                  size={18}
                  className="text-gray-600"
                />
              </div>

              {/* LABEL + VALUE */}
              <div className="min-w-0 flex-1">

                <p className="text-sm font-medium text-gray-800">
                  {item.label}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  {value}
                </p>

              </div>

              {/* STATUS */}
              <div
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                  isPresent
                    ? "bg-green-100"
                    : "bg-red-100"
                }`}
              >
                {isPresent ? (
                  <Check
                    size={17}
                    strokeWidth={2.5}
                    className="text-green-700"
                  />
                ) : (
                  <X
                    size={17}
                    strokeWidth={2.5}
                    className="text-red-600"
                  />
                )}
              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
};

export default DeclarationCheck;