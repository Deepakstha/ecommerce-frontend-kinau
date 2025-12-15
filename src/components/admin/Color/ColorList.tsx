// components/admin/Color/ColorList.tsx
import React from "react";

const dummyColors = [
  { id: 1, name: "Red" },
  { id: 2, name: "Blue" },
  { id: 3, name: "Black" },
];

export default function ColorList() {
  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Colors</h2>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Add Color
        </button>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyColors.map((c) => (
            <tr key={c.id} className="hover:bg-gray-50">
              <td className="p-2 border">{c.name}</td>
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
