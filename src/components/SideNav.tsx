import React from "react";
import { useHistory, useLocation } from "react-router";

import { Box, Container, makeStyles } from "@material-ui/core";
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
      overflow: "hidden",
    },
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
      height: "100vh",
    },
    root: {
      display: "flex",
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
    active: {
      textAlign: "center",
      height: "100px",
      borderBottom: "3px solid yellow",
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
  const location = useLocation();

  const menuItems = [
    {
      text: "ZAJĘCIA",
      path: "/zajecia",
    },
    {
      text: "OFERTA",
      path: "/oferta",
    },
    {
      text: "CENNIK",
      path: "/cennik",
    },
    {
      text: "O MNIE",
      path: "/omnie",
    },
    {
      text: "KONTAKT",
      path: "/kontakt",
    },
  ];

  return (
    <Box display='flex'>
      <Box
        className={classes.drawer}
        border={1}
        borderColor='text.primary'
        position='fixed'
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
                  button
                  key={e.text}
                  onClick={() => {
                    history.push(e.path);
                  }}
                  className={
                    location.pathname == e.path ? classes.active : classes.link
                  }
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
      </Box>
      <Box marginLeft='234px'>{children}</Box>
    </Box>
  );
};

export default SideNav;
