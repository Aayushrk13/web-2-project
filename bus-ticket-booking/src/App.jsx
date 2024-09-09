import Review from "./Review"
import Home from "./Home";
import Login from "./login/Login1"
import ContactUs from "./ContactUs";
import Signup from "./login/Signup";
import Seatbooking from "./Search/Seatbooking";
import { BrowserRouter ,Routes,Route } from "react-router-dom";
import Search_result from "./Search/Search_result";

function App() {
  return (
    <BrowserRouter> 
      <main>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="/searchresult" element={<Search_result/>}></Route>
          <Route path="/seatboook" element={<Seatbooking/>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App
