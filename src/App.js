import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Library from "./Library";
import Home from "./Home";
import PublicArea from "./PublicArea";
import Stdy from "./Stdy";




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
    //       Learn Reactn
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
