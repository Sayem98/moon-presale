import React from "react";
import "./rewardscalculator.css";
import Logo from "../../assets/logo.png";

const RewardsCalculator = () => {
  return (
    <div className="w-full px-2 pb-10 max-w-[1200px] mx-auto">
      {/* <h1 className="uppercase text-center md:text-5xl text-4xl font-extrabold">
        REWARDS CALCULATOR
      </h1>
      <p className="text-[#5a5959] text-center max-w-[1200px] w-full mx-auto my-6 md:text-lg text-base font-medium">
        Dogecoin20 offers a new passive rewards opportunity to the meme coin
        scene but could also benefit from token price appreciation. Moon Meme
        coin has a fully diluted starting market cap nearly 900 times cheaper
        than the original Dogecoin.
      </p> */}
      <div className="w-full flex md:flex-row flex-col justify-between items-center px-2 gap-10 pt-7">
        <div className="flex-1">
          <h1 className="md:text-4xl text-2xl font-bold pb-4 text-center">READY TO BUY?</h1>
          <p className="text-[#4d4b4b] text-lg font-medium">
            {/* All you need to buy Moon Meme coin tokens at the lowest presale
            price is a decentralised wallet containing ETH, BNB, or USDT. Simply
            connect to the widget above to swap tokens! */}
            All you need to buy Moon Meme coin tokens at the lowest presale price is a decentralised wallet containing Eth, USDT, USDC. Simply connect to the widget above to swap tokens!

          </p>
          <div className="flex justify-center">
            <a href="#buy">
              <button className="btn-audit mt-6">BUY NOW</button>

            </a>
          </div>
        </div>
        {/* <div className="flex-1 border-4 border-[#1b3083f5] rounded-lg relative px-4 py-3">
          <h4 className="text-center font-extrabold text-lg mb-2">
            Returns Calculator
          </h4>
          <p className="text-[#524e4ef1] text-base font-semibold text-center">
            Input the amount of Moon Meme coin you’re purchasing, and see what
            it would be worth at different prices.
          </p>
          <div className="w-full pt-4">
            <div className="flex justify-between ">
              <h3 className="text-sm font-semibold">IF I BUY</h3>
              <h3 className="text-sm font-semibold">($0)</h3>
            </div>
            <div className="flex items-center w-full justify-between border border-black px-3 rounded-lg my-3">
              <input
                type="text"
                placeholder="0"
                className="text-lg outline-none w-full"
              />
              <img src={Logo} alt="logo" className="h-14 w-14" />
            </div>
            <div>
              <p className="text-[#1b3083f5] text-xs font-bold">
                And the token price reaches: $0.00028
              </p>
              <input type="range" className="w-full h-10 " />
            </div>
            <div className="flex items-center gap-4 justify-between text-[#1b3083f5] text-xl font-bold">
              <h3>Your $Moon Meme coin would be worth</h3>
              <h3 className="">$0</h3>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default RewardsCalculator;
