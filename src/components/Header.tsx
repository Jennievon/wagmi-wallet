import React from "react";
import DarkModeToggle from "./DarkModeToggle";

const Header: React.FC = () => {
  return (
    <header className="bg-light dark:bg-dark p-4 shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Ethereum Wallet App</h1>
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;
