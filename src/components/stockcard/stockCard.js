import React from "react";
import "./stockCard.css";
import { setWhislist } from "../../redux/slices/stocks";
import { useAppDispatch } from "../../redux/hooks";

export default function StockCard({ selectedStock ,stockName}) {

    const dispatch = useAppDispatch();
    const addDataToCart=(stockInfo,stockHistory)=>{
        let data={
          stockinfo:stockInfo,
          stockhistory:stockHistory
      }
      dispatch(setWhislist(data));
    }
  return (
    <div>
      <div className="stockCard__button">
      <button className="button" onClick={()=>{ addDataToCart(stockName,selectedStock)}}>Add</button>
      </div>
     <div className="card">
     {Object.keys(selectedStock).map((item, index) => {
        return (
          <div
            key={index}
            className="stockCard"
          >
            <p className="card__item">{item}</p>
            <div className="card__details">
              <p className="card__open" >Open : {selectedStock[item][`1. open`]} </p>
              <p className="card__volume" >Volume : {selectedStock[item]["5. volume"]}</p>
            </div>

            <div className="card__details">
              <p className="card__high" >High: {selectedStock[item]["2. high"]} </p>
              <p className="card__low" >Low: {selectedStock[item]["3. low"]}</p>
            </div>
            <div className="card__details">
              <p className="card__close">Close: {selectedStock[item]["4. close"]}</p>
            </div>
          </div>
        );
      })}
     </div>
    </div>
  );
}