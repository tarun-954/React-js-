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