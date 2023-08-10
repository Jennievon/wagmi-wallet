import React from "react";

const Layout: React.FC<any> = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">{children}</div>
    </div>
  );
};

export default Layout;
