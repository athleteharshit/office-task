import {
  Grid,
  makeStyles,
  Typography,
  ThemeProvider,
  Container,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardHeader,
  Box,
  Fab,
  BottomNavigation,
  BottomNavigationAction,
  Avatar,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import theme from "./theme";
import Sidebar from "./Sidebar";
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  sidebar: {},
  content: {
    backgroundColor: "#f5f5f5",
  },
  mainHeading: {
    fontSize: "20px",
    fontWeight: 500,
    color: "#4a4a4a",
    padding: "10px 0 20px",
  },
  bottomNavigation: {
    backgroundColor: "inherit",
  },
  bottomNavigationAction: {
    borderBottom: "2px solid #66180d",
  },
  cardContent: {
    padding: "0px 10px",
    color: "#848484",
  },
  fab: { position: "absolute", top: "10px", right: "10px", color: "red" },
}));

const createDataFunction = (img, avatar, name, date, paragraph) => {
  return { img, avatar, name, date, paragraph };
};

const data = [
  createDataFunction(
    "https://images.unsplash.com/photo-1560243563-062bfc001d68?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "HG",
    "Harshit Gupta",
    "card1.1",
    "card1.2"
  ),
  createDataFunction(
    "https://images.unsplash.com/photo-1571867424485-369464ed33cc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    "CC",
    "Carl Cooper",
    "card2.1",
    "card2.2"
  ),
  createDataFunction(
    "https://images.unsplash.com/photo-1571363550774-801761d09d79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "CC",
    "Carl Cooper",
    "card3.1",
    "card3.2"
  ),
  createDataFunction(
    "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=758&q=80",
    "CG",
    "Carl Gooper",
    "card4.1",
    "card4.2"
  ),
  createDataFunction(
    "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "CG",
    "Carl Cooper",
    "card5.1",
    "card5.2"
  ),
  createDataFunction(
    "https://images.unsplash.com/photo-1589413566549-5cdc36605c7a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDd8fGNsb3RoaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "CG",
    "Carl Cooper",
    "card6.1",
    "card6.2"
  ),
  createDataFunction(
    "https://images.unsplash.com/photo-1571867424485-369464ed33cc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    "CC",
    "Carl Cooper",
    "card7.1",
    "card7.2"
  ),
  createDataFunction(
    "https://images.unsplash.com/photo-1589413566549-5cdc36605c7a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDd8fGNsb3RoaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "CG",
    "Carl Cooper",
    "card8.1",
    "card8.2"
  ),
  createDataFunction(
    "https://images.unsplash.com/photo-1571363550774-801761d09d79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "GC",
    "Gordon Cruz",
    "card9.1",
    "card9.2"
  ),
];

const HomeLatest = () => {
  const [value, setValue] = useState(0);
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} className={classes.content}>
          <Header />
          <Container>
            <Typography variant="h6" className={classes.mainHeading}>
              {t("Sidebar.1")}
            </Typography>
            <BottomNavigation
              showLabels
              component={Box}
              maxWidth={300}
              className={classes.bottomNavigation}
              mb={2}
            >
              <BottomNavigationAction
                className={classes.bottomNavigationAction}
                value={value}
                component={Box}
                borderBottom={1}
                borderColor="primary.main"
                label={
                  <Typography color="primary">{t("HomeLatest.1")}</Typography>
                }
                onChange={(e, newValue) => {
                  setValue(newValue);
                }}
              />
              <BottomNavigationAction
                component={Box}
                label={<Typography>{t("HomeLatest.2")}</Typography>}
              />
            </BottomNavigation>
            <Grid container spacing={2}>
              {data.map((item, index) => (
                <Grid item sm={3} xs={12} key={index}>
                  <Card>
                    <CardActionArea>
                      <Fab size="medium" className={classes.fab}>
                        <FavoriteIcon />
                      </Fab>
                      <CardMedia component="img" image={item.img} />
                    </CardActionArea>
                    <CardHeader
                      avatar={<Avatar>{item.avatar}</Avatar>}
                      title={item.name}
                      subheader={t(item.date)}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography component="p" variant="body2">
                        {t(item.paragraph)}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default HomeLatest;
