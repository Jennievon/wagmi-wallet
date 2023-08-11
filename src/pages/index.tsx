import React from "react";
import WalletCreation from "../components/WalletCreation";
import SendETH from "../components/SendETH";
import SmartContractInteraction from "../components/SmartContractInteraction";
import Layout from "@/components/Layout";

const Home: React.FC = () => {
  return (
    <Layout>
      <h1>Ethereum Wallet App</h1>
      <WalletCreation />
      <SendETH />
      <SmartContractInteraction />
    </Layout>
  );
};

export default Home;
