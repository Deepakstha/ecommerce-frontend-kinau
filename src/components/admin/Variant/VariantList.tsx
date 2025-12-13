// components/admin/Variant/VariantList.tsx
import React from "react";

const dummyVariants = [
  { id: 1, product: "T-Shirt", color: "Red", size: "M", stock: 50 },
  { id: 2, product: "Shoes", color: "Black", size: "42", stock: 30 },
];

export default function VariantList() {
  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Variants</h2>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Add Variant
        </button>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Product</th>
            <th className="p-2 border">Color</th>
            <th className="p-2 border">Size</th>
            <th className="p-2 border">Stock</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyVariants.map((v) => (
            <tr key={v.id} className="hover:bg-gray-50">
              <td className="p-2 border">{v.product}</td>
              <td className="p-2 border">{v.color}</td>
              <td className="p-2 border">{v.size}</td>
              <td className="p-2 border">{v.stock}</td>
              <td className="p-2 border space-x-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
