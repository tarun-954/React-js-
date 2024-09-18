import "./props_concept.css";
import {useState} from 'react';


const Car=({name,color,defaultName})=>{
const [carName,setCarName]=useState(defaultName|| "")
return(
    <div>
        <h2>
            Car details
        </h2>
        <p>Car name: {name}</p>
        <p>Car color: {color}</p>

<input 
type='text'
placeholder="Enter the car name"
onChange={(e)=>setCarName(e.target.value)}


/>
<p>{carName}</p>
    </div>
)


}

export default Car;