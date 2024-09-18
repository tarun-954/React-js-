// Create a class Person with properties name and age. Add a method greet() that returns a greeting message. Then, create an instance of the Person class and call the greet() method.

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }


    greet(){
console.log("Good morning sir");
    }

}
const obj=new Person("Tarun",21);
obj.greet();

// Create a subclass Employee that extends the Person class. The Employee class should have an additional property jobTitle. Add a method getJob() that returns the job title.

const mutiple=(num,num2)=>{return num*num2};

const result=mutiple(5,5);
console.log(result);
const arr=[5,3,7,4,1]
arr.sort();
console.log("sort:", arr);

const arraysum=(a,b)=>{
    const sum=a+b;
    console.log(`{sum}`);
    return sum;
}

const result3=arraysum(5,7);
console.log(result3);


