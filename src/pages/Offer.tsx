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
              TWOJE ZAJ??CIA Z MATEMATYKI
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
                  ZAJ??CIA STACJONARNE
                </Typography>
              </Toolbar>
            </AppBar>
            <Typography variant='body1' color='textPrimary' align='justify'>
              Podczas pandemii nie rezygnuj?? jednak z tradycyjnej formy zaj????.
              Pomimo tylu zalet p??yn??cych z zaj???? online cz?????? os??b woli
              pozosta?? przy klasycznych korepetycjach, bo jednak nic nie zast??pi
              kontaktu na ??ywo. Dodatkowo posiadam r????ne gad??ety pomagaj??ce w
              nauce, jak np. zestaw bry?? przestrzennych, dzi??ki kt??rym o wiele
              szybciej i lepiej idzie nauka stereometrii. Zaj??cia odbywaj?? si?? w
              Bia??ymstoku, na ulicy Wierzbowej.
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={6} md={6} lg={6} xl={6} className={classes.grid}>
          <Container>
            <AppBar position='static' className={classes.header} elevation={0}>
              <Toolbar>
                <Typography variant='h4' color='textPrimary' align='justify'>
                  ZAJ??CIA ONLINE
                </Typography>
              </Toolbar>
            </AppBar>
            <Typography variant='body1' color='textPrimary' align='justify'>
              Od kilku lat jest to coraz bardziej popularna metoda udzielania
              korepetycji, w szczeg??lno??ci podczas pandemii. Forma ta daje wiele
              mo??liwo??ci, mi??dzy innymi takie jak mo??liwo???? wyboru nauczyciela z
              ca??ego kraju, mo??liwo???? zachowania dystansu spo??ecznego, brak
              konieczno??ci dojazdu do nauczyciela, dzi??ki czemu mo??na
              zaoszcz??dzi?? sporo czasu, w szczeg??lno??ci mieszka??com mniejszych
              miejscowo??ci, w kt??rych ci????ko znale???? korepetytora. Zapraszam
              wszystkich do zapisywania si?? na zaj??cia online w tak wygodnej
              formie, mam odpowiednie zaplecze, dzi??ki kt??remu zaj??cia te s??
              r??wnie efektowne jak zaj??cia na ??ywo.
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
          Jak wygl??daj?? zaj??cia online?
        </Typography>
        <Typography variant='body2' color='textPrimary' align='justify'>
          O ustalonej godzinie dzwoni?? do ucznia przez Messengera b??d?? Skype
          oraz wysy??am link do tablicy, na kt??rej b??dziemy pracowa?? (z ka??d??
          osob?? mam indywidualn?? tablic??). Na tablicy oboje piszemy i widzimy co
          pisze druga osoba w czasie rzeczywistym. Wrzucam tam skany
          podr??cznik??w, pliki z zadaniami oraz prace domowe. Wszystko co robimy
          na tablicy zostaje tam dop??ki kto?? tego r??cznie nie skasuje, dzi??ki
          temu ??atwo jest wr??ci?? do tego co robili??my oraz usprawnia sprawdzanie
          prac domowych. Dzi??ki r????nym funkcjom tablicy bardzo ??atwo i
          przyjemnie wykonuje si?? r????ne rysunki, co usprawnia nauk?? chocia??by
          geometrii, a dzi??ki ???gumce??? notatki pozostaj?? czyste i klarowne. Na
          koniec dodam, ??e cz?????? os??b po spr??bowaniu zaj???? online nie chce
          wr??ci?? do tradycyjnych zaj????.
        </Typography>
        <Button
          variant='contained'
          color='secondary'
          className={classes.button}
          onClick={() => {
            history.push("/kontakt");
          }}
        >
          ZAPISZ SI?? NA ZAJ??CIA
        </Button>
      </Box>
    </Container>
  );
};

export default Offer;
