import "./App.css";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        {/* <Card title="Post 1" description="hello post 1 test test" /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
