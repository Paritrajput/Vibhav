
import React from "react";
import Footer from "./Footer";
import STT from "../STT";
import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />

      <div className="bg-black bg-opacity-70">
        {/* PAGE CONTENT */}
        <div>
        {children}
        </div>
        <div className="relative">
        <Footer />
        </div>
        <STT />
      </div>
    </>
  );
}