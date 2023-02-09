import Signup from './components/Signup';
import Signin from './components/Signin';
import Home from './Display/Home';
import BasicInfo from './components/BasicInfo';
import PropertyDetail from './components/PropertyDetails';


import {BrowserRouter,Routes, Route } from 'react-router-dom'

function App() {
  return (
    
    <BrowserRouter>

    <Routes>
    <Route path="/" element={<Signin />} />
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/home" element={<Home/>}/>
   <Route path='/basicinfo' element={<BasicInfo/>}/>
   <Route path="/propertyDetail" element={<PropertyDetail/>}/>

    </Routes>
    
    

    
    
    
    </BrowserRouter>


      


      
      
   
  );
}

export default App;
