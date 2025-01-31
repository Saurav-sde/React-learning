// Lets Make a Password Generator
import React,{useCallback, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";

// function PasswordGenerator()
// {
//     const [Password, setPassword] = useState("");
//     const [length, setLength] = useState(10);
//     const [numberChanged, setNumberChanged] = useState(false);
//     const [characterChanged, setCharacterChanged] = useState(false);

//     function generatePassword(){
//         let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//         if(numberChanged)
//             str += "0123456789";
//         if(characterChanged)
//             str += "!@#$%^&*()_+={}[]";

//         let pass = "";
//         for(let i=0;i<length;i++)
//             pass += str[Math.floor(Math.random() * str.length)];

//         setPassword(pass);
//     }
//     // generatePassword(); //Too many re renders, infinite loop happens
//     // why it goes to infinite loop??
//     // whwn it come frist time in this PasswordGEnerator block, code is executed ony by one, when it sees generatePassword() , it calls the generatePassword function, inside this the code is getting executed one by one when it sees setPassword(pass) , it re render the PasswordGenerator function as state of the Password is changed, now while re rendering it again sees generatePassword() asnd again goes to the generatePassword block and there again the sate of passsword is changed , and this happens again abd again ... , so this leada to infinite loop
//     // all this is happening because of generatePassword() as we have left it khuule saand ke jaissa

//     // we have to stop it as we want it to run 1 time initially, use useEffect
//     // useEffect(()=>{
//     //     generatePassword();
//     // },[]);
//     // now it does not go for infinte loop, this will run only 1 time until and unless we dont change the dependency array

//     // it will run again only when the value in dependency array change
//     // here it will run only 1 time as the dependency does not change



//     // now when we are changing length, and selecting on number and chracter password is not changing why??
//     // As when we are changing length and  selecting number and character re rendering is happening but password is not setting beacuse generatePassword() is only called by useEffect and in useEffect dependency is not changing so, generatePassword() is not getting called
//     // we have to call this generatePassword, then we have to add length,numberChanged and characterChanged in dependency array so that when the value of any of these three changes the generatePassword() gets called and password is changed
    
//     useEffect(()=>{
//         generatePassword();
//     },[length,numberChanged,characterChanged]);


//     return (
//         <>
//             <h1>{Password}</h1>
//             <div className="second">
//                 <input type="range" min={5} max={50} value={length} onChange={(e)=> setLength(e.target.value)}></input>
//                 <label>Length({length})</label>

//                 <input type="checkbox" defaultChecked={numberChanged} onChange={()=> setNumberChanged(!numberChanged)}></input>
//                 <label>Number</label>

//                 <input type="checkbox" defaultChecked={characterChanged} onChange={()=> setCharacterChanged(!characterChanged)}></input>
//                 <label>Character</label>
//             </div>

//         </>
//     )
// }



// ReactDOM.createRoot(document.getElementById('root')).render(<PasswordGenerator/>);



// now we have to optimixe the above code
// As  We know that when the program runs it allocates memory to each variable,function,array,object...
// on re rendering, we are reallocating the memory to all these variables and functions, if it renders 10 times , we are allocating memory 10 times 
// now the question is can we stop this function(generatePassword()) from getting memory again and again? when we have cratead the memory for it 1 time, can we use it again and again??
//Here,  we will use older code only when re rendering is happening because of setPassword(pass) as it doesn't affecting the function generatePassword() so we dont want to allocate the memory to it again as we can use the older code of this function
// But when re rendering is happening because of setLength(), setnumberChanged() and setcharacterChanged(), all these are affecting the code of generatePassword() then on this case we have to reallocate the memory for generatePassword() function ,as we dont use the previous code of this function, as if we dont reallocate it it gives us the previous password 
 
// we can solve this problem by a hooks named useCallback()
function PasswordGenerator()
{
    const [Password, setPassword] = useState("");
    const [length, setLength] = useState(10);
    const [numberChanged, setNumberChanged] = useState(false);
    const [characterChanged, setCharacterChanged] = useState(false);

    const generatePassword = useCallback(()=>{
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(numberChanged)
            str += "0123456789";
        if(characterChanged)
            str += "!@#$%^&*()_+={}[]";

        let pass = "";
        for(let i=0;i<length;i++)
            pass += str[Math.floor(Math.random() * str.length)];

        setPassword(pass);
    },[length,numberChanged,characterChanged]);
    // now this function will only be created when one of these values of dependency change otherwise it use older version 
    // here closure is being used internally by useCallback hooks


    // useEffect(()=>{
    //     generatePassword();
    // },[length,numberChanged,characterChanged]);
    // instead of it we can write it 
    useEffect(()=>{
        generatePassword();
    },[generatePassword]);  // both are same , generatePassword is created only when length,numberchanged and characterchanged changes and at that time only we want run useEffect

    // so when any of these variables changes, generatePassword() is created and when it is cretad it gets new memory, as memory changes dependency of useEffect changed and as dependency is changed useEffect will run


    return (
        <>
            <h1>{Password}</h1>
            <div className="second">
                <input type="range" min={5} max={50} value={length} onChange={(e)=> setLength(e.target.value)}></input>
                <label>Length({length})</label>

                <input type="checkbox" defaultChecked={numberChanged} onChange={()=> setNumberChanged(!numberChanged)}></input>
                <label>Number</label>

                <input type="checkbox" defaultChecked={characterChanged} onChange={()=> setCharacterChanged(!characterChanged)}></input>
                <label>Character</label>
            </div>

        </>
    )
}



ReactDOM.createRoot(document.getElementById('root')).render(<PasswordGenerator/>);



// IMPORTANT
// setPassword(), setLength(), setnumberChanged(), setcharacterChanged(). All these are created only once and it is being stored as a refernce
// password,length,numberChanged,characterChanged all these ar created again and again