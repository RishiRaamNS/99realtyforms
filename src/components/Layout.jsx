import React from "react";
import Header from "./Header";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("./Footer"), {
  ssr: false,
});
function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
