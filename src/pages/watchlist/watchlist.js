import React,{useState} from "react";
// import { getStockData, wishlistdata } from  "../../redux/slices/stocks";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import BasicModal from "../../components/modal/BasicModel";
import RightArrow from "../../assets/right-arrow.png";
import { wishlistHandler } from "../../redux/slices/stocks";
import Header from "../../components/header/Header";
import "./watchlist.css";
export default function Wishlist() {
    const dispatch = useAppDispatch();
  const [isOpen,setIsOpen]=useState(false)
  const [selectedStock,setSelectedStock]=useState([])
  const wishlist = useAppSelector((state) => state.stock.wishlist);
   
  var colors = [
    "aqua",
    "blue",
    "fuchsia",
    "gray",
    "green",
    "lime",
    "maroon",
    "navy",
    "olive",
    "orange",
    "purple",
    "red",
    "silver",
    "teal",
    "white",
    "yellow",
  ];

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
                {Object.keys(item?.stockhistory).map((stock, stockIndex) => {
                  return (
                    <div>
                      {stockIndex < 1 && (
                        <div
                          className="stocks__div"
                        >
                          <div>
                            <strong
                              style={{
                                color: `${
                                  colors[
                                    Math.floor(Math.random() * colors.length)
                                  ]
                                }`,
                              }}
                            >
                              {item?.stockinfo}
                            </strong>
                          </div>

                          <div>
                            <div  className="stocks__card">
                              <p  className="bold">Open:</p>
                              <p style={{ color: "#eddd4c" }}>
                                {item?.stockhistory[`${stock}`]["1. open"]}
                              </p>
                            </div>

                            <div className="stocks__card">
                              <p className="bold">High:</p>
                              <p style={{ color: "#4df76f" }}>
                                {item?.stockhistory[`${stock}`]["2. high"]}
                              </p>
                            </div>
                          </div>
                          <div>
                            <div  className="stocks__card">
                              <p className="bold">Low:</p>
                              <p style={{ color: "#eb0707" }}>
                                {item?.stockhistory[`${stock}`]["3. low"]}
                              </p>
                            </div>
                            <div className="stocks__card">
                              <p sclassName="bold">Close:</p>
                              <p style={{ color: "#db771f" }}>
                                {item?.stockhistory[`${stock}`]["4. close"]}
                              </p>
                            </div>
                          </div>
                          <div onClick={()=>{modalHandler(item)}}>
                            <img
                              className="arrow__img"
                              src={RightArrow}
                              alt="Right Arrow"
                            />
                          </div>

                          <button onClick={()=>{dispatch(wishlistHandler(wishlist,item?.stockinfo))}} className="button">Delete</button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <BasicModal isOpen={isOpen} modalHandler={modalHandler} stock={selectedStock}/>
    </div>
  );
}