import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4>Dashboard Layout </h4>
      {children}
    </div>
  );
}
