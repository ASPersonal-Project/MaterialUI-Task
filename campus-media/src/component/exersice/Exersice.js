import React from 'react'
import {Grid, Paper,Typography,List,ListItem,ListItemText,ListItemSecondaryAction,IconButton} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Edit,Delete} from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    paper:{
        padding:20,
        marginTop:5,
        // height:400,
        height: 'calc(100% - 10px)',
        overflow:'auto'
    },
    heading:{
        textTransform:'capitalize'
    },
    container:{
        height: 'calc(100% - 64px - 48px)'
    },

   '@global':{
       'html,body,#root': {
           height: '100%'
       }
   }
}))

const Exersice = () =>{
    const classes = useStyles();
    return (
        <Grid container className={classes.container}>
            <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                <Typography variant="h5" className={classes.heading}> Heading</Typography>
                <List  className={classes.listitem}>
                    <ListItem button>
                        <ListItemText primary="Trash" />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="comments">
                                <Edit />
                       
                            </IconButton>
                            <IconButton edge="end" aria-label="comments">
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
                <Typography variant="h5" className={classes.heading}> Heading</Typography>
                <List>
                    <ListItem button className={classes.listitem}>
                        <ListItemText primary="Trash" />
                    </ListItem>
                </List>
                <List className={classes.listitem}>
                    <ListItem button >
                        <ListItemText primary="Trash" />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="comments">
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
                <Typography variant="h5" className={classes.heading}> Heading</Typography>
                <List>
                    <ListItem button className={classes.listitem}>
                        <ListItemText primary="Trash" />
                    </ListItem>
                </List>
                <Typography variant="h5" className={classes.heading}> Heading</Typography>
                <List>
                    <ListItem button className={classes.listitem}>
                        <ListItemText primary="Trash" />
                    </ListItem>
                </List>
                
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                 <Typography variant="h4">Welcome</Typography>
                 <Typography variant="h6">Welcome sjowetji klsjfsi</Typography>
                </Paper>
            </Grid>
           
        </Grid>
    )
}

export default Exersice;
