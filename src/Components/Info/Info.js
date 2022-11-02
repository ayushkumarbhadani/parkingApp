import './Info.css';
import { BiAnalyse } from 'react-icons/bi';
import { useEffect } from 'react';
const Info = (prop) => {
    // console.log(prop)
    useEffect(()=>{

    },[]);
    const checkIn=()=>{
        console.log("Hello");
        prop.setData((oldData)=>{
            console.log("Inside Set Data");
            const temp=prop.info.vehicleNumber;
            const newData={...oldData}
            newData[temp].status='In Garage';
            // newData[temp].checkInOut[newData[temp].checkInOut.length-1].checkIn=new Date().toString();
            newData[temp].checkInOut.push({checkIn:new Date().toString()});
            return newData;
        });
    }
    const checkOut=()=>{
        console.log("World");
        prop.setData((oldData)=>{
            const temp=prop.info.vehicleNumber;
            const newData={...oldData}
            newData[temp].status='Out of Garage';
            newData[temp].checkInOut[newData[temp].checkInOut.length-1].checkOut=new Date().toString();
            // newData[temp].checkInOut.push({checkOut:new Date().toString()});
            // .checkIn=new Date().toString();
            return newData;
        });
    }
    return (
        <>
            <header>
                <BiAnalyse />
                Information
            </header>
            <section className='information'>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                Name:
                            </td>
                            <td>
                                <b>{prop.info.driverName}</b>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Vehicle Type:
                            </td>
                            <td>
                                <b>{prop.info.vehicleType}</b>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Electric Vehicle:
                            </td>
                            <td>
                                <b>{prop.info.isElectric ? "Yes" : "No"}</b>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Status:
                            </td>
                            <td>
                                <b>{prop.info.status}</b>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {prop.info.status==='Out of Garage' && <button className='checkInOutBtn' onClick={()=>checkIn()}>Check-In</button>}
                                {prop.info.status==='In Garage' && <button className='checkInOutBtn' onClick={()=>checkOut()}>Check-Out</button>}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='checkInOutTimeInfo'>
                <table>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            prop.info.checkInOut.slice(0).reverse().map((item, index) => {
                                let res=[];
                                if(item.checkOut){
                                    res.push(<tr key={index+1}>
                                    <td>{item.checkOut}</td>
                                    <td>Check-out</td>
                                </tr>);
                                }
                                if(item.checkIn){
                                    res.push(<tr key={(index+1) * 2}>
                                    <td>{item.checkIn}</td>
                                    <td>Check-in</td>
                                </tr>);
                                }
                                return res;
                            })
                        }
                    </tbody>
                </table>
            </section>
        </>
    );
}
export default Info;