// components/admin/Product/ProductList.tsx
import React from "react";

const dummyProducts = [
  { id: 1, name: "T-Shirt", price: 1200, category: "Clothing" },
  { id: 2, name: "Shoes", price: 2500, category: "Footwear" },
];

export default function ProductList() {
  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Products</h2>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Add Product
        </button>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Category</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyProducts.map((p) => (
            <tr key={p.id} className="hover:bg-gray-50">
              <td className="p-2 border">{p.name}</td>
              <td className="p-2 border">NPR {p.price}</td>
              <td className="p-2 border">{p.category}</td>
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
