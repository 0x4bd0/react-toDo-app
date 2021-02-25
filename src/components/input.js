import { Input, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
    },
  }));

const InputComponent = () => {
    const classes = useStyles();

    return ( 
        <Input placeholder="Do this and that ..." className={classes.root}></Input>
     );
}
 
export default InputComponent;