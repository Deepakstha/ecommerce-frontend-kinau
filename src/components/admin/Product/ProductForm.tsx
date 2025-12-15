// components/admin/Product/ProductForm.tsx
import React, { useState } from "react";

interface ProductFormProps {
  onSubmit: (data:ProductData) => void;
  initialData?: { name: string; price: number; category: string };
}
interface ProductData {
  name: string;
  price: number;
  category: string;
}

export default function ProductForm({ onSubmit, initialData }: ProductFormProps) {
  const [name, setName] = useState(initialData?.name || "");
  const [price, setPrice] = useState(initialData?.price || 0);
  const [category, setCategory] = useState(initialData?.category || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, price, category });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-2xl shadow mb-6 space-y-4">
      <h2 className="text-xl font-semibold">Add / Edit Product</h2>

      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Save
      </button>
    </form>
  );
}
