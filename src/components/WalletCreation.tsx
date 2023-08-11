import React from "react";
import Button from "./Button";

const WalletCreation: React.FC = () => {
  const handleCreateWallet = () => {
    // Implement wallet creation logic here
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Create New Wallet</h2>
      <Button onClick={handleCreateWallet}>Create Wallet</Button>
    </div>
  );
};

export default WalletCreation;
