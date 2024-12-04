
// import './App.css';

// function App() {
//   function newfunction(){

  
//  let arr = [1,2,3,4,5]
//   let name ="library"

// let obj={
//   'name':"khushil",
// 'cname':"sengari",
// 'desc':"student",
// }

// let status =true;


// return(
// <div className="App">
//   <h1>{name}</h1>
//   {
//     arr.map((v)=>{
//       return (
//         <div>{v}</div>
//       )
//     })
//   }
//    <div className="sum">{obj.name}</div>
//   <div className="sum">{obj.cname}</div>
//   {
//     10+50
//   }
//   {(status) ? <h1 style={{color:"blueviolet"}}> "Welcome to library" </h1> : "no"}
// </div>
// );

//   }

// return (
//   <div>{newfunction()}</div>

// );
// }

// export default App;




// paragraph.js code run code here 

// import './App.css';
// // import Khushil from './paragraph';
// function App() {
//   let arr=["A khushil","C","L","K"]
// let arr2=arr.sort();
//     return (
// <div>{
// arr2.map((v)=>{
//       return (
//         <div>{v}</div>
//       )
//     })
    

//   }
 
// {/* <Khushil /> */}
// </div>
//     );
//   }
//   export default App;



// props concept code Here 
// import "./App.css";
// import Car from "./props_concept";

// function App(){
//   return (
//     <>
//     <Car name="Tiago" color="red" defaultName="City" />
//     </>
//   )

// }

// export default App


// calculator code 

// import "./App.css";
// import Apps from "./useStatePractice.js";

// function App(){
// return(
// <>
// <Apps />
// int i =0
// int j = arr2
// while(i<j)
// {
//     if(arr[i]!=arr[j])

//     {
//         return flse
//     }
//     i++;
//     j--;
// }
// return true;

// </>
// )
// }

// export default App;




// import React, { useState } from 'react';

// const ItemList = () => {
// // State to manage the visibility of the list
// const [isVisible, setIsVisible] = useState(true);

// // Sample list of items
// const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

// // Function to toggle the visibility of the list
// const toggleList = () => {
// setIsVisible(prevState => !prevState);
// };

// return (
// <div>
// <button onClick={toggleList}>
// {isVisible ? 'Hide List' : 'Show List'}
// </button>

// {isVisible && (
// <ul>
// {items.map((item, index) => (
// <li key={index}>{item}</li>
// ))}
// </ul>
// )}
// </div>
// );
// };

// export default ItemList;







import React from "react";
import User from "./user";
function App(){
    return (
        <div className="App">
          <h1>Loan Application Form</h1>
          <User />
        </div>
      );
    }
export default App;