
// export default const arr = [{cloth:"Tshirt", Offer:"20-40%Off"},{cloth:"Pant", Offer:"20-40%Off"},{cloth:"Skirt", Offer:"10-20%Off"},{cloth:"Kurta", Offer:"30-60%Off"},{cloth:"Patloon", Offer:"20-40%Off"},{cloth:"Shoes", Offer:"40-60%Off"},{cloth:"shirt", Offer:"20-40%Off"},{cloth:"Tshirt", Offer:"20-40%Off"},{cloth:"Tshirt", Offer:"20-40%Off"},{cloth:"Tshirt", Offer:"20-40%Off"},{cloth:"Tshirt", Offer:"20-40%Off"},{cloth:"Tshirt", Offer:"20-40%Off"}];

// when we write let,const then we can export like this
// we have to write export in next line



const arr = [
    {cloth:"Tshirt", Offer:"20-40%Off", price:"250"},
    {cloth:"Pant", Offer:"20-40%Off", price:"340"},
    {cloth:"Skirt", Offer:"10-20%Off", price:"140"},
    {cloth:"Kurta", Offer:"30-60%Off", price:"275"},
    {cloth:"Patloon", Offer:"20-40%Off",price:"100"},
    {cloth:"Shoes", Offer:"40-60%Off",price:"650"},
    {cloth:"shirt", Offer:"20-40%Off", price:"450"},
    {cloth:"Tshirt", Offer:"20-40%Off",price:"340"},
    {cloth:"Tshirt", Offer:"20-40%Off",price:"230"},
    {cloth:"Tshirt", Offer:"20-40%Off", price:"375"},
    {cloth:"Tshirt", Offer:"20-40%Off",price:"500"},
    {cloth:"Tshirt", Offer:"20-40%Off",price:"350"}
];


// function greet() {
//     return <h1>Hello Coder Army</h1>
// }

// export default arr;

// now we want to export both the function and the arr
// export default greet;
// but we cant export more than one export default in a file

// to export both
export function greet() {
    return <h1>Hello Coder Army</h1>
}
export function meet() {
    return <h1>Hello Bhaiya Jii</h1>
}

export default arr;

// now we have to use these in any other files
// import arr from "./utils/dummy";
// import { greet, meet } from "./utils/dummy";


// if we write export default then no need write {} for import
// but if we have write export then we have to write in  {}