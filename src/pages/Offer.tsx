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
      padding: theme.spacing(0, 2),
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
    sectionOne: {
      padding: "60px",
    },
    sectionOneHeader: {
      marginBottom: "40px",
      fontWeight: 600,
    },
    image: {
      display: "block",
      width: "100%",
      margin: "0 auto",
    },
  })
);
const Offer = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Container className={classes.container}>
      <Grid container>
        <Grid item xs={10} md={10} lg={10} xl={10} className={classes.grid}>
          <Container className={classes.title}>
            <Typography variant='h1' color='textSecondary' align='center'>
              TWOJE ZAJĘCIA Z MATEMATYKI
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={6} md={6} lg={6} xl={6} className={classes.grid}>
          <Container>
            <Box>
              <img src={image1} alt='costam' className={classes.image} />
            </Box>
          </Container>
        </Grid>
        <Grid item xs={6} md={6} lg={6} xl={6} className={classes.grid}>
          <Container>
            <AppBar position='static' className={classes.header} elevation={5}>
              <Toolbar>
                <Typography variant='h4' color='textPrimary' align='justify'>
                  ZAJĘCIA STACJONARNE
                </Typography>
              </Toolbar>
            </AppBar>
            <Typography variant='body1' color='textPrimary' align='justify'>
              Podczas pandemii nie rezygnuję jednak z tradycyjnej formy zajęć.
              Pomimo tylu zalet płynących z zajęć online część osób woli
              pozostać przy klasycznych korepetycjach, bo jednak nic nie zastąpi
              kontaktu na żywo. Dodatkowo posiadam różne gadżety pomagające w
              nauce, jak np. zestaw brył przestrzennych, dzięki którym o wiele
              szybciej i lepiej idzie nauka stereometrii. Zajęcia odbywają się w
              Białymstoku, na ulicy Wierzbowej.
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={6} md={6} lg={6} xl={6} className={classes.grid}>
          <Container>
            <AppBar position='static' className={classes.header} elevation={0}>
              <Toolbar>
                <Typography variant='h4' color='textPrimary' align='justify'>
                  ZAJĘCIA ONLINE
                </Typography>
              </Toolbar>
            </AppBar>
            <Typography variant='body1' color='textPrimary' align='justify'>
              Od kilku lat jest to coraz bardziej popularna metoda udzielania
              korepetycji, w szczególności podczas pandemii. Forma ta daje wiele
              możliwości, między innymi takie jak możliwość wyboru nauczyciela z
              całego kraju, możliwość zachowania dystansu społecznego, brak
              konieczności dojazdu do nauczyciela, dzięki czemu można
              zaoszczędzić sporo czasu, w szczególności mieszkańcom mniejszych
              miejscowości, w których ciężko znaleźć korepetytora. Zapraszam
              wszystkich do zapisywania się na zajęcia online w tak wygodnej
              formie, mam odpowiednie zaplecze, dzięki któremu zajęcia te są
              równie efektowne jak zajęcia na żywo.
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={6} md={6} lg={6} xl={6} className={classes.grid}>
          <Container>
            <Box marginTop='80px'>
              <img src={image2} alt='costam' className={classes.image} />
            </Box>
          </Container>
        </Grid>
      </Grid>
      <Box className={classes.sectionOne}>
        <Typography
          variant='body2'
          color='secondary'
          align='justify'
          className={classes.sectionOneHeader}
        >
          Jak wyglądają zajęcia online?
        </Typography>
        <Typography variant='body2' color='textPrimary' align='justify'>
          O ustalonej godzinie dzwonię do ucznia przez Messengera bądź Skype
          oraz wysyłam link do tablicy, na której będziemy pracować (z każdą
          osobą mam indywidualną tablicę). Na tablicy oboje piszemy i widzimy co
          pisze druga osoba w czasie rzeczywistym. Wrzucam tam skany
          podręczników, pliki z zadaniami oraz prace domowe. Wszystko co robimy
          na tablicy zostaje tam dopóki ktoś tego ręcznie nie skasuje, dzięki
          temu łatwo jest wrócić do tego co robiliśmy oraz usprawnia sprawdzanie
          prac domowych. Dzięki różnym funkcjom tablicy bardzo łatwo i
          przyjemnie wykonuje się różne rysunki, co usprawnia naukę chociażby
          geometrii, a dzięki „gumce” notatki pozostają czyste i klarowne. Na
          koniec dodam, że część osób po spróbowaniu zajęć online nie chce
          wrócić do tradycyjnych zajęć.
        </Typography>
        <Button
          variant='contained'
          color='secondary'
          className={classes.button}
          onClick={() => {
            history.push("/kontakt");
          }}
        >
          ZAPISZ SIĘ NA ZAJĘCIA
        </Button>
      </Box>
    </Container>
  );
};

export default Offer;
