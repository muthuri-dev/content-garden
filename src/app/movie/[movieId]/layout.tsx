import React from "react";

export default function Movielayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3>Movies layout</h3>
      {children}
    </div>
  );
}
