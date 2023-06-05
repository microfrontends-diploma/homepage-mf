import { Container, Typography, Grid, List, ListItem, Fade } from "@mui/material";
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';

const HomePage = () => {

  const elems: JSX.Element[] = [
    <Grid item xs={12}>
      <Typography variant="h4">Домашняя страница</Typography>
    </Grid>,
    <Grid item xs={12}>
      <Typography variant="h6">Каждая страница для этого веб сайта является отдельным микрофронтендом, загружающимся в тот момент, когда осуществляется переход по URL, к которому этот микрофронтенд привязан.</Typography>
    </Grid>,
    <Grid item xs={12}>
      <Typography variant="h6">При повторном переходе на URL микрофронтенда, который уже был ранее загружен, загрузка не осуществляется.</Typography>
    </Grid>,
    <Grid item xs={12}>
      <Typography variant="h6">Эта страница тоже является микрофронтендом, сделана при помощи React, но это мог бы быть любой другой фронтенд фреймворк, или даже ванильный JavaScript.</Typography>
    </Grid>,
    <Grid item xs={12}>
      <Typography variant="h6">Навигационное меню, висящее сверху - тоже микрофронтенд, однако лишь за тем исключением, что оно привязано ко всем маршрутам.</Typography>
    </Grid>,
    <Grid item xs={12}>
      <Typography variant="h6">В настоящее время в системе SIMuRG существует два микросервиса:</Typography>
      <List >
        <ListItem>
          <Grid container spacing={1}>
            <Grid item>
              <StackedBarChartIcon fontSize="large"/>
            </Grid>

            <Grid item>
              <Typography variant="h6">RINEX_TO_CSV</Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography>Микросервис для конвертации данных из формата RINEX
              (стандарт распространения данных ГНСС приемника) в табличный формат для
              упрощения взаимодействия научного сообщества с данными ГНСС.</Typography>
            </Grid>
          </Grid>
        </ListItem>
        <ListItem>
          <Grid container spacing={1}>
            <Grid item>
              <SatelliteAltIcon fontSize="large"/>
            </Grid>

            <Grid item>
              <Typography variant="h6">NAVI</Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography>ПО для получения координат станции по файлу наблюдений и навигационному файлу в формате RINEX.</Typography>
            </Grid>
          </Grid>
        </ListItem>
      </List>
    </Grid>,
    <Grid item xs={12}>
      <Typography variant="h6">Все зависимости, которые используются микрофронтендами, загружаются на страницу один раз. Реализовано это при помощи карты импорта.</Typography>
    </Grid>,
    <Grid item xs={12}>
      <Typography variant="h6">На странице с настройками можно привязать/отвязать микрофронтенд к доступному микросервису.</Typography>
    </Grid>
  ];

  return (
    <Container>
      <Grid container spacing={2}>
        {elems.map((elem, index) => (
          <Fade key={index} in={true} timeout={index * 500 + 500}>
            {elem}
          </Fade>
        ))}
      </Grid>
    </Container>
  );
}

export default HomePage;
