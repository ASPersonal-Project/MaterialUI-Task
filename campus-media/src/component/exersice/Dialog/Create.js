import React, { Fragment } from 'react';
import {Button,TextField,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle, makeStyles} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyle = makeStyles(() =>({
   
}))

const Create = () => {
    const classes = useStyle();
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
      };

    const handleClickOpen = () => {
        setOpen(true)
    }
    
    return (
        <Fragment >
             <Button variant="text"  component="span" onClick={handleClickOpen}>
          <AddIcon/>
        </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">create new exersice</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Plese fill form below
          </DialogContentText>
          <form>
            <TextField
            id="filled-password-input"
            label="Exersices"
            type="text"
            fullWidth='true'
            maxWidth='md'
            />
            <br/>
            <TextField
                id="standard-multiline-flexible"
                label="Description"
                multiline
                rowsMax={4}
                margin="normal"
        />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
           Create
          </Button>
        </DialogActions>
      </Dialog>
        </Fragment>
    )
}

export default Create;
