// src/components/admin/Color/ColorForm.tsx
import React, { useState } from "react";

interface ColorData {
  name: string;
  hex: string;
}

interface ColorFormProps {
  onSubmit: (data: ColorData) => void;
  initialData?: ColorData;
}

export default function ColorForm({ onSubmit, initialData }: ColorFormProps) {
  const [name, setName] = useState(initialData?.name || "");
  const [hex, setHex] = useState(initialData?.hex || "#000000");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, hex });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-2xl shadow mb-6 space-y-4"
    >
      <h2 className="text-xl font-semibold">Add / Edit Color</h2>

      <div>
        <label className="block text-sm font-medium mb-1">Color Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
          placeholder="Enter color name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Color Hex</label>
        <input
          type="color"
          value={hex}
          onChange={(e) => setHex(e.target.value)}
          className="w-16 h-10 border rounded cursor-pointer"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </form>
  );
}
