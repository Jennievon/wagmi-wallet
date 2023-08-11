import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const SendETH: React.FC = () => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  const handleSendETH = () => {
    // Implement ETH sending logic here
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Send ETH</h2>
      <Input
        placeholder="Recipient Address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <Input
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button onClick={handleSendETH}>Send</Button>
    </div>
  );
};

export default SendETH;
