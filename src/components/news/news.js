import React, { useEffect, useState } from "react";
import axios from "axios";
import "./news.css";

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
      className="news"
    >
        
      {data?.map((item, index) => {
     
        return (
          <div key={index} onClick={()=>{
            window.open(`${item.url}}`, "_blank")
           }}
            className="news__div"
          >
            <img src={item?.banner_image}  alt="" className="news__image"/>
            <strong style={{margin:15}}>{item?.title.slice(0,50)}...</strong>
          </div>
        );
      })}
    </div>
  );
}