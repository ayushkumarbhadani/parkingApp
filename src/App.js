import './App.css';
import loader from './assets/images/car-loading.gif';
import { IoCarSport } from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import Home from './Components/Home/Home';
import Search from './Components/Search/Search';
import Info from './Components/Info/Info';
function App() {
  const splashScreenRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      splashScreenRef.current.style.display = 'none';
    }, 3000)
  }, []);

  const currentScreenConstants = {
    HOME: 'Home',
    SEARCH: 'Search',
    NEW: 'New',
    INFO: 'Info'
  }
  const [currentScreen, setCurrentScreen] = useState(currentScreenConstants.HOME);
  const [info, setInfo] = useState({});
  const TotalSlotSize = 100;
  const [data, setData] = useState({
    '532 323 321': {
      driverName: 'Sumit Kumar',
      vehicleType: 'SUV',
      isElectric: true,
      status: `In Garage`,
      vehicleNumber:'532 323 321',
      checkInOut: [
        {
          checkIn: '04:00 PM',
          checkOut: '07:00 AM'
        },
        {
          checkIn: '05:00 PM',
          checkOut: '07:00 AM'
        },
        {
          checkIn: '03:00 PM',
          checkOut: '09:00 AM'
        },
      ]
    },
    '532 323 432': {
      driverName: 'Ankit Kumar',
      vehicleType: 'SUV',
      isElectric: true,
      status: `In Garage`,
      vehicleNumber:'532 323 432',
      checkInOut: [
        {
          checkIn: '07:00 AM'
        }
      ]
    },
    '532 323 431': {
      driverName: 'Ajay Kumar',
      vehicleType: 'SUV',
      isElectric: true,
      status: `In Garage`,
      vehicleNumber:'532 323 431',
      checkInOut: [
        {
          checkIn: '05:00 PM',
          checkOut: '07:00 AM'
        }
      ]
    }
  });
  return (
    <>
      <div className='splashScreen' ref={splashScreenRef}>
        <img src={loader} alt="loading..." />
      </div>


      <div className='app'>
        <nav className='nav'>
          <IoCarSport onClick={() => setCurrentScreen(currentScreenConstants.HOME)} />
          <FaSearch onClick={() => setCurrentScreen(currentScreenConstants.SEARCH)} />
          {/* <FaPlus onClick={() => setCurrentScreen(currentScreenConstants.HOME)} /> */}
        </nav>

        <main>
          {currentScreen === currentScreenConstants.HOME && <Home data={data} TotalSlotSize={TotalSlotSize} />}
          {currentScreen === currentScreenConstants.SEARCH && <Search data={data} setInfo={setInfo} setCurrentScreen={setCurrentScreen} currentScreenConstants={currentScreenConstants} />}
          {currentScreen === currentScreenConstants.INFO && <Info info={info} setData={setData}/>}
          { }
        </main>

      </div>


    </>
  );
}

export default App;
