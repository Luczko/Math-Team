import React from "react";
import { useHistory, useLocation } from "react-router";

import { Container, makeStyles } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { AddCircleOutlined, SubjectOutlined } from "@material-ui/icons";
import { AppBar, Toolbar } from "@material-ui/core";
import { info } from "console";

const drawerWidth = 234;

const useStyles = makeStyles((theme) => {
  return {
    containerTitle: {
      width: "234px",
      height: "193px",
      lineHeight: "193px",
      textAlign: "center",
      padding: "0",
      background: theme.palette.primary.main,
    },
    containerLinks: {
      width: "234px",
      height: "100%",
      lineHeight: "193px",
      textAlign: "center",
      padding: "0",
      background: theme.palette.info.main,
    },
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    active: {
      background: "#f4f4f4",
    },
    title: {
      display: "inline-block",
      verticalAlign: "middle",
      color: theme.palette.info.main,
    },
    list: {
      marginTop: "40px",
    },
    link: {
      textAlign: "center",
      height: "100px",
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
  };
});

const SideNav: React.FC = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  //   const location = useLocation();

  const menuItems = [
    {
      text: "ZAJĘCIA",
      path: "/",
    },
    {
      text: "OFERTA",
      path: "/create",
    },
    {
      text: "CENNIK",
      path: "/create",
    },
    {
      text: "O MNIE",
      path: "/create",
    },
    {
      text: "KONTAKT",
      path: "/create",
    },
  ];

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        classes={{ paper: classes.drawerPaper }}
      >
        <Container component='div' className={classes.containerTitle}>
          <Typography variant='h2' className={classes.title}>
            MATH<br></br>TEAM
          </Typography>
        </Container>

        {/* list / links */}
        <Container component='div' className={classes.containerLinks}>
          <List className={classes.list}>
            {menuItems.map((e) => {
              return (
                <ListItem
                  className={classes.link}
                  button
                  key={e.text}
                  onClick={() => {
                    history.push(e.path);
                  }}
                  // className={
                  //   location.pathname == e.path ? classes.active : undefined
                  // }
                >
                  <ListItemText
                    primary={e.text}
                    primaryTypographyProps={{
                      variant: "h3",
                      color: "textSecondary",
                    }}
                  />
                </ListItem>
              );
            })}
          </List>
        </Container>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default SideNav;
