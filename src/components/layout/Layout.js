import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <main className="bg-gray-100">{children}</main>
    </>
  );
}
