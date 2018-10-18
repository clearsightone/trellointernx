
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LockOpen from '@material-ui/icons/LockOpen';
import NotificationsActive from '@material-ui/icons/NotificationsActive';
import Lock from '@material-ui/icons/Lock';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import ViewColumn from '@material-ui/icons/ViewColumn';
import DeleteIcon from '@material-ui/icons/Delete';
import SettingsIcon from '@material-ui/icons/Settings';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';


export const NavBar =()=> (  

  <div>
  <List>
    <ListItem button>
      <ListItemIcon>
        <LockOpen />
      </ListItemIcon>
      <ListItemText primary="My public boards" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Lock />
      </ListItemIcon>
      <ListItemText primary="My private boards" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AddCircleOutline />
      </ListItemIcon>
      <ListItemText primary="Create new board" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <NotificationsActive />
      </ListItemIcon>
      <ListItemText primary="Notifications" />
    </ListItem>
  </List>
  <Divider/>
<List>
    <ListItem button>
      <ListItemIcon>
        <ViewColumn />
      </ListItemIcon>
      <ListItemText primary="All boards" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary="Trash" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
  </List>
  </div>
);

