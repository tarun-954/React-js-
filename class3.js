let numbers =[1,2,3,4,5]

function double(n){
    return n*2;
}

let double_value=numbers.map(double);
// here numbers is the array 
// here double is the function
// map jod rha hai numbers array ko double function se

console.log(double_value);