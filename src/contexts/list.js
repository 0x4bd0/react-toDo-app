import { createContext, useEffect, useReducer, useState } from "react";


export const ListContext = createContext()

const  defaultValue = localStorage.getItem('list')  ? JSON.parse(localStorage.getItem('list')) : []

const changeStatus = (data,id,status) => {
    data[data.findIndex(item=>item.id === id)].done = status
    return data
}

const add = (state,data) => {
     state.push({
         text : data.text,
         id : state.length > 0 ?  state[state.length-1].id + 1 : 1,
         done : false
     })
    return state
}

const deleteTodo = (state,data) => {
  console.log(data.id)
   state.splice(state.findIndex(i=>i.id===data.id),1)
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
        case 'delete' : 
          return deleteTodo([...state],action.payload)
        default  :
          return state
   }
}

const ListContextProvider = (props) => {
  console.log(defaultValue)

    let [list,dispatch] = useReducer(themeReducer, defaultValue)

    useEffect(()=>{
      localStorage.setItem('list',JSON.stringify(list))
    },[list])

    return (  
        <ListContext.Provider    value={{list,dispatch}}>
            {props.children}
        </ListContext.Provider>
    )
}
 
export default ListContextProvider ;