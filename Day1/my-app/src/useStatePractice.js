
import {useState , useEffect, React} from 'react';

function Apps(){
    const [count,setcount]=useState(0);
    const [data,setData]=useState("Ram");
    useEffect(()=>{ 
        console.log("component mounted");
    },[]);


    function updateCounter(){
        setcount(count +1)

    }
    function updateData(){
        setData("seeta");
    }
return (
    <>
    <h1> Button clicked{count}times</h1>
    <button onClick={updateCounter}>Click </button>
    <button onClick={updateData}>Update data</button>
<p>Data: {data}</p>
    </>
);
}
export default Apps;