import './App.css';
import NavBar from './Components/NavBar';
import VehicleListPage from "./Pages/VehicleListPage";
import TollilistPage from "./Pages/TolllistPage";

import { Route, Routes, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<VehicleListPage />} />
          <Route  path='/TollList' element={< TollilistPage/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
      {/* <AddToll /> */}
      {/* <Tolllist /> */}
    </div>
  );
}

export default App;
