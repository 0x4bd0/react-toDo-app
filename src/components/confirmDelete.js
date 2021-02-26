import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const ConfirmDelete = ({openDeleteModel,setOpenDeleteModal,deletetoDo}) => {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [open, setOpen] = useState(openDeleteModel);

    useEffect(()=>{
        setOpen(openDeleteModel)
    },[openDeleteModel])
    
      const handleClose = () => {
        setOpenDeleteModal(false);
      };

    return ( 
        <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="delete-todo"
      >
        <DialogTitle id="delete-todo">Delete toDo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this todo ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={deletetoDo} color="primary" autoFocus>
            Continue
          </Button>
        </DialogActions>
      </Dialog>
     );
}
 
export default ConfirmDelete;