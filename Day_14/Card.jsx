import FoodCart from "./FoodCart";

const foodItems = [
    {id:1,food:"pizza", price:"249"},
    {id:2,food:"pasta", price:"349"},
    {id:3,food:"momos", price:"1249"},
    {id:4,food:"kawab", price:"2049"},
    {id:5,food:"chicken", price:"4249"},
    {id:6,food:"paneer", price:"2419"},
    {id:7,food:"burger", price:"149"},
    {id:8,food:"poha", price:"249"},
    {id:9,food:"rice", price:"449"},
    {id:10,food:"daal", price:"549"},
]

export default function Card(){

    return (
        <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"20px"}}>
            {foodItems.map((value)=>{
                return (
                    <div key={value.id}>  
                        <FoodCart value={value}/>
                    </div>
                )
            })}
        </div>
    )
}