import React from "react";
import "./stockCard.css";
import { setWhislist } from "../../redux/slices/stocks";
import { useAppDispatch } from "../../redux/hooks";

export default function StockCard({ data }) {
  const dispatch = useAppDispatch();
  const addDataToCart = (data) => {
    dispatch(setWhislist(data));
  };
  return (
    <div>
      <div className="card">
        
        <div>
          <div className="stockCard">
            <p>{data?.symbol}</p>
            <p>{data?.company}</p>
            <div className="stockCard__button">
              <button
                className="button"
                onClick={() => {
                  addDataToCart(data);
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
