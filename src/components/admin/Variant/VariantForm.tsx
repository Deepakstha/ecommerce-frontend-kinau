// components/admin/Variant/VariantForm.tsx
import React, { useState } from "react";

interface VariantFormProps {
  onSubmit: (data: VariantData) => void;
  initialData?: { product: string; color: string; size: string; stock: number };
}
interface VariantData {
  product:string;
  color:string;
  size:string;
  stock:number;
}

export default function VariantForm({ onSubmit, initialData }: VariantFormProps) {
  const [product, setProduct] = useState(initialData?.product || "");
  const [color, setColor] = useState(initialData?.color || "");
  const [size, setSize] = useState(initialData?.size || "");
  const [stock, setStock] = useState(initialData?.stock || 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ product, color, size, stock });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-2xl shadow mb-6 space-y-4">
      <h2 className="text-xl font-semibold">Add / Edit Variant</h2>

      <div>
        <label className="block text-sm font-medium mb-1">Product</label>
        <input
          type="text"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Color</label>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Size</label>
        <input
          type="text"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Stock</label>
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(Number(e.target.value))}
          className="w-full border p-2 rounded"
        />
      </div>

      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Save
      </button>
    </form>
  );
}
