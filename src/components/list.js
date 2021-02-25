import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import { useContext, useState } from 'react';
import {ListContext} from '../contexts/list';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    margin : '0 auto',
    border : '1px solid #00000038;',
    borderRadius : '12px'
  },
}));

export default function CheckboxListSecondary() {
  const classes = useStyles();
    const listContext = useContext(ListContext)

   let {  list, dispatch } = listContext


  return (
    <List  className={classes.root}>
      {list.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem key={value.id} button>
            <ListItemAvatar>
              <Avatar
                alt={value.text.split('').reverse().pop().toUpperCase()}
               src={`/static/images/avatar/${value + 1}.jpg`}
              />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={value.text} />
            <ListItemSecondaryAction>
              <Checkbox
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
  );
}