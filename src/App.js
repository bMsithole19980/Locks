
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import Services from './Screens/Services';
import { BrowserRouter  , Routes ,Route  } from 'react-router-dom';
import About from './Screens/About';
import SignUp from './Components/SignUp';
import Testimony from './Screens/Testimony';
import ContactUs from './Screens/ContactUs';

function App() {
  return (
    <BrowserRouter>
     <Routes>
     <Route path='/' element={<HomeScreen/>} />
     <Route path='services' element={<Services />} />
     <Route path='about' element={<About />} />
     <Route path='testimony' element={<Testimony />} />
     <Route path='contactUs' element={<ContactUs />} />
     </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;
