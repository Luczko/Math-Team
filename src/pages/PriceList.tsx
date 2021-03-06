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
          Math Team to idealne miejsca dla ka??dego chc??cego zg????bia?? wiedz??
          matematyczn?? jak i kszta??towa?? logiczne my??lenie, mi??dzy innymi:
        </Typography>
        <Typography variant='body2' color='textPrimary' align='justify'>
          - Dla dzieci chc??cych od najm??odszych lat zag????bia?? si?? w ??wiat
          matematyki jak r??wnie?? nie narobi?? sobie zaleg??o??ci na przysz??e lata,
          bo to w??a??nie one s?? g????wnym problem uczni??w starszych klas.
          <br />- Dla uczni??w chc??cych zda?? z klasy do klasy lub nadrobi??
          zaleg??o??ci.
          <br />- Dla tych, dla kt??rych matura z matematyki stoi na przeszkodzie
          dostania si?? na wymarzone studia humanistyczne.
          <br />- Dla os??b chc??cych zda?? matur?? na maksymalnie wysokim poziomie,
          czy to matura podstawowa czy rozszerzona.
          <br />- Dla student??w wszystkich kierunk??w.
          <br />- Jak r??wnie?? dla os??b doros??ych. Uwa??am, ??e matematyk?? powinien
          zajmowa?? si?? ka??dy, kto my??li o samorozwoju. Je??li ??wiczymy mi????nie na
          si??owni, to dlaczego nie trenowa?? swojego najwa??niejszego narz??du ???
          m??zgu? Bo czego uczy matematyka jak nie logicznego my??lenia?
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
          Szko??a podstawowa i ??rednia - 80z??/60min
          <br />
          Studia wy??sze ustalane indywidualnie, w zale??no??ci od poziomu itp. od
          80z??/60min
        </Typography>
        <Typography
          variant='body2'
          color='textPrimary'
          align='center'
          className={classes.sectionTwo}
        >
          Zaj??cia w grupach:
          <br />
          Grupa 2 osobowa: 120zl (ca??o????)
          <br />
          Grupa 3 osobowa: 140z?? (ca??o????)
          <br />
          Zaj???? w wi??kszych grupach ze wzgl??du na ograniczone miejsce na razie
          nie prowadz??.
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
          ZAPISZ SI?? NA ZAJ??CIA
        </Button>
      </Box>
    </Container>
  );
};

export default PriceList;
