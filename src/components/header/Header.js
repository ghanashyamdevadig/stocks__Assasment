import React from 'react'
import Logo from "../../assets/stocksLogo.jpg";
import "./Header.css"
import { useNavigate } from "react-router-dom";

export default function Header({setIsSuggestion}) {
    const navigate = useNavigate();

    const navigator=()=>{
        navigate("/");
        setIsSuggestion(false)
       }
    
  return (
    <div className="header">
    <div className="logo__container"> <img className="logo" src={Logo} alt="Logo" onClick={navigator}/></div>
 </div>
  )
}