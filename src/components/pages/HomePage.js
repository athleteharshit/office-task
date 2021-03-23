import {
  Box,
  Grid,
  makeStyles,
  Typography,
  Breadcrumbs,
  Link,
  Container,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardHeader,
  Avatar,
  Button,
  CardActions,
  ThemeProvider,
  createMuiTheme,
  colors,
} from "@material-ui/core";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";
import ReplyOutlinedIcon from "@material-ui/icons/ReplyOutlined";
import Header from "./Header";
import Slidebar from "./Slidebar";
import homePageData from "../../assets/data/homePage";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const HomePage = () => {
  const [darkState, setDarkState] = useState(false);
  const [like, setLike] = useState(0);
  const [cookies, setCookies] = useCookies(["user"]);
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? colors.green[600] : "#f4eeeb";
  const mainSecondaryColor = darkState ? colors.grey[800] : "#f5f5f5";

  const useStyles = makeStyles((theme) => ({
    slidebar: {
      backgroundColor: mainPrimaryColor,
    },
    homePage: {
      backgroundColor: mainSecondaryColor,
    },
  }));

  const theme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  const handleLike = () => {
    setLike((pre) => pre + 1);
    setCookies("user", { like }, { path: "/" });
  };
  console.log(cookies);

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs={2} className={classes.slidebar}>
          <Slidebar />
        </Grid>
        <Grid item xs={10} className={classes.homePage}>
          <Header handleThemeChange={handleThemeChange} darkState={darkState} />
          <Box bgcolor="#fff" mt={1} p={1.5}>
            <Typography
              variant="h4"
              style={{
                fontSize: "20px",
                color: "#4a4a4a",
                fontWeight: 500,
                display: "inline",
              }}
            >
              Home
            </Typography>
          </Box>
          <Container>
            <Box m={2.5}>
              <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" style={{ fontSize: "16px" }}>
                  LATEST
                </Link>
                <Typography color="textPrimary" style={{ fontSize: "16px" }}>
                  FOLLLOWING
                </Typography>
              </Breadcrumbs>
            </Box>
            <Grid container spacing={3}>
              {homePageData.map((item, index) => (
                <Grid item xs={4} key={item.id}>
                  <Card>
                    <CardActionArea>
                      <CardMedia component="img" image={item.img} />
                      <CardHeader
                        avatar={<Avatar>{item.avatar}</Avatar>}
                        action={
                          <Button
                            style={{
                              backgroundColor: "#66180d",
                              color: "#fff",
                            }}
                          >
                            Follow
                          </Button>
                        }
                        title={item.title}
                        subheader={item.subHeader}
                      />
                    </CardActionArea>
                    <CardActions>
                      <Button
                        startIcon={<ThumbUpAltOutlinedIcon />}
                        size="small"
                        onClick={handleLike}
                      >
                        {like} Likes
                      </Button>
                      <Button startIcon={<CommentOutlinedIcon />} size="small">
                        Comment
                      </Button>
                      <Button startIcon={<ReplyOutlinedIcon />} size="small">
                        Share
                      </Button>
                    </CardActions>
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

export default HomePage;
