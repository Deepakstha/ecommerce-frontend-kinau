// components/admin/Category/CategoryForm.tsx
import React, { useState } from "react";

interface CategoryFormProps {
  onSubmit: (data: CategoryData) => void;
  initialData?: { name: string };
}
interface CategoryData{
  name:string;
}

export default function CategoryForm({ onSubmit, initialData }: CategoryFormProps) {
  const [name, setName] = useState(initialData?.name || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-2xl shadow mb-6 space-y-4">
      <h2 className="text-xl font-semibold">Add / Edit Category</h2>

      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Save
      </button>
    </form>
  );
}
