
               "Day 20 of coding challenge"
//Question 1:Average Score Calculator:Write a simple program that can takelots of scores and find their average.
function averageScore(...scores:number[]): number {
    let total = 
    scores.reduce((sum,score) => sum + score,0);
    return total / scores.length;
}
console.log(averageScore(80,90,100,70));

//Question 2:Add a special number:Make a program that creates custom adders.These adders can add a specific
//number to any other number you give them later.
function makeAdder(valueToAdd:number): (number :number) => number {
    return function(number: number) : number {
        return number + valueToAdd;
    };
}
let addFive = makeAdder(5);
console.log(addFive(10));

//Question 3:Self-Running User Profile:Create a quick,self-setup profilr for a user that can tell you the 
//user's name and age .
let userProfile = (function() {
    let name = "Alina";
    let age = 20;
    
    return {
        displayInfo: function() {
            console.log(`Name: ${name},Age: ${age}`);
        }
    };
})();
userProfile.displayInfo();

                         "Day 21 of coding challenge"
//Question 1:Making Enums for Vehicles:Let's create categories for vehicles like cars,trucks,and motorsycles
//using enums ,and show one example.
enum VehiclesType {
    Car,
    Truck,
    Motorcycle
}
console.log(VehiclesType.Truck);

//Question 2:Making  student template.
interface Student {
    name:string;
    age:number;
    courses: string[]
}

let student: Student = {
    name: "Alice",
    age: 22,
    courses:["Math","Science","History"]
};
console.log(student);

//Question 3:Shape Shifter
type Shape = {
    kind:"circle" | "rectangle";
    radius?: number;
    width?: number;
    height?: number;
}
let circle:Shape = {
    kind:"circle",
    radius:5
};
let rectangle:Shape = {
    kind: "rectangle",
    width: 10,
    height:20
};

console.log(circle);
console.log(rectangle);