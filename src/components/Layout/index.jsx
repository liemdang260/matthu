import React from "react";
// import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="bg-gray-600">
      <div className="max-w-lg h-[100vh] bg-white mx-auto">
        <Header />
        {children}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Layout;
