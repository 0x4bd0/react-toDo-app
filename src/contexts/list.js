import { createContext, useReducer, useState } from "react";


export const ListContext = createContext()

const  defaultValue = [{id:1,text:"do this and that",done:false}]

const changeStatus = (data,id,status) => {
    data[data.findIndex(item=>item.id === id)].done = status
    return data
}

const add = (state,data) => {
     state.push({
         text : data.text,
         id : state[state.length-1].id + 1,
         done : false
     })
    return state
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
        case 'add' : 
          return add([...state],action.payload)
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