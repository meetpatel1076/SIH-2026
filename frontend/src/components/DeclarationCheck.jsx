import React from "react";
import { Scale, Building2, CalendarDays, IndianRupee, FileText, Info, Check, } from "lucide-react";

const declarations = [
    {
        label: "Net Quantity",
        value: "1 L",
        
    },
    {
        label: "Manufacturer Details",
        value: "Amul (GCMMF)",
        
    },
    {
        label: "Mfg. / Exp. Date",
        value: "12 Jan 2025 / 12 Apr 2025",
        
    },
    {
        label: "MRP (Incl. of all taxes)",
        value: "₹ 56.00",
       
    },
    {
        label: "Consumer Care Details",
        value: "Present",
       
    },
    {
        label: "Other Declarations",
        value: "Present",
      
    },
];

const DeclarationCheck = () => {
    return (
        <div className="mx-3 mt-5">


            <div className="mb-3 flex items-center justify-between">

                <h2 className="text-lg font-bold text-gray-900">
                    Declaration Check
                </h2>

          
            </div>

            <div className="border border-gray-200 bg-white px-2">

                {declarations.map((item, index) => {

                   

                    return (
                        <div
                            key={item.label}
                            className={`flex items-center gap-3 py-4 ${index !== declarations.length - 1
                                    ? "border-b border-gray-100"
                                    : ""
                                }`}
                        >



                            <div className="min-w-0 flex-1">

                                <p className="text-sm font-medium text-gray-800">
                                    {item.label}
                                </p>

                                <p className="mt-1 text-xs text-gray-500">
                                    {item.value}
                                </p>

                            </div>



                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full ">
                                <Check
                                    size={17}
                                    strokeWidth={2.5}
                                    className="text-green-700"
                                />
                            </div>

                        </div>
                    );
                })}

            </div>

        </div>
    );
};

export default DeclarationCheck;