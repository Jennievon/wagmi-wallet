import React from "react";
import Header from "./Header";

const Layout: React.FC<any> = ({ children }) => {
  return (
    <div className="bg-light dark:bg-dark min-h-screen">
      <Header />
      <div className="container mx-auto p-4">{children}</div>
    </div>
  );
};

export default Layout;
