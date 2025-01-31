import { useCallback, useEffect, useState } from "react";

function Body(){
    const [Profile,setProfile] = useState([]);
    const [numberOfProfile,setnumberOfProfile] = useState("");

    const generateProfile = useCallback(async (count) => {
        try {
            const random = Math.floor(1 + Math.random() * 10000);
            const response =await fetch(`https://api.github.com/users?since=${random}&per_page=${count}`);
            const data = await response.json();
            if(!data || data.length === 0)
                throw new Error("Data Is not Fetched");  
            setProfile(data);
        } catch (error) {
            console.error("Error:",error.message);
        }
   
    },[]);

    useEffect(()=>{
        generateProfile(10);
    },[])

    return (
        <div className="container">
            <input type="text" className="inpu" placeholder="Search here" value={numberOfProfile}onChange={(e)=>setnumberOfProfile(e.target.value)}></input>
            <button onClick={()=>generateProfile(Number(numberOfProfile))}>Serach Profile</button>

            <div className="profiles">
                {
                    Profile.map((value)=>{
                    return (
                            <div key={value.id} className="cards">
                                <img src={value.avatar_url}/>
                                <h2>{value.login}</h2>
                                <a href={value.html_url} target="_blank">Profile</a>
                            </div>
                        )
                    })
                }   
            </div>
        </div>
    )
}

export default Body;


// try catch functionality
// useCallback add in this
// Create one more search btn on the basis of name, if user profile exists display it