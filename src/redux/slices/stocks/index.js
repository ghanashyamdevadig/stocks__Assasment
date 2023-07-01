import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const stockSlicer = createSlice({
  initialState: {
    data: {},
    wishlist: [],
    loding: false,
   
  },
  name: "stock",
  reducers: {
    stockdata: (state, action) => {
      state.data = action.payload;
    },
    wishlistdata: (state, action) => {
      let temp = [...state.wishlist];
      temp.push(action.payload);
      state.wishlist = temp;
    },

    wishlistFilter: (state, action) => {
      state.wishlist = [...action.payload];
    },
    pageLoader: (state, action) => {
      state.loding = action.payload;
    },
  },
});

export const { stockdata, wishlistdata, wishlistFilter, pageLoader } =
  stockSlicer.actions;

export const getStockData = (symbol) => async (dispatch) => {
 
  const apiKey = "Y4KPDJET3EDVC856";
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`;
  const response = await axios.get(url);
  console.log(response, "after call");
  dispatch(stockdata(response.data));
  
};

export const setWhislist = (data) => async (dispatch) => {
  dispatch(loadHandler(true))
  dispatch(wishlistdata(data));
  setTimeout(()=>{ dispatch(loadHandler(false))},2000)
};

export const wishlistHandler = (data, type) => async (dispatch) => {
  dispatch(loadHandler(true))
  let stock = data?.filter((item, index) => {
    return item.stockinfo !== type;
  });
  console.log(stock, "hey");
  dispatch(wishlistFilter(stock));
  setTimeout(()=>{ dispatch(loadHandler(false))},2000)
};

export const loadHandler = (data) => async (dispatch) => {
  dispatch(pageLoader(data));
};

export default stockSlicer.reducer;