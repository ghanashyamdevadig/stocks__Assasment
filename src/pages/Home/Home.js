import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getStockData } from "../../redux/slices/stocks";
import StockCard from "../../components/stockcard/stockCard";
import "./Home.css";
import Header from "../../components/header/Header";
import Cart from "../../assets/shopping.png";
import { useNavigate } from "react-router-dom";
import News from "../../components/news/news";


export default function Home() {
    const navigate = useNavigate();
  const stock = useAppSelector((state) => state.stock.data);
  const [stockInfo, setStockInfo] = useState({});
  const [selectedStock, setSelectedStock] = useState({});
  const [isSuggestion, setIsSuggestion] = useState(true);


  useEffect(() => {
    setStockInfo(stock);
  }, [stock]);

  const dispatch = useAppDispatch();

  const searchStock = (event) => {
    setIsSuggestion(true);
    let searchTerm = event.target.value;
    console.log(searchTerm.toUpperCase());
    if(event.target.value.length>1){
        dispatch(getStockData(searchTerm.toUpperCase()));
       }
  };

  const navigator=()=>{
    navigate("/watchlist");
   }

   

  return (
    <div className="main__container">
        <div className="header__cart">
        <Header/>
       <div onClick={navigator}>
       <img className="cart" src={Cart} alt="Logo" />
       </div>
        </div>
        <div className="home"><h1>Home</h1></div>
      <input
        onChange={searchStock}
        className="search__bar"
        placeholder="Please enter stock name"
      />
      <div className="display__items">
      <div
        onClick={() => {
          setSelectedStock(stock);
          setIsSuggestion(false);
        }}
        className="details__div"
      >
        {isSuggestion && (
          <div>
            {Object.keys(stockInfo).includes("Meta Data") ? (
              <div
                className="api__data"
              >
                <div className="api__data__display">
                  <p className="symbol">{stockInfo["Meta Data"]["2. Symbol"]}</p>
                  <p>{stockInfo["Meta Data"]["1. Information"]}</p>
                </div>
              </div>
            ) : (
              <div>
                {(Object.keys(stockInfo).includes("Error Message") ||
                  Object.keys(stockInfo).includes("Note")) && (
                  <span>No Data Found!</span>
                )}
              </div>
            )}
          </div>
        )}
      </div>
      </div>
      
      {Object.keys(selectedStock).includes("Time Series (5min)") && (
        <StockCard
          selectedStock={
            Object.keys(selectedStock).includes("Time Series (5min)")
              ? selectedStock["Time Series (5min)"]
              : {}
          }
          stockName={stockInfo["Meta Data"]["2. Symbol"]}
        />
      
      )}

        <div style={{width:"100%"}}>
   <h2>Top stories</h2>
   <News/>
   </div>
      </div>
    );
  }
