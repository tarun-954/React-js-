//array
let numbers =[1,2,3,4,5]

//function creation 
function double(n){
    return n*2;
}


let double_value=numbers.map(double);
// here numbers is the array 
// here double is the function
// map jod rha hai numbers array ko double function se

console.log(double_value);


let products=[
    {name:"laptop",price:100},
    {name:"phone",price:500},
    {name:"tablet",price:300}
]

function increasePrice(n){
    return {
        ...n,
        price:n.price*1.1
    };

}

let updatedProducts=products.map(increasePrice);
console.log(updatedProducts);


//inbuild functions
// creating an array with 5 elements with no values 
let emptyArray=Array(5)
console.log(emptyArray)

//creating an array with one element and one value

let filledArray=Array(1).fill("tarun")

console.log(filledArray)






