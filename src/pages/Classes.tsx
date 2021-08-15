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
    },
    title: {
      width: "45vw",
      height: "90px",
      margin: "60px auto",
      background: theme.palette.text.primary,
    },
    grid: {
      margin: "0 auto",
      padding: theme.spacing(0, 3),
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
    button: {
      display: "block",
      margin: "40px auto",
      fontSize: "20px",
      fontWeight: 400,
      fontFamily: "poster-gothic-round-atf, sans-serif",
    },
    image: {
      display: "block",
      width: "80%",
      margin: "0 auto",
    },
  })
);
const Classes = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container>
        <Grid item xs={10} md={10} lg={10} xl={10} className={classes.grid}>
          <Container className={classes.title}>
            <Typography variant='h1' color='textSecondary' align='center'>
              MATEMATYKA DLA KAŻDEGO
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={4} md={4} lg={4} xl={4} className={classes.grid}>
          <Container>
            <AppBar position='static' className={classes.header} elevation={5}>
              <Toolbar>
                <Typography variant='h4' color='textPrimary' align='justify'>
                  PRZYJAZNA ATMOSFERA
                </Typography>
              </Toolbar>
            </AppBar>
            <Typography variant='body1' color='textPrimary' align='justify'>
              Zajęcia przebiegają w swobodnej atmosferze, tak żeby każdy
              zrozumiał, że z matematyką można łatwo się "zaprzyjaźnić". Jestem
              29-letnim matematykiem, rozumiem młodzież i to w jaki sposób do
              nich dotrzeć. Przed zajęciami prawie zawsze przywita Was Bunio -
              kot mojej żony.
            </Typography>
            <Box marginTop='40px'>
              <img src={image1} alt='costam' className={classes.image} />
            </Box>
          </Container>
        </Grid>
        <Grid item xs={4} md={4} lg={4} xl={4} className={classes.grid}>
          <Container>
            <AppBar position='static' className={classes.header} elevation={5}>
              <Toolbar>
                <Typography variant='h4' color='textPrimary' align='justify'>
                  MATEMATYKA DLA KAŻDEGO
                </Typography>
              </Toolbar>
            </AppBar>
            <Typography variant='body1' color='textPrimary' align='justify'>
              Mam blisko 10-letnie doświadczenie, podczas, którego opracowałem
              różne metody nauczania i dostosowuje je do konkretnego ucznia,
              dlatego nie mogę jednoznacznie odpowiedzieć na pytanie - "jak
              będziemy się uczyć?" - jest to sprawa indywidualna. Nie uczę na
              zasadzie: "to zadanie robi się tak, a to zadanie tak".
              Najważniejsze jest dla mnie, aby uczeń zrozumiał, dlaczego robi
              się to w taki, a nie inny sposób. Odpowiednimi pytaniami,
              nakierowuje ucznia tak, aby sam odkrył większość odpowiedzi.
            </Typography>
            <Button
              variant='contained'
              color='secondary'
              className={classes.button}
            >
              ZAPISZ SIĘ NA ZAJĘCIA
            </Button>
          </Container>
        </Grid>
        <Grid item xs={4} md={4} lg={4} xl={4} className={classes.grid}>
          <Container>
            <AppBar position='static' className={classes.header} elevation={5}>
              <Toolbar>
                <Typography variant='h4' color='textPrimary' align='justify'>
                  PROFESJONALNE PODEJŚCIE
                </Typography>
              </Toolbar>
            </AppBar>
            <Typography variant='body1' color='textPrimary' align='justify'>
              Zacząłem uczyć matematyki, bo uważam, że to jedna z
              najpiękniejszych naukowych dyscyplin, która nie tylko pozwala nam
              dostać dobrą ocenę na zajęciach, ale pozwala zrozumieć otaczający
              nas świat i przyda się w prawie każdej dziedzinie życia. Dlatego
              uważam, że powinna być zrozumiała dla każdego i jest! O czym
              przekonasz się zapisując się na moje zajęcia,
            </Typography>
            <Box marginTop='40px'>
              <img src={image1} alt='costam' className={classes.image} />
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Classes;
