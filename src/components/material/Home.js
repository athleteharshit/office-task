import {
  Grid,
  makeStyles,
  Typography,
  ThemeProvider,
  Container,
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Fab
} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
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
  addNew: {
    border: "2px dotted grey",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Home = () => {
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
              My Background
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={4}>
                <Box className={classes.addNew}>
                  <Typography>Add New</Typography>
                  <Fab color="primary" aria-label="add" component={Box} mt={2}>
                    <AddIcon />
                  </Fab>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image="https://images.unsplash.com/photo-1571363550774-801761d09d79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=758&q=80"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image="https://images.unsplash.com/photo-1589413566549-5cdc36605c7a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDd8fGNsb3RoaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image="https://images.unsplash.com/photo-1571363550774-801761d09d79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=758&q=80"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image="https://images.unsplash.com/photo-1589413566549-5cdc36605c7a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDd8fGNsb3RoaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image="https://images.unsplash.com/photo-1589413566549-5cdc36605c7a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDd8fGNsb3RoaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Home;
