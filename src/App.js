
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import Services from './Pages/Home/Services/Services';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Experts from './Pages/Home/Home/Experts/Experts';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div>
      <Header></Header>  
      <Routes>
        <Route path='/' element= {<Home></Home>}></Route>
        <Route path='/home' element= {<Home></Home>}></Route>
        <Route path='/services' element= {<Services></Services>}></Route>
        <Route path='/experts' element= {<Experts
        ></Experts>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/service/:serviceId' element= {<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
