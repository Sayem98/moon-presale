import React, { useState, useEffect } from "react";
import "./hero.css";
import ETH from "../../assets/ETH.svg";
import USDT from "../../assets/usdt.svg";
import Logo from "../../assets/logo.png";
import BUSD from "../../assets/busd.svg";
import useContract from "../../hooks/useContract";
import { PER_USDT_TO_BNB } from "../../contracts/contracts";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import toast from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";
import KYCModal from "../KYCModal/KYCModal";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "white",
};

const Hero = () => {
  // Set the target date and time for countdown

  const [value, setValue] = useState(0);
  const [receive, setReceive] = useState(0);
  const [paymentType, setPaymentType] = useState("ETH");
  const [balance, setBalance] = useState(0);
  const [maxBalance, setMaxBalance] = useState(null);
  const [price, setPrice] = useState(1);
  const [isWhitelist, setIsWhitelist] = useState(false);

  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");
  const [modal, setModal] = useState(false);

  const { buy, myTokenBalance, maxBalances, getPrice, isWhitelisted } =
    useContract();
  const { address, isConnected } = useWeb3ModalAccount();

  useEffect(() => {
    const _getPrice = async () => {
      const _price = await getPrice();
      console.log(_price);
      setPrice(_price);
      const _isWhitelist = await isWhitelisted(address);
      setIsWhitelist(_isWhitelist);
      console.log(_isWhitelist);
    };

    if (isConnected) _getPrice();
  }, [isConnected]);

  useEffect(() => {
    if (!isConnected) {
      toast("Connect your wallet first !");
      return;
    }
    if (paymentType === "ETH") {
      setReceive(value * price * PER_USDT_TO_BNB);
    } else if (paymentType === "USDT") {
      setReceive(value * price);
    } else if (paymentType === "USDC") {
      setReceive(value * price);
    } else {
      console.log(paymentType);
    }
  }, [value, paymentType]);

  useEffect(() => {
    const _balance = async () => {
      const _myBalance = await myTokenBalance();
      console.log(_myBalance);
      setBalance(_myBalance);
      const _maxBalance = await maxBalances();
      console.log(_maxBalance);
      setMaxBalance(_maxBalance);
    };
    if (isConnected) _balance();
  }, [address]);

  const handleBuy = async () => {
    setLoading(true);
    if (paymentType == "ETH") {
      if (value > maxBalance.eth) {
        toast.error("Not enough eth balance");
        setLoading(false);
        return;
      }
    } else if (paymentType == "USDT") {
      if (value > maxBalance.usdt) {
        toast.error("Not enough USDT balance");
        setLoading(false);
        return;
      }
    } else if (paymentType == "USDC") {
      if (value > maxBalance.busd) {
        toast.error("Not enough BUSD balance");
        setLoading(false);
        return;
      }
    }
    try {
      await buy(paymentType, value);
      toast.success("Buy Sucessful");
    } catch (err) {
      console.log(err);
      toast.error("Error is Buying");
    }
    setLoading(false);
  };

  const calculateTimeLeft = () => {
    const difference = +new Date("2024-05-10") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <section id="buy">
      <div>
        <div className="bg-img w-full py-36">
          <div className="w-full flex justify-between items-center px-2 max-w-[1200px]  md:mx-[-250px]">
            <div></div>
            <div
              className="bg-[#0b274bf3] text-white rounded-xl p-3 w-full max-w-[450px] border-2 border-[#Aa5133]"
              id="buy"
            >
              <h1 className="text-center text-xl ">Presale Will start</h1>
              <div className="rounded-xl flex text-center justify-between items-center px-8 my-3 gap-2 w-full h-16 bg-[#1b3083f5]">
                <div className="countdown-timer flex items-center justify-between w-full">
                  <div className="flex flex-col">
                    <span>{timeLeft.days}</span>
                    <span>DAY{timeLeft.days !== 1 ? "S" : ""}</span>
                  </div>
                  <div className="flex flex-col">
                    <span>{timeLeft.hours}</span>
                    <span>HRS</span>
                  </div>
                  <div className="flex flex-col">
                    <span>{timeLeft.minutes}</span>
                    <span>MINS</span>
                  </div>
                  <div className="flex flex-col">
                    <span>{timeLeft.seconds}</span>
                    <span>SEC</span>
                  </div>
                </div>
              </div>
              <p className="text-center py-2 font-bold ">
                Till Moon Meme coin claim and launch
              </p>
              {/* <p className="text-center text-[#cfcaca] font-medium">
                Over $10M raised!
              </p> */}
              <p className="text-center text-[#cfcaca] font-medium py-2">
                Your purchased Moon Meme coin = {balance}
              </p>

              <p className="relative text-center mt-2 lines-lr">
                {/* 1 Moon Meme coin = ${Number(1 / price).toFixed(4)} */}1 Moon
                Meme coin = $0.00044
              </p>
              {/* Select Buttons */}
              <div className="flex sm:flex-row gap-4 flex-col justify-center items-center py-4">
                <button
                  className={`flex justify-center items-center gap-3 ${
                    paymentType == "ETH" ? "border border-white" : ""
                  } w-full sm:w-[120px] h-[50px] rounded-lg font-bold text-white text-base`}
                  onClick={() => setPaymentType("ETH")}
                >
                  <img src={ETH} alt="ETH" className="h-8" /> ETH
                </button>

                <button
                  className={`flex justify-center items-center gap-3 ${
                    paymentType == "USDC" ? "border border-white" : ""
                  } w-full sm:w-[120px] h-[50px] rounded-lg font-bold text-white text-base`}
                  onClick={() => setPaymentType("USDC")}
                >
                  <img
                    src={BUSD}
                    alt="ETH"
                    className="h-10 ml-[-15px] md:ml-0"
                  />
                  <p className="ml-[-15px]">USDC</p>
                </button>
              </div>
              {/* Data Show */}
              <div className="w-full flex sm:flex-row flex-col items-center gap-4 pt-4 pb-8">
                <div className="flex-1 flex flex-col gap-2 items-start">
                  <div className="flex items-center justify-between w-full">
                    <h3>Pay with {paymentType}</h3>
                    <h3>MAX</h3>
                  </div>
                  <div className="flex items-center border border-white bg-white rounded-lg px-3 py-1">
                    <input
                      type="text"
                      placeholder="0"
                      className="text-lg bg-transparent outline-none w-full sm:w-[150px] text-black"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                    <img
                      src={
                        paymentType === "ETH"
                          ? ETH
                          : paymentType === "USDT"
                          ? USDT
                          : BUSD
                      }
                      alt="logo"
                      className="h-8 w-8"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-2 items-start">
                  <h3>Receive Moon Meme coin</h3>
                  <div className="flex items-center border border-white bg-white rounded-lg px-3 py-1">
                    <input
                      type="text"
                      placeholder="0"
                      className="text-lg bg-transparent outline-none w-full sm:w-[150px] text-black"
                      value={receive}
                    />
                    <img src={Logo} alt="logo" className="h-8 w-8" />
                  </div>
                </div>
              </div>
              {/* Buttons */}
              <button
                className="buy-now-btn my-2"
                onClick={
                  isWhitelist ? handleBuy : () => setModal((prev) => !prev)
                }
              >
                {loading ? (
                  <ClipLoader
                    color={color}
                    loading={loading}
                    cssOverride={override}
                    size={30}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                ) : (
                  "Buy Now"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <KYCModal modal={modal} setModal={setModal} />
    </section>
  );
};

export default Hero;
