import { Button, Box, Input, makeStyles } from "@material-ui/core";
import { useContext, useState } from "react";
import { ListContext } from "../contexts/list";


const useStyles = makeStyles((theme) => ({
    root : {
     padding : '20px',
     borderTop : '1px solid',
     borderLeft : '1px solid',
     borderRight : '1px solid',
     borderTopLeftRadius : '12px',
     borderTopRightRadius : '12px'

    },
    input: {
      width: '80%',
    },
    btn: {
      width: '10%',
    },
  }));

const InputComponent = () => {
    const classes = useStyles();

    let listContext = useContext(ListContext)
    let [input,setInput] = useState('')

    let { dispatch } = listContext

    return ( 
        <Box className={classes.root} >
        <Input placeholder="Do this and that ..." className={classes.input} 
        value={input}
        onChange={
            (val) => setInput(val.target.value)
        }
        ></Input>
        <Button variant="contained" color="primary" className={classes.btn} 
        onClick={()=>{
          dispatch({type:'add',payload:{text:input}})
          setInput('')
        } 
        }
        >+</Button>
        </Box>
     );
}
 
export default InputComponent;