import Sidebar from "@/components/common/Sidebar";

import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="mt-20">{children}</main>
      </div>
    </>
  );
};

export default DashboardLayout;
