import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route , Routes} from 'react-router-dom';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Description from './screens/Description';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

function App() {
  return (
    <div>
    <Navbar/>
    <BrowserRouter>
    <Routes>
   <Route path="/" element={<Homescreen/>} />
   <Route path="/description/:id" element={<Description/>}/>
   <Route path='/cart' element={<CartScreen/>}></Route>
   <Route path='/login' element={<LoginScreen/>}></Route>
   <Route path='/register' element={<RegisterScreen/>}></Route>
    </Routes>
    </BrowserRouter>
  
    
    </div>
  );
}

export default App;
