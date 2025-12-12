import { Home, Settings, BarChart } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white p-4 shadow-lg hidden md:block">
      <h2 className="text-xl font-bold mb-6">My Dashboard</h2>
      <ul className="space-y-4">
        <li className="flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer">
          <Home size={20} /> Home
        </li>
        <li className="flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer">
          <BarChart size={20} /> Analytics
        </li>
        <li className="flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer">
          <Settings size={20} /> Settings
        </li>
      </ul>
    </div>
  );
}
