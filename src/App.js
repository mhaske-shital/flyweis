
import Navbar from './componets/Navbar';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './componets/Home';
import Quick from './pages/Quick';
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <BrowserRouter>
     <Navbar />
  {/* <Sidebar /> */}
    <Routes>
      <Route path="/nav" element={<Home />} exact/>
      <Route path="/quick" element={<Quick />} exact />
      <Route path="/dashbord" element={<Dashboard />} exact />
         
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
