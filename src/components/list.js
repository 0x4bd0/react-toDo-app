import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import { useContext, useState } from 'react';
import {ListContext} from '../contexts/list';
import ConfirmDelete from './confirmDelete'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    margin : '0 auto',
    border : '1px solid #00000038;',
    borderRadius : '12px',
    height : '60vh',
    overflowX : 'hidden',
    overflowY : 'scroll'
  },
  li : {
    borderBottom : '1px solid #ddd',
    padding : '15px 30px'
  }
}));

export default function CheckboxListSecondary() {
   const classes = useStyles();
    const listContext = useContext(ListContext)

  let [openDeleteModel,setOpenDeleteModal] = useState(false) 
   let [toBeDeleted, setTobeDeleted] = useState(null)
   let {  list, dispatch } = listContext
  
   const deletetoDo = () => {
      dispatch({
        type : 'delete',
        payload : {
          id : toBeDeleted
        }
      })
      setOpenDeleteModal(false)
      setTobeDeleted(null)
   }
    
  return (
    <div>
    <List  className={classes.root}>
      {list.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem key={value.id} button className={classes.li}>
            <ListItemAvatar>
              <Avatar
                alt={value.text.split('').reverse().pop().toUpperCase()}
               src={`/static/images/avatar/${value + 1}.jpg`}
              />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={value.text} />
            <ListItemSecondaryAction>
            <IconButton aria-label="delete" color="secondary"
            onClick={()=>{
              setTobeDeleted(value.id)
              setOpenDeleteModal(true)}}
            >
              <DeleteIcon />
            </IconButton>
              <Checkbox
              color="primary"
                edge="end"
               onChange={() => dispatch({ 
                                            type: value.done ? "uncheck" : "check",
                                            payload: {id:value.id},
                                       })}
               checked={value.done}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>

<ConfirmDelete 
openDeleteModel={openDeleteModel} 
setOpenDeleteModal={setOpenDeleteModal}
deletetoDo = {deletetoDo}
></ConfirmDelete>
    </div>

  );
}