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
    container: {
      maxWidth: "2000px",
    },
    sectionOne: {
      padding: "20px",
    },
    sectionOneHeader: {
      marginBottom: "40px",
      fontWeight: 600,
    },
    sectionTwo: {
      marginBottom: "40px",
      fontSize: "30px",
    },
    sectionTwoHeader: {
      margin: "40px",
      fontWeight: 600,
      fontSize: "30px",
    },
    title: {
      width: "45vw",
      height: "90px",
      margin: "60px auto",
      background: theme.palette.text.primary,
    },
    grid: {
      margin: "0 auto",
      padding: theme.spacing(0, 5),
      [theme.breakpoints.down("lg")]: {
        padding: theme.spacing(0, 2),
      },
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(0, 0),
      },
    },

    button: {
      display: "block",
      margin: "40px auto",
      fontSize: "20px",
      fontWeight: 400,
      fontFamily: "poster-gothic-round-atf, sans-serif",
    },
  })
);
const PriceList = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Container className={classes.container}>
      <Grid container>
        <Grid item xs={10} md={10} lg={10} xl={10} className={classes.grid}>
          <Container className={classes.title}>
            <Typography variant='h1' color='textSecondary' align='center'>
              TWOJE CENTRUM KOREPETYCJI
            </Typography>
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
          Math Team to idealne miejsca dla każdego chcącego zgłębiać wiedzę
          matematyczną jak i kształtować logiczne myślenie, między innymi:
        </Typography>
        <Typography variant='body2' color='textPrimary' align='justify'>
          - Dla dzieci chcących od najmłodszych lat zagłębiać się w świat
          matematyki jak również nie narobić sobie zaległości na przyszłe lata,
          bo to właśnie one są głównym problem uczniów starszych klas.
          <br />- Dla uczniów chcących zdać z klasy do klasy lub nadrobić
          zaległości.
          <br />- Dla tych, dla których matura z matematyki stoi na przeszkodzie
          dostania się na wymarzone studia humanistyczne.
          <br />- Dla osób chcących zdać maturę na maksymalnie wysokim poziomie,
          czy to matura podstawowa czy rozszerzona.
          <br />- Dla studentów wszystkich kierunków.
          <br />- Jak również dla osób dorosłych. Uważam, że matematyką powinien
          zajmować się każdy, kto myśli o samorozwoju. Jeśli ćwiczymy mięśnie na
          siłowni, to dlaczego nie trenować swojego najważniejszego narządu –
          mózgu? Bo czego uczy matematyka jak nie logicznego myślenia?
        </Typography>
      </Box>
      <Box>
        <Typography
          variant='body2'
          color='secondary'
          align='center'
          className={classes.sectionTwoHeader}
        >
          CENNIK
        </Typography>
        <Typography
          variant='body2'
          color='textPrimary'
          align='center'
          className={classes.sectionTwo}
        >
          Szkoła podstawowa i średnia - 80zł/60min
          <br />
          Studia wyższe ustalane indywidualnie, w zależności od poziomu itp. od
          80zł/60min
        </Typography>
        <Typography
          variant='body2'
          color='textPrimary'
          align='center'
          className={classes.sectionTwo}
        >
          Zajęcia w grupach:
          <br />
          Grupa 2 osobowa: 120zl (całość)
          <br />
          Grupa 3 osobowa: 140zł (całość)
          <br />
          Zajęć w większych grupach ze względu na ograniczone miejsce na razie
          nie prowadzę.
        </Typography>
        <Typography
          variant='body2'
          color='textPrimary'
          align='center'
          className={classes.sectionTwo}
        >
          Pomoc w projektach, robienie analiz, statystyk itp. - cena ustalana
          indywidualnie.
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

export default PriceList;
