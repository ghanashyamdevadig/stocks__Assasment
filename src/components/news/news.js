import React, { useEffect, useState } from "react";
import axios from "axios";

export default function News() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=Y4KPDJET3EDVC856"
          );
          setData(response.data.feed);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexWrap: "wrap",
        width: "100%",
        // background:'red'
      }}
    >
        
      {data?.map((item, index) => {
     
        return (
          <div key={index} onClick={()=>{
            window.open(`${item.url}}`, "_blank")
           }}
            style={{
              display: "flex",
              flexDirection:"column",
              justifyContent: "space-between",
              alignItems: "center",
              width: "30%",
              margin: 10,
              background: "black",
              padding:10,
              borderRadius:10,
              gap:10,
              textAlign:"left",
              height:"15em",
            }}
          >
            <img src={item?.banner_image} style={{ height: 100, width: "90%" , borderRadius:10}} alt=""/>
            <strong style={{margin:15}}>{item?.title.slice(0,90)}</strong>
          </div>
        );
      })}
    </div>
  );
}