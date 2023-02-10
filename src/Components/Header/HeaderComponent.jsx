import React, { useState } from "react";
import { Box } from "@material-ui/core";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../BodyComponent/Dashboard/Dashboard";
import Landloard from "../BodyComponent/Landloard";
import MyRecords from "../BodyComponent/MyRecords";
import Repairer from "../BodyComponent/Repairer";
import Property from "../BodyComponent/Property";
import Logout from "../BodyComponent/Logout";
import EditForm from "../BodyComponent/Dashboard/EditForm";
import { useStyles } from "./HeaderStyles";
import Signin from "../BodyComponent/Signin";


export default function HeaderComponent() {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerOpen = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };
  return (
    <div>
      <Navbar handleDrawerOpen={handleDrawerOpen} />
      <Sidenav
        mobileOpen={mobileOpen}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      {/* // registerian our routes  */}
      <Box className={classes.wrapper}>
        <Switch>
          {/* <Route path='/' component={<Dashboard />} /> */}
          <Route exact path="/Landloard" render={() => <Landloard />} />
          <Route exact path="/MyRecords" render={() => <MyRecords />} />
          <Route exact path="/Repairer" render={() => <Repairer />} />
          <Route exact path="/Property" render={() => <Property />} />
          <Route exact path="/logout" render={() => <Logout />} />
          <Route exact path="/" render={() => <Dashboard />} />
          <Route exact path="/Signin" render={() => <Signin />} />
          <Route exact path="/EditForm" render={() => <EditForm/>} />
        </Switch>
      </Box>
    </div>
  );
}
