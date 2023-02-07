import React, { useState } from "react";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
} from "@material-ui/core";
import ForumIcon from "@material-ui/icons/Forum";
import { useStyles } from "../HeaderStyles";

export default function Messages() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dropDownData = [
    { label: "Vedant", desc: "likes your feds ..." },
    { label: "Rishi", desc: "likes your feds ..." },
    { label: "Arun", desc: "likes your feds ..." },
    { label: "Sakshi", desc: "likes your feds ..." },
  ];

  return (
    <Box>
      <IconButton
        aria-controls="Messages"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <Badge badgeContent={4} color="secondary">
          <ForumIcon />
        </Badge>
      </IconButton>
      <Menu
        id="Messages"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <List className={classes.navlist}>
          {dropDownData.map((item, i) => (
            <ListItem key={i} onClick={handleClose}>
              <ListItemIcon>
                <Avatar className={classes.ulAvater}>
                  {item.label[0].toUpperCase()}
                </Avatar>
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                secondary={item.desc}
              ></ListItemText>
            </ListItem>
          ))}
        </List>
      </Menu>
    </Box>
  );
}
