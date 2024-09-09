
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
import './App.css';
function App() {
  let arr=["C","L","K","A"]
let arr2=arr.sort();
    return (
<div>{
arr2.map((v)=>{
      return (
        <div>{v}</div>
      )
    })
    

  }
  {/* <div className="sum">{arr[2]+" "+arr[3]}</div> */}
</div>
    );
  }
  export default App;