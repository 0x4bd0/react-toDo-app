import { Button, Box, Input, makeStyles } from "@material-ui/core";
import { useContext, useState } from "react";
import { ListContext } from "../contexts/list";


const useStyles = makeStyles((theme) => ({
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
        <Box>
        <Input placeholder="Do this and that ..." className={classes.input} 
        value={input}
        onChange={
            (val) => setInput(val.target.value)
        }
        ></Input>
        <Button variant="contained" color="primary" className={classes.btn} 
        onClick={()=>dispatch({type:'add',payload:{text:input}})}
        >+</Button>
        </Box>
     );
}
 
export default InputComponent;