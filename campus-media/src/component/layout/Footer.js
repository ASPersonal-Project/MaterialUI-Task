import React from 'react';
import {Paper,Tabs,Tab} from '@material-ui/core'

const Footer = ({muscles}) => {
    return (
        <Paper>
      <Tabs
        
        value={2}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {muscles.map(group =><Tab label={group} />)}
        
      </Tabs>
    </Paper>
    )
}

export default Footer;
