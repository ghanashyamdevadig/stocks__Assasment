import React, { useState,useEffect} from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getStockData } from "../../redux/slices/stocks";
import StockCard from "../../components/stockcard/stockCard";
import "./Home.css";
import Header from "../../components/header/Header";
import Cart from "../../assets/shopping.png";
import { useNavigate } from "react-router-dom";
import { loadHandler } from "../../redux/slices/stocks";

export default function Home() {
  const navigate = useNavigate();
  const stock = useAppSelector((state) => state.stock.data);
  const [stockdetail, setStockDetail] = useState({});
  const [isSuggestion, setIsSuggestion] = useState(true);

  const dispatch = useAppDispatch();

  const searchStock = (event) => {
    setIsSuggestion(true);
    let searchTerm = event.target.value;
    console.log(searchTerm.toUpperCase());
    if (event.target.value.length > 1) {
      dispatch(getStockData(searchTerm.toUpperCase()));
    }
  };

  const updateStock = (data) => {
    setStockDetail(data);
  };

  const navigator = () => {
    navigate("/watchlist");
  };

useEffect(()=>{
  setIsSuggestion(false)
},[])

  return (
    <div className="main__container">
      <div className="header__cart">
        <Header setIsSuggestion={setIsSuggestion}/>
        <div onClick={navigator}>
          <img className="cart" src={Cart} alt="Logo" />
        </div>
      </div>
      <div className="home">
        <h1>Home</h1>
      </div>
      <input
        onChange={searchStock}
        className="search__bar"
        placeholder="Please enter stock name"
      />
      <div className="display__items">
        <div className="details__div">
          {isSuggestion && (
            <div>
              {stock.length > 0 ? (
                <div className="api__data">
                  {stock.map((item, index) => {
                    return (
                      <div className="api__data__display">
                        <p
                          onClick={() => {
                            dispatch(loadHandler(true));
                            setIsSuggestion(false);
                            setTimeout(() => {
                              dispatch(loadHandler(false));
                            }, 1000);
                            updateStock(item);
                          }}
                          className="symbol"
                        >
                          {item?.symbol}
                        </p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div>
                  <span>No Data Found!</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
     {stockdetail?.symbol &&  <StockCard data={stockdetail} />}

     
    </div>
  );
}
