import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AllNews from "./components/News";
import TopHeadlines from "./components/TopHeadlines";
import Footer from "./components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryNews from "./components/CountryNews";

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="w-full">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AllNews />} />
          <Route path="/top-headlines/:category" element={<TopHeadlines />} />
          <Route path="/country/:iso" element={<CountryNews />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;