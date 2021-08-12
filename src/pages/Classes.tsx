import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { AppBar, Box, Container, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.primary,
    },
    container: {
      maxWidth: "2000px",

      marginTop: "193px",
    },
    grid: {
      padding: theme.spacing(0, 5),
      [theme.breakpoints.down("lg")]: {
        padding: theme.spacing(0, 2),
      },
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(0, 0),
      },
    },
    header: {
      marginBottom: "50px",
      alignItems: "center",
      textAlign: "center",
    },
  })
);
const Classes = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container>
        <Grid item xs={4} md={4} lg={4} xl={4} className={classes.grid}>
          <Container>
            <AppBar position='static' className={classes.header} elevation={0}>
              <Toolbar>
                <Typography variant='h4' color='textPrimary' align='justify'>
                  PRZYJAZNA ATMOSFERA
                </Typography>
              </Toolbar>
            </AppBar>
            <Typography variant='body1' color='textPrimary' align='justify'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              odio distinctio architecto, porro quia dolor suscipit unde.
              Excepturi incidunt repellendus, possimus atque nobis illo. Enim
              nihil illum nam nostrum accusantium! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Delectus odio distinctio architecto,
              porro quia dolor suscipit unde. Excepturi incidunt repellendus,
              possimus atque nobis illo. Enim nihil illum nam nostrum
              accusantium!
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={4} md={4} lg={4} xl={4} className={classes.grid}>
          <Container>
            <AppBar position='static' className={classes.header} elevation={0}>
              <Toolbar>
                <Typography variant='h4' color='textPrimary' align='justify'>
                  MATEMATYKA DLA KAŻDEGO
                </Typography>
              </Toolbar>
            </AppBar>
            <Typography variant='body1' color='textPrimary' align='justify'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              odio distinctio architecto, porro quia dolor suscipit unde.
              Excepturi incidunt repellendus, possimus atque nobis illo. Enim
              nihil illum nam nostrum accusantium! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Delectus odio distinctio architecto,
              porro quia dolor suscipit unde. Excepturi incidunt repellendus,
              possimus atque nobis illo. Enim nihil illum nam nostrum
              accusantium!
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={4} md={4} lg={4} xl={4} className={classes.grid}>
          <Container>
            <AppBar position='static' className={classes.header} elevation={0}>
              <Toolbar>
                <Typography variant='h4' color='textPrimary' align='justify'>
                  PROFESJONALNE PODEJŚCIE
                </Typography>
              </Toolbar>
            </AppBar>
            <Typography variant='body1' color='textPrimary' align='justify'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              odio distinctio architecto, porro quia dolor suscipit unde.
              Excepturi incidunt repellendus, possimus atque nobis illo. Enim
              nihil illum nam nostrum accusantium! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Delectus odio distinctio architecto,
              porro quia dolor suscipit unde. Excepturi incidunt repellendus,
              possimus atque nobis illo. Enim nihil illum nam nostrum
              accusantium!
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Classes;
