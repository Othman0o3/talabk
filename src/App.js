import './App.css';
import Nav from './components/navbar';
import Hero from './components/Hero';
import StatsSection from './components/stat';
import Footer from './components/footer';
import Main from './pages/Main';
import StoreServices from './pages/StoreServices';
import DriverServices from './pages/driverServices';
import EStore from './pages/Estore';
import Policy from './pages/policy'
import Status from './pages/deliverystatus';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRef } from 'react';

const theme = createTheme({
  typography: {
    fontFamily: '"Almarai", sans-serif',
  },
  palette: {
    primary: {
      main: 'rgb(219, 38, 42)'
    },
  },
});
function App() {
  const MainRef = useRef(null);
  const servicesRef = useRef(null);
  const ratesRef = useRef(null);
  const contactRef = useRef(null);
  
  return (
    <>
    <Router>
        <Nav 
          MainRef={MainRef} 
          servicesRef={servicesRef} 
          ratesRef={ratesRef} 
          contactRef={contactRef}
        />      
        <Routes>
        <Route path="/" element={<Main MainRef={MainRef} servicesRef={servicesRef} ratesRef={ratesRef} contactRef={contactRef}/>}/>
        <Route path='الرئيسية' element={<Main MainRef={MainRef}/>}/>
        <Route path="/خدمات المتاجر" element={<StoreServices/>} />
        <Route path="/خدمات السائقين" element={<DriverServices/>}/>
        <Route path="/متجر طلبك" element={<EStore/>}/>
        <Route path="/سياسات الشحن" element={<Policy/>}/>
        <Route path="/tracking/:OrderID" element={<Status/>}/>

      </Routes>
    </Router>

    </>
  );
}

export default App;
