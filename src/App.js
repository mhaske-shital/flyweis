
import Navbar from './componets/Navbar';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './componets/Home';
import Quick from './pages/Quick';
import Dashboard from './pages/Dashboard';
import Graph from './pages/Graph';
import Payment from './pages/Payment';
function App() {
  return (
    <BrowserRouter>
     <Navbar />
  {/* <Sidebar /> */}
    <Routes>
      <Route path="/nav" element={<Home />} exact/>
      <Route path="/quick" element={<Quick />} exact />
      <Route path="/dashbord" element={<Dashboard />} exact />
      <Route path="/graph" element={<Graph/>} exact />
      <Route path="/payment" element={<Payment/>} exact />
         
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
