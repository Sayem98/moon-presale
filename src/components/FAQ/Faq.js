import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

import { FaArrowDown } from "react-icons/fa";

const Faq = () => {
  const faqData = [
    {
      question: "How is Moon meme coin  different from other memecoins",
      answer:
        "Moon Meme Coin distinguishes itself from Meme coin by its deflationary model, fixed token supply, and integration with the Base Chain, offering a more sustainable and potentially lucrative investment opportunity",
    },
    {
      question: "How will Moon Meme Coin facilitate staking?",
      answer:
        "Staking with Moon Meme Coin will be facilitated through smart contracts on the Base Chain, allowing holders to lock up their tokens and earn rewards in return for helping to secure the network and maintain its stability.",
    },
    {
      question: "Does Moon Meme Coin offer other features?",
      answer:
        "Besides staking, Moon Meme Coin may incorporate additional features such as governance voting, decentralized finance (DeFi) integrations, and community-driven initiatives to enhance utility and engagement within the ecosystem.   ",
    },
    {
      question: "What are the tokenomics of Moon Meme Coin?     ",
      answer:
        " The tokenomics of Moon Meme Coin include details such as its total token supply, distribution mechanism, token allocation for development and marketing, staking rewards structure, and any mechanisms in place to ensure price stability and long-term sustainability of the project.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section id="faq">
      <div className="px-2 py-10 ">
        <h1 className="md:text-5xl text-3xl text-center font-extrabold">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <div className="max-w-[1000px] w-full mx-auto flex flex-col space-y-2 py-10">
          {faqData.map((item, index) => (
            <div key={index} className="p-3 rounded-lg">
              <h2
                className="text-lg font-semibold cursor-pointer flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                {activeIndex === index ? (
                  <FaArrowUp className="" />
                ) : (
                  <FaArrowDown />
                )}
              </h2>
              <p
                className={`text-gray-700 mt-2 ${activeIndex === index ? "block" : "hidden"
                  }`}
              >
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
