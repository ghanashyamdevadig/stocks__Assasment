import React,{useState} from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import BasicModal from "../../components/modal/BasicModel";
import { wishlistHandler } from "../../redux/slices/stocks";
import Header from "../../components/header/Header";
import "./watchlist.css";
export default function Wishlist() {
    const dispatch = useAppDispatch();
  const [isOpen,setIsOpen]=useState(false)
  const [selectedStock,setSelectedStock]=useState([])
  const wishlist = useAppSelector((state) => state.stock.wishlist);
  

  const modalHandler=(data)=>{
    setIsOpen(!isOpen)
    setSelectedStock(data)
  }
  return (
    <div className="watchlist">
        <Header/>
        <div className="title"><h1>Watchlist</h1></div>
      <h2>Your - Stocks</h2>
      <div>
        {wishlist.map((item, index) => {
          return (
            <div className="stocks" key={index}>
              <div>
                <p>{item.symbol}</p>
                <p>{item.company}</p>
              <button onClick={()=>{dispatch(wishlistHandler(wishlist,item.symbol))}} className="button">Delete</button>

              </div>
            </div>
          );
        })}
      </div>
      <BasicModal isOpen={isOpen} modalHandler={modalHandler} stock={selectedStock}/>
    </div>
  );
}