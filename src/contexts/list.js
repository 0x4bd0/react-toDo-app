import { createContext, useState } from "react";


export const ListContext = createContext()


const ListContextProvider = (props) => {

    let [list,setList] = useState([{id:1,text:"do this and that"}])

    return (  
        <ListContext.Provider    value={{list}}>
            {props.children}
        </ListContext.Provider>
    )
}
 
export default ListContextProvider ;