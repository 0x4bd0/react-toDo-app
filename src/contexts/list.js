import { createContext, useReducer, useState } from "react";


export const ListContext = createContext()

const  defaultValue = [{id:1,text:"do this and that",done:false}]

const changeStatus = (data,id,status) => {
    data[data.findIndex(item=>item.id === id)].done = status
    return data
}

const themeReducer = (state,action) => {
   switch(action.type){
       case 'insert' :
           return  [{id:1,text:"kekw"}]
        case 'reset' : 
          return defaultValue
        case 'uncheck' : 
          return changeStatus([...state],action.payload.id,false)
        case 'check' : 
          return changeStatus([...state],action.payload.id,true)
        default  :
          return state
   }
}

const ListContextProvider = (props) => {

    let [list,dispatch] = useReducer(themeReducer, defaultValue)

    return (  
        <ListContext.Provider    value={{list,dispatch}}>
            {props.children}
        </ListContext.Provider>
    )
}
 
export default ListContextProvider ;