import React from "react";
import UserContext from "./UseContext";
const UserContextProvider=({children})=>{
    const[user, setuser]= React.useState(null) /////api call kar lo 

    return(
    <UserContext.Provider value={{user, setuser}}> 
       {children} 
    </UserContext.Provider>
)
}

export default UserContextProvider

//this is steup