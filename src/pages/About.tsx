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
import { useHistory } from "react-router";

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
    button: {
      display: "block",
      margin: "40px auto",
      fontSize: "20px",
      fontWeight: 400,
      fontFamily: "poster-gothic-round-atf, sans-serif",
    },
    sectionOne: {},
    sectionOneHeader: {
      marginBottom: "20px",
      fontWeight: 600,
      fontSize: "30px",
    },
  })
);
const About = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Container className={classes.container}>
      <Grid container>
        <Grid item xs={10} md={10} lg={10} xl={10} className={classes.grid}>
          <Container className={classes.title}>
            <Typography variant='h1' color='textSecondary' align='center'>
              TWÓJ KOREPETYTOR Z MATEMATYKI
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={6} md={6} lg={6} xl={6} className={classes.grid}>
          <Container>
            <Box className={classes.sectionOne}>
              <Typography
                variant='body2'
                color='secondary'
                align='justify'
                className={classes.sectionOneHeader}
              >
                Kamil Maszkowski
              </Typography>
              <Typography variant='body2' color='textPrimary' align='justify'>
                Pasję do matematyki mam już od pierwszych lat swojego życia, już
                jako mały chłopiec – uczeń szkoły podstawowej, pomagałem
                starszej siostrze odrabiać prace domowe. Dzieckiem byłem dość
                "kręconym" i niechętnie siadałem do nauki, ale ta matma jakoś
                sama wchodziła do głowy. Pod koniec 6 klasy usłyszałem od swojej
                nauczycielki matematyki, że zostanę kiedyś matematykiem, tak też
                się stało. Podczas gimnazjum i liceum byłem jednym z najlepszych
                w szkole i zawsze pomagałem słabszym kolegom w nauce do
                sprawdzianów. Po maturze nadszedł czas na studia, wybór kierunku
                mógł być tylko jeden – Matematyka. Jednocześnie zacząłem
                udzielać korepetycji. Początkowo, były to prośby znajomych o
                przygotowanie do matury, bądź sprawdzianów itp. Sprawiało mi to
                frajdę, widziałem realne efekty naszej pracy. Na drugim roku
                studiów zamieściłem pierwsze ogłoszenia i zacząłem przekazywać
                wiedzę większej grupie osób. Po 5 latach studiowania, ukończyłem
                studia magisterskie na Uniwersytecie w Białymstoku, na kierunku
                Matematyka – specjalizacja matematyka finansowa i obroniłem się
                na 5, a praca magisterska pod tytułem "Configurations
                representing a skew perspective" została opublikowana w
                czasopiśmie naukowym. Po studiach w 2017 roku wiedziałem co chcę
                w życiu robić – przekazywać wiedzę i zarażać pasją do
                matematyki, nawet kilka osób po naszych korepetycjach zaczęło
                studiować matematykę. Ze względu na złe warunki panujące w
                szkołach zdecydowałem się na samodzielną naukę i zająłem się
                profesjonalnym udzielaniem korepetycji na pełen etat. Podczas
                wieloletniego doświadczenia zdobyłem bardzo duże umiejętności
                nauczania oraz spore grono zadowolonych uczniów.
              </Typography>
            </Box>
          </Container>
        </Grid>

        <Grid item xs={6} md={6} lg={6} xl={6} className={classes.grid}>
          <Container>
            <Box>
              <img src={image1} alt='costam' />
            </Box>
          </Container>
        </Grid>
      </Grid>
      <Button
        onClick={() => {
          history.push("/kontakt");
        }}
        variant='contained'
        color='secondary'
        className={classes.button}
      >
        ZAPISZ SIĘ NA ZAJĘCIA
      </Button>
    </Container>
  );
};

export default About;
