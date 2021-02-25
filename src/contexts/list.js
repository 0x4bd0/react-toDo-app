import { createContext, useState } from "react";


const ListContext = createContext()


const ListContextProvider = (props) => {

    let [list,setList] = useState([])

    return (  
        <ListContext.Provider    value={{list}}>
            {props.children}
        </ListContext.Provider>
    )
}
 
export default ListContextProvider ;