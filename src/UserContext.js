import React, { createContext } from "react"; 

const UserContext = createContext({ 

loggedInUser: "default user1" 
 
}) 
7 
export default UserContext; 

// using in class based component 
// <UserContext.Consumer>{({loggedInUser})=>{loggedInUser})</UserContext.Consum