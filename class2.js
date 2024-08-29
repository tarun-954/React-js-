// creating arrow function in js
const fun=()=>{
    console.log("My name is tarun")
}
fun()



// arrow function with arrguments
const func = (a,b,c) => {
console.log(a*b*c)
}
func(10,20,40);

// arrow function with default arguments and values predefined
const tarun =(x,y,z=10) =>{
console.log(x+y+z);
}
tarun(10,20)


// return object literalas

// const tarun2=(author , Bname)=>{
// ({a: author,b:Bname})
// console.log(tarun2("TarunChoudhary","one many alone"))

// }
// tarun2();

//creating a regular function
const regularFunction={
    name: 'Regular function',
    getName: function()
    {
        console.log(this.name);
    }
}
regularFunction.getName();

//creating a arrow function

const arrowFunction={
    name:'arrow function',
    getName: () =>{
        console.log(this.name)
    }
}
arrowFunction.getName();




