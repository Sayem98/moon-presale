import "./App.css";
import Faq from "./components/FAQ/Faq";
import FeaturedIn from "./components/FeaturedIn/FeaturedIn";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import OurDoge from "./components/OurDoge/OurDoge";
import RewardsCalculator from "./components/RewardsCalculator/RewardsCalculator";
// import Roadmap from './components/Roadmap/Roadmap';
import Tokenomics from "./components/Tokenomics/Tokenomics";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ComingSoon from "./components/comingSoon";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import ClientLayout from "./components/Layouts/ClientLayout";
// 1. Get projectId
const projectId = "070227f9f4e0ff35986bff05a3463bc0";

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://cloudflare-eth.com",
};

// 3. Create a metadata object
const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

const sepolia = {
  chainId: 11155111,
  name: "Sepolia",
  currency: "ETH",
  explorerUrl: "https://rpc.sepolia.org",
  rpcUrl: "https://1rpc.io/sepolia",
};

const base = {
  chainId: 8453,
  name: "BASE",
  currency: "ETH",
  explorerUrl: "https://basescan.org/",
  rpcUrl: "https://mainnet.base.org",
};

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,
});

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [base],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route
            path="/"
            element={
              <ClientLayout>
                <Hero />
                <OurDoge />
                {/* <FeaturedIn /> */}
                <Tokenomics />
                <RewardsCalculator />
                <Faq />
                <Toaster />
              </ClientLayout>
            }
          />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route
            path="/staking"
            element={
              <ClientLayout>
                <ComingSoon />
              </ClientLayout>
            }
          />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
