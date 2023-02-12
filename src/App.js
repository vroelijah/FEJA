import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Library from "./pages/Library";
import Home from "./pages/Home";
import PublicArea from "./pages/PublicArea";
import Stdy from "./pages/Stdy";



function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="Library" element={<Library />}/>
          
        
        <Route path="" element={<Home />} />
          <Route path="PublicArea" element={<PublicArea />} />
          <Route path="Stdy" element={<Stdy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
