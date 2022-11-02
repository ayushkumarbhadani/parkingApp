import './Search.css';
import { BiAnalyse } from 'react-icons/bi';
import {useRef} from 'react';

const Search = (props) => {
    const vehicleNumberRef=useRef(null);
    const vehicleDriverRef=useRef(null);
    const errorRef=useRef(null);
    const hideMsg=()=>{
        errorRef.current.style.opacity=null;
    }
    const handleSearch=()=>{
        hideMsg();
        const vehicleNumber=vehicleNumberRef.current.value;
        const driverName=(vehicleDriverRef.current.value).toLowerCase().trim();
        if(vehicleNumber==="" || driverName===""){
            errorRef.current.style.opacity='1';
            errorRef.current.innerHTML='Error! Enter Correct Values';
            return;
        }
        if(vehicleNumber in props.data && (props.data[vehicleNumber].driverName).toLowerCase()===driverName){
            props.setInfo(props.data[vehicleNumber]);
            props.setCurrentScreen(props.currentScreenConstants.INFO);
        }
        else{
            errorRef.current.style.opacity='1';
            errorRef.current.innerHTML='Error! No Vehicle found with current inputs.';
            return;
        }

    }
    return (
        <>
            <header>
                <BiAnalyse />
                Search
            </header>
            <section className='searchbox'>
                <div className='searchboxInnerWrapper'>
                    <label>Enter Vehicle Number:</label>
                    <input type="search" className='searchCar' placeholder="Enter Vehicle Number" ref={vehicleNumberRef} onFocus={hideMsg}/>
                </div>
                <div className='searchboxInnerWrapper'>
                    <label>Enter Vehicle Driver Name:</label>
                    <input type="search" className='searchCar' placeholder="Enter Vehicle Driver Name" ref={vehicleDriverRef} onFocus={hideMsg}/>
                </div>
                <div className='searchboxInnerWrapper'>
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div className='errorMsg' ref={errorRef}>Error!</div>
            </section>
        </>
    );
}
export default Search;