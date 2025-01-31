// let b = 10;

// function greet()
// {
//     let a = 20;
//     console.log(a);
//     console.log(b);
// }
// greet(); // prints 20 10
// // we can go from inner scope to outer but viceversa not
// console.log(a); // error, we can't access the variable 



let b = 10;
function greet1()
{
    let a = 20;

    function meet(){
        console.log(a); 
    }
    // meet(); // it prints 20
    return meet; // now we returning meet function and storing this in a variable
}

const num = greet1();
console.log(num); // [Function: meet]
num(); // 20 , and this happens because of closure
// as we know all the memory of variables and this functions are stored in stack , and when the function end memory is released then how this num() is getting asccess of variable a , as num has meet we know this beacuse it has refernece of this and meet is stored in heap but how it is accessing variable a

// function gets memory in heap and its address is stored in the stack memomry, even if stack memory is released, we have the memory in heap from where we can access it

// closure states that whatever the variable the function is accessing, it note down the reference of all these variables, this is the main reason why num() is accessing a

