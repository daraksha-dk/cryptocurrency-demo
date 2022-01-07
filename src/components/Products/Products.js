import React from "react";
import "./Products.scss";

const Products = () => {
  return (
    <div className="product">
      <div className="product-image"></div>
      <div className="product-text">
        <h2 className="title">How to Use Bitcoin</h2>
        <p className="para">
          Big companies that accept Bitcoin include Microsoft, PayPal and Whole
          Foods, to name only a few. You may also find that some small local
          retailers or certain websites take Bitcoin, but you’ll have to do some
          digging. You can also use a service that allows you to connect a debit
          card to your crypto account, meaning you can use Bitcoin the same way
          you’d use a credit card. This also generally involves a financial
          provider instantly converting your Bitcoin into dollars. “Crypto.com
          and CoinZoom are two services that have regulation in the U.S.,”
          Montgomery says. In other countries—particularly those with less
          stable currencies—people sometimes use cryptocurrency instead of their
          own currency. “Bitcoin provides an opportunity for people to store
          value without relying on a currency that is backed by a government,”
          Montgomery says. “It gives people an option to hedge for a worst-case
          scenario. You’re already seeing people in countries like Venezuela,
          Argentina, Zimbabwe—in countries heavily in debt, Bitcoin is getting
          tremendous traction.”
        </p>
      </div>
    </div>
  );
};

export default Products;
