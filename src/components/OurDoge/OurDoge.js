import React from "react";
import "./ourdoge.css";
import Line from "../../assets/line.svg";
import Logo from "../../assets/logo.png";
import pdfFile from "./../../assets/MOON MEME COIN (6).pdf";
const OurDoge = () => {
  const handlePdfClick = () => {
    window.open(pdfFile, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <section id="about">
        <div className="w-full max-w-[1200px] mx-auto py-20 px-6">
          <h1 className="text-center uppercase md:text-5xl sm:text-3xl text-2xl font-bold">
            Experience the New Rewards with Moon Meme Coin{" "}
          </h1>
          <img
            src={Line}
            alt="Line-img"
            className="flex items-center justify-center mx-auto mt-2"
          />
          <p className="text-center sm:text-lg text-sm w-full max-w-[1100px] mx-auto mt-7 font-medium text-[#161616e4]">
            {/* Prepare for the ultimate Doge upgrade! We're sending Elon's fave
          towards a more sustainable future. Stake Moon Meme coin today to start
          earning eco-friendly rewards. */}
            Get ready for the cosmic upgrade of Moon Meme Coin! Join us as we
            propel our favorite meme token to new heights on the Base Chain,
            driving towards a greener future. Stake Moon Meme Coin today to
            embark on a journey of eco-conscious rewards and sustainable growth
          </p>
          <div className="flex justify-center items-center sm:gap-4 gap-2 mt-8">
            <button className="btn" onClick={handlePdfClick}>
              Whitepaper
            </button>
            {/* <button className="btn-audit">AUDIT</button> */}
          </div>
        </div>
        <div className="bg-[#e4e4e4] my-14">
          <div className="w-full max-w-[1200px] mx-auto py-16 flex flex-wrap items-center gap-10 md:justify-start justify-center">
            <a
              href="https://coinmarketcap.com/currencies/moon-meme-coin/"
              target="_blank"
            >
              <img src="/logo1.svg" className="w-64" alt="" />
            </a>
            <a
              href="https://coindiscovery.app/coin/moon-meme-coin/overview"
              target="_blank"
            >
              <img src="/logo2.png" className="w-64" alt="" />
            </a>
            <a
              href="https://coinbazooka.com/coin/moon-meme-coin"
              target="_blank"
            >
              <img src="/logo3.png" className="w-64" alt="" />
            </a>
            <a
              href="https://fomospider.com/coin/Moon-Meme-Coin"
              target="_blank"
            >
              <img src="/logo4.png" alt="" />
            </a>
            <a href="https://coinsniper.net/coin/65951" target="_blank">
              <img src="/logo5.png" className="w-64" alt="" />
            </a>
            <a href="https://www.coinscope.co/coin/3-mmc" target="_blank">
              <img src="/logo6.svg" className="w-64 h-20" alt="" />
            </a>
            <a
              href="https://coinmoonhunt.com/coin/Moon%20Meme%20Coin"
              target="_blank"
            >
              <img src="/logo7.png" className="w-64" alt="" />
            </a>
            <a
              href="https://icolink.com/ico-moon-meme-coin.html"
              target="_blank"
            >
              <img src="/logo8.gif" alt="" />
            </a>
          </div>
        </div>
        <div className="w-full max-w-[1200px] mx-auto py-20 px-6">
          <div className="flex flex-col gap-16 justify-center items-center mt-14 lg:mt-8">
            <div className="flex md:flex-row flex-col gap-4 items-center">
              <div className="flex-1">
                <img src={Logo} alt="Logo" />
              </div>
              <div className="flex-1">
                <h1 className="md:text-5xl sm:text-3xl text-2xl font-extrabold mb-5 uppercase">
                  rocket boy staking{" "}
                </h1>
                <p className="mb-5 sm:text-lg text-sm text-[#5c5a5ad1] font-medium">
                  Empowered by Base Chain's smart contracts, Moon Meme Coin
                  transcends mere meme status, offering passive earning
                  opportunities. Stake your Moon Meme tokens to unlock rewards
                  and let your assets work for you
                  {/* Utilising smart contracts powered by Ethereum, Moon Meme coin is
                much more than a meme coin and brings passive earning potential
                to the community. Harness the power of your Moon Meme coin
                tokens by staking and earning rewards, making your tokens work
                for you. */}
                </p>
                {/* <button className="btn-audit uppercase">Buy now</button> */}
              </div>
            </div>

            <div className="flex md:flex-row flex-col-reverse gap-4 items-center">
              <div className="flex-1">
                <h1 className="md:text-5xl sm:text-3xl text-2xl font-extrabold mb-5 uppercase">
                  CONVENIENT WALLET!
                </h1>
                <p className="mb-5 sm:text-lg text-sm text-[#5c5a5ad1] font-medium">
                  {/* There’s no need to worry about complicated wallets and custody
                of your tokens. Moon Meme coin is built on Ethereum, meaning you
                automatically gain more flexibility with your ERC-20 tokens. Use
                what you already have. */}
                  No need for complex wallets or custody concerns. With Moon
                  Meme Coin on Base Chain network, enjoy seamless flexibility
                  with your tokens. Simply leverage what you already hold
                </p>
                {/* <button className="btn-audit uppercase">Buy now</button> */}
              </div>
              <div className="flex-1">
                <img src={Logo} alt="Logo" />
              </div>
            </div>

            <div className="flex md:flex-row flex-col gap-4 items-center">
              <div className="flex-1">
                <img src={Logo} alt="Logo" />
              </div>
              <div className="flex-1">
                <h1 className="md:text-5xl sm:text-3xl text-2xl font-extrabold mb-5 uppercase">
                  {/* NO MORE INFLATION! */}A Deflationary Revolution!
                </h1>
                <p className="mb-5 sm:text-lg text-sm text-[#5c5a5ad1] font-medium">
                  Breaking the Chains of Inflation! Moon Meme Coin resolves this
                  with a fixed supply, unlocking unrestricted upward pressure on
                  token price Moon Meme Coin presents a fresh passive rewards
                  opportunity in the meme coin realm, poised for potential token
                  price appreciation. With a fully diluted starting market cap,
                  Moon Meme Coin offers enticing growth prospects
                  {/* Dogecoin is a beloved token but has been limited in its
                potential future worth because it has an infinite supply that
                will always emit more tokens into the market. Moon Meme coin
                fixes this with a fixed supply, allowing for unhindered upwards
                pressure on the token price. */}
                </p>
                {/* <button className="btn-audit uppercase">Buy now</button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurDoge;
