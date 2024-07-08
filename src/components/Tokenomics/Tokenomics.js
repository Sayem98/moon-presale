import React from "react";
import "./tokenomics.css";
import TokenomicsChart from "../../assets/Screenshot_2024-04-22_at_6.35.33_PM-removebg-preview.png";
import Logo from "../../assets/logo.png";

const Tokenomics = () => {
  return (
    <section id="tokenomics">
      <div className="w-full py-20 px-6">
        <h1 className="uppercase text-center md:text-5xl text-4xl mb-20 font-extrabold">
          TOKENOMICS
        </h1>
        <div className="max-w-[1100px] w-full mx-auto flex items-center gap-10 resposive-design">
          <div className="box w-[500px] border-4 border-[#1b3083f5] ml-4 rounded-lg relative px-4 py-3">
            <img
              src={Logo}
              alt="logo"
              className="h-20 w-20 absolute -top-10 -left-10"
            />
            <h4 className="text-center font-extrabold text-lg">
              Token Information
            </h4>
            <p className="text-[#524e4ef1] text-base font-semibold">
              Moon Meme coin tokenomics include smart staking rewards, meaning you
              can earn right away.
            </p>
            <ul className="py-3 pl-4">
              <li className="list-disc">40% WE SELL IN PRESALE</li>
              <li className="list-disc">25% FOR MARKETING </li>
              <li className="list-disc">15% FOR STAKING</li>
              <li className="list-disc">10% FOR DEX LIQUIDITY
              </li>
              <li className="list-disc">10% TREASURY (FOR LONG TERM SUSTAINABILITY AND DEVELOPMENT)</li>
            </ul>
            <p className="word">
              Moon Meme coin Token Address:
              0x06909176495aA7cA47a02aea4Ec9D034BA498eeC
              {/* 0x2541A36BE4cD39286ED61a3E6AFC2307602489d6 */}
            </p>
          </div>
          <div className="flex-1 flex gap-10 items-center chart">
            <img
              src={TokenomicsChart}
              alt="logo"
              className=" flex justify-center items-center w-96"
            />
            <div className="flex flex-col items-baseline data">
              <div className="flex items-center mb-3">
                <span className="bg-red-500 mr-3 lg:mr-2 w-3 h-3 rounded-full"></span>
                <div class="">
                  <h4 class="text-[#5572f4] font-bold">PRESALE
                  </h4>
                  <p class="text-black">40%</p>
                </div>
              </div>
              <div className="flex items-center mb-3">
                <span className="bg-red-500 mr-3 lg:mr-2 w-3 h-3 rounded-full"></span>
                <div class="">
                  <h4 class="text-[#5572f4] font-bold">MARKETING
                  </h4>
                  <p class="text-black">25%</p>
                </div>
              </div>
              <div className="flex items-center mb-3">
                <span className="bg-red-500 mr-3 lg:mr-2 w-3 h-3 rounded-full"></span>
                <div class="">
                  <h4 class="text-[#5572f4] font-bold">STAKING
                  </h4>
                  <p class="text-black">15%</p>
                </div>
              </div>
              <div className="flex items-center mb-3">
                <span className="bg-red-500 mr-3 lg:mr-2 w-3 h-3 rounded-full"></span>
                <div class="">
                  <h4 class="text-[#5572f4] font-bold">DEX LIQUIDITY
                  </h4>
                  <p class="text-black">10%</p>
                </div>
              </div>
              <div className="flex items-center mb-3">
                <span className="bg-red-500 mr-3 lg:mr-2 w-3 h-3 rounded-full"></span>
                <div class="w-full">
                  <h4 class="text-[#5572f4] font-bold">TREASURY (FOR LONG TERM SUSTAINABILITY AND DEVELOPMENT)</h4>
                  <p class="text-black">10%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
