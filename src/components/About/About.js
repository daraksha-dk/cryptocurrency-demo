import React from "react";
import "./About.scss";

const Data = {
  bit: {
    name: "Bitcoin",
    symbol: "BTC",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9TYO0R53dCCisXh18pWxuSXKe1UENcSeAPym4ymd1C_lV2taGocTQW4-pRtuEadLm0bw&usqp=CAU",
    rank: "1",
    text: "Bitcoin is a decentralized digital currency created in January 2009. All Bitcoin transactions are verified by a massive amount of computing power via a process known as mining. Bitcoin is not issued or backed by any banks or governments, nor is an individual bitcoin valuable as a commodity.",
  },
  eth: {
    name: "Ethereum",
    symbol: "ETH",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png",
    rank: "2",
    text: "Ethereum is a platform powered by blockchain technology that is best known for its native cryptocurrency, called Ether, or ETH, or simply Ethereum",
  },
  rip: {
    name: "Ripple",
    symbol: "XRP",
    icon: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX30264625.jpg",
    rank: "3",
    text: "Ripple works on an open-source and peer-to-peer decentralized platform that helps in easily transferring various forms of fiat money, be it pound, dollars or rupees, or cryptocurrencies, like Ether or Bitcoin .",
  },
  cash: {
    name: "Bitcoin Cash",
    symbol: "BCH",
    icon: "https://www.cryptoiqtrading.com/wp-content/uploads/2019/01/BCH-logo.png",
    rank: "4",
    text: "Bitcoin cash is a cryptocurrency created in August 2017, from a fork of Bitcoin. 1﻿ Bitcoin Cash increased the size of blocks, allowing more transactions to be processed and improving scalability.",
  },
  lit: {
    name: "Litecoin",
    symbol: "LTC",
    icon: "https://preview.redd.it/swd3shkgkjc21.jpg?width=256&format=pjpg&auto=webp&s=b663ff129d7744d84da9b0cfdb0fb21eef94fc04",
    rank: "5",
    text: "Litecoin Cash (LCC) is a cryptocurrency forked from Litecoin Coin. Users are able to generate LCC through the process of mining: both SHA256 and Hive Mining, an agent-based mining system, which requires no specialized hardware: anything from a Raspberry Pi to your normal desktop PC is fine.",
  },
  eos: {
    name: "EOS",
    symbol: "EOS",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYV9Vw1UKBsJt6oZKL9JtXoEttTO-6Db_wD-CxKo6GHzifaBrr0xdYdMAsjWsPqF_7SHQ&usqp=CAU",
    rank: "6",
    text: "EOS supports core functionality that allows businesses and individuals to create blockchain-based applications in a way that is similar to web-based applications. EOS provides secure access and authentication, permissions, data hosting, usage management, and communication between dApps and the Internet.",
  },
};

const About = ({ bit, eth, cash, lit, eos, rip }) => {
  return (
    <div className="about">
      <div className="up-row">
        <div id="one">
          <div className="about-img">
            <img src={Data.bit.icon} alt={Data.bit.name} className="bit" />
          </div>
          <div className="about-text">
            <h1>{Data.bit.name}</h1>
            <p>{Data.bit.text} </p>
          </div>
        </div>
        <div id="one">
          <div className="about-img">
            <img src={Data.eth.icon} alt={Data.eth.name} className="eth" />
          </div>
          <div className="about-text">
            <h1>{Data.eth.name}</h1>
            <p>{Data.eth.text} </p>
          </div>
        </div>
        <div id="one">
          <div className="about-img">
            <img src={Data.rip.icon} alt={Data.rip.name} className="rip" />
          </div>
          <div className="about-text">
            <h1>{Data.rip.name}</h1>
            <p>{Data.rip.text} </p>
          </div>
        </div>
      </div>
      <div className="down-row">
        <div id="one">
          <div className="about-img">
            <img src={Data.cash.icon} alt={Data.cash.name} className="cash" />
          </div>
          <div className="about-text">
            <h1>{Data.cash.name}</h1>
            <p>{Data.cash.text} </p>
          </div>
        </div>
        <div id="one">
          <div className="about-img">
            <img src={Data.lit.icon} alt={Data.lit.name} className="lit" />
          </div>
          <div className="about-text">
            <h1>{Data.lit.name}</h1>
            <p>{Data.lit.text} </p>
          </div>
        </div>
        <div id="one">
          <div className="about-img">
            <img src={Data.eos.icon} alt={Data.eos.name} className="eos" />
          </div>
          <div className="about-text">
            <h1>{Data.eos.name}</h1>
            <p>{Data.eos.text} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
