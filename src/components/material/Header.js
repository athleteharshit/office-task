import {
  Paper,
  makeStyles,
  Typography,
  Grid,
  Box,
  TextField,
  InputBase,
  Switch,
  Avatar,
  List,
  ListItemAvatar,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";

const useStyles = makeStyles((theme) => ({
  header: {},
  search: {
    color: "#c6c6c6",
  },
}));

const Header = () => {
  const { t, i18n } = useTranslation();
  const classes = useStyles();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  // console.log(t, i18n);
  return (
    <Paper px={2} component={Box} className={classes.header}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={6}>
          <Grid
            container
            spacing={1}
            alignItems="center"
            className={classes.search}
          >
            <Grid item>
              <SearchOutlinedIcon />
            </Grid>
            <Grid item>
              <InputBase placeholder={t('Header.1')} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid
            container
            spacing={1}
            justify="flex-end"
            alignItems="center"
            style={{ color: "#66180d" }}
          >
            <Grid item>
              <Button color="primary" onClick={() => changeLanguage("en")}>
                En
              </Button>
              <Button color="primary" onClick={() => changeLanguage("ger")}>
                Ger
              </Button>
            </Grid>
            <Grid item>
              <FavoriteBorderOutlinedIcon />
            </Grid>
            <Grid item>
              <ShoppingCartOutlinedIcon />
            </Grid>
            <Grid item>
              <NotificationsActiveOutlinedIcon />
            </Grid>
            <Grid item>
              <List disablePadding>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <AccountCircleOutlinedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Hi Harshit" />
                  <ArrowDropDownOutlinedIcon />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Header;
