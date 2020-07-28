import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import HistoryIcon from '@material-ui/icons/History';
import UpdateIcon from '@material-ui/icons/Update';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';

import ErrorBoundary from './error-boundary';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const [listOpen, setListOpen] = React.useState(false);

  console.log('WHAT IS HAPPENING');

  return (
    <ErrorBoundary>
      <div>
        <Button onClick={() => setOpen(true)}>OPEN THIS SHIT</Button>
        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
          <div
            role="presentation"
          >
            <List>
              <ListItem button onClick={() => setOpen(false)}>
                <ListItemIcon>
                  <VideogameAssetIcon />
                </ListItemIcon>
                <ListItemText primary="CLOSE THE DRAWER" />
              </ListItem>
              <ListItem button onClick={() => setListOpen(!listOpen)}>
                <ListItemIcon>
                  <VideogameAssetIcon />
                </ListItemIcon>
                <ListItemText primary="Choose Smash Game" />
              </ListItem>
              <Collapse in={listOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button>
                    <ListItemIcon />
                    <img src="projectplus_logo_small.png" alt="project+ logo" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon />
                    <img src="melee_logo.png" alt="melee logo" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon />
                    <img src="ultimate_logo.png" alt="ultimate logo" />
                  </ListItem>
                </List>
              </Collapse>
            </List>
            <Divider />
            <List>
              {['Upcoming Events', 'Past Events', 'Top Players'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    { index === 0 && <UpdateIcon /> }
                    { index === 1 && <HistoryIcon />}
                    { index === 2 && <EmojiPeopleIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
      </div>
    </ErrorBoundary>
  );
}
