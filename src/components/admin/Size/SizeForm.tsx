// components/admin/Size/SizeForm.tsx
import React, { useState } from "react";

interface SizeFormProps {
  onSubmit: (data: SizeForm) => void;
  initialData?: { name: string };
}
interface SizeForm {
  name:string;
}

export default function SizeForm({ onSubmit, initialData }: SizeFormProps) {
  const [name, setName] = useState(initialData?.name || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-2xl shadow mb-6 space-y-4">
      <h2 className="text-xl font-semibold">Add / Edit Size</h2>

      <div>
        <label className="block text-sm font-medium mb-1">Size</label>
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
