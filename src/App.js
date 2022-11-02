import './App.css';
import NavBar from "./NavBar";
import Home from "./Home";
import Create from "./Create";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='*' element={<Navigate to={"/"}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
