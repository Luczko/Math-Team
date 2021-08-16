import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@material-ui/core";
import image1 from "../images/artboard1.png";
import image2 from "../images/artboard2.png";

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
      width: "calc(100vw - 234px)",
      marginTop: "120px",
    },
    title: {
      width: "45vw",
      height: "90px",
      margin: "60px auto",
      marginBottom: "10px",
      background: theme.palette.text.primary,
    },
    grid: {
      margin: "0 auto",
      marginBottom: "50px",
      padding: theme.spacing(0, 0),
      [theme.breakpoints.down("lg")]: {
        padding: theme.spacing(0, 0),
      },
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(0, 0),
      },
    },
    header: {
      maxWidth: "400px",
      margin: "0 auto",
      marginBottom: "50px",
      alignItems: "center",
      textAlign: "center",
    },
    secondHeader: {
      maxWidth: "70%",
      margin: "0 auto",
      marginTop: "150px",
      marginBottom: "20px",
      alignItems: "center",
      textAlign: "center",
      fontSize: "30px",
      lineHeight: "40px",
    },
    thirdHeader: {
      maxWidth: "70%",
      margin: "0 auto",
      marginBottom: "50px",
      paddingTop: "30px",
      paddingBottom: "30px",
      alignItems: "center",
      textAlign: "center",
      background: theme.palette.text.primary,
      color: theme.palette.text.secondary,
    },
    button: {
      display: "block",
      margin: "40px auto",
      fontSize: "20px",
      fontWeight: 400,
      fontFamily: "poster-gothic-round-atf, sans-serif",
    },
    sectionOne: {
      width: "100%",
    },
    sectionOneHeader: {
      marginBottom: "20px",
      fontWeight: 600,
      fontSize: "30px",
    },
    typo: {
      fontSize: "30px",
      lineHeight: "40px",
    },
    secondTypo: {
      fontSize: "30px",
      lineHeight: "40px",
      marginTop: "60px",
    },
    thirdTypo: {
      fontSize: "1.5vw",
      lineHeight: "1.8vw",
    },
    image: {
      display: "block",
      width: "80%",
      margin: "40px auto",
    },
  })
);

const Contact = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container>
        <Grid item xs={6} md={6} lg={6} xl={6} className={classes.grid}>
          <Container>
            <Box className={classes.sectionOne}>
              <AppBar
                position='static'
                className={classes.header}
                elevation={5}
              >
                <Toolbar>
                  <Typography
                    variant='h4'
                    color='textPrimary'
                    align='justify'
                    className={classes.typo}
                  >
                    MIEJSCE ZAJĘĆ
                  </Typography>
                </Toolbar>
              </AppBar>
              <Typography
                variant='h4'
                color='textPrimary'
                align='center'
                className={classes.secondTypo}
              >
                BIAŁYSTOK, UL. WIERZBOWA 2/156
              </Typography>
              <Box width='100%'>
                <img src={image1} alt='costam' className={classes.image} />
              </Box>
            </Box>
          </Container>
        </Grid>

        <Grid item xs={6} md={6} lg={6} xl={6} className={classes.grid}>
          <Container>
            <Box className={classes.sectionOne}>
              <Typography
                variant='h4'
                color='textPrimary'
                align='center'
                className={classes.secondTypo}
              >
                ZAJĘCIA ONLINE - Z KAŻDEGO MIEJSCA
                <br />
                NA KULI ZIEMSKIEJ ;)
              </Typography>
              <AppBar
                position='static'
                className={classes.secondHeader}
                elevation={5}
              >
                <Toolbar>
                  <Typography
                    variant='h4'
                    color='textPrimary'
                    align='center'
                    className={classes.typo}
                  >
                    KONTAKT
                  </Typography>
                </Toolbar>
              </AppBar>
              <AppBar
                position='static'
                className={classes.thirdHeader}
                elevation={5}
              >
                <Toolbar>
                  <Typography
                    variant='h4'
                    color='textSecondary'
                    align='center'
                    className={classes.thirdTypo}
                  >
                    KAMIL MASZKOWSKI - MATH TEAM
                    <br />
                    TEL. 527 154 236
                    <br />
                    MASZKOWSKI@MATH-TEAM.PL
                  </Typography>
                </Toolbar>
              </AppBar>
            </Box>
          </Container>
        </Grid>
      </Grid>
      <Typography
        variant='h4'
        color='textPrimary'
        align='center'
        className={classes.typo}
      >
        ZAJRZYJ NA MOJĄ GRUPĘ NA FACEBOOKU:
        <br />
        https://www.facebook.com/groups/528074520951649
      </Typography>
      <Button variant='contained' color='secondary' className={classes.button}>
        ODWIEDŹ NAS NA FACEBOOKU
      </Button>
    </Container>
  );
};

export default Contact;
