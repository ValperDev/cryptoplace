import React from 'react'
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1 className="hero__title">Largest Crypto Marketplace</h1>
        <p className="hero__description">Welcome to the world&apos;s largest cryptocurrency marketplace. Sign up to explore more about cryptos.</p>
        <form className="hero__form">
          <input className="hero__input" type="text" placeholder="Search crypto..."/>
          <button className="hero__button">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="crypto-table__layout">
          <p className="table-layout__column">#</p>
          <p className="table-layout__column">Coins</p>
          <p className="table-layout__column">Price</p>
          <p className="table-layout__column">24H Change</p>
          <p className="table-layout__column">Market Cap</p>
        </div>
      </div>
    </div>
  )
}

export default Home
