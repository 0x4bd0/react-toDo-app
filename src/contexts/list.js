import { createContext, useReducer, useState } from "react";


export const ListContext = createContext()

const  defaultValue = [{id:1,text:"do this and that"}]
const themeReducer = (state,action) => {
   switch(action.type){
       case 'insert' :
           return 'x'
        case 'reset' : 
          return defaultValue
   }
}


const ListContextProvider = (props) => {

    let [list,daspatch] = useReducer(themeReducer, defaultValue)

    return (  
        <ListContext.Provider    value={{list,daspatch}}>
            {props.children}
        </ListContext.Provider>
    )
}
 
export default ListContextProvider ;