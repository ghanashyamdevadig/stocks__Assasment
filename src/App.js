
import "./App.css";
import {useAppSelector } from "./redux/hooks";
import LoadingScreen from "react-loading-screen"
import Home from "./pages/Home/Home";
import Wishlist from "./pages/watchlist/watchlist";
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";

function App() {
  
  const loader = useAppSelector((state) => state.stock.loding);
  
  return (
    <LoadingScreen
    loading={loader}
    bgColor='#f1f1f1'
    spinnerColor='#9ee5f8'
    textColor='#676767'
    logoSrc={require("./assets/stocksLogo.jpg")}
    text='Processing'
  > 
   <div className="App">
      <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={< Home />} />
          <Route exact path="/watchlist" element={< Wishlist />} />
        </Routes>
      </BrowserRouter>
        {/* <Home/> */}
       
        
      </div>
    </div>
  </LoadingScreen>
    
  );
}

export default App;
