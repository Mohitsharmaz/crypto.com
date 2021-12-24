import './App.css';
import Home from './Components/Home';
import Navbar from './Layout/Navbar'
import Trading from './Components/Trading';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Fulldata from './Components/Fulldata';



function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/trade" element={<Trading />}/>
          <Route path  ="/trade/:Id" exact element={<Fulldata/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
 
  );
}

export default App;
