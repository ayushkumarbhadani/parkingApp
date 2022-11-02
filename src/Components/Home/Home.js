import './Home.css';
import { BiAnalyse } from 'react-icons/bi';
const Home = (props) => {
    return (
        <>
            <header>
                <BiAnalyse />
                Home
            </header>
            <section className='homeCardDetails'>
                <div className='card'>
                    Available Cars: 2
                </div>
                <div className='card'>
                    Cars out of Garage: 1
                </div>
                <div className='card'>
                    Total Registered Cars: {Object.keys(props.data).length}
                </div>
                <div className='card'>
                    Empty Slot in Garage: {props.TotalSlotSize - Object.keys(props.data).length}
                </div>
            </section>
        </>
    );
}
export default Home;