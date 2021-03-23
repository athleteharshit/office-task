import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
  ListItemIcon,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import QueuePlayNextOutlinedIcon from "@material-ui/icons/QueuePlayNextOutlined";
import CardTravelOutlinedIcon from "@material-ui/icons/CardTravelOutlined";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import AddToQueueOutlinedIcon from "@material-ui/icons/AddToQueueOutlined";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import CardGiftcardOutlinedIcon from "@material-ui/icons/CardGiftcardOutlined";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import companyLogo from "../../assets/img/logo@2x.png";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    backgroundColor: "#f4eeeb",
    width: "100%",
    height: "100%",
  },
  companyLogo: {
    width: "35px",
    height: "38px",
    objectFit: "cover",
    cursor: "pointer",
  },
  listItem: {
    transition: "all .2s linear",
    color: "#4a4a4a",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "#fff",
    },
  },
}));

const Sidebar = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Box component="div" className={classes.sidebar}>
      <List disablePadding>
        <ListItem>
          <ListItemAvatar>
            <img src={companyLogo} alt="" className={classes.companyLogo} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant="h5" color="primary">
                Virdrobe
              </Typography>
            }
          />
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon className={classes.listItem}>
            <HomeOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={<Typography>{t('Sidebar.1')}</Typography>} />
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon className={classes.listItem}>
            <QueuePlayNextOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={<Typography>{t('Sidebar.2')}</Typography>} />
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon className={classes.listItem}>
            <CardTravelOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={<Typography>{t('Sidebar.3')}</Typography>} />
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon className={classes.listItem}>
            <GroupOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={<Typography>{t('Sidebar.4')}</Typography>} />
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon className={classes.listItem}>
            <AddToQueueOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={<Typography>{t('Sidebar.5')}</Typography>} />
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon className={classes.listItem}>
            <QuestionAnswerOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={<Typography>{t('Sidebar.6')}</Typography>} />
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon className={classes.listItem}>
            <CardGiftcardOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={<Typography>{t('Sidebar.7')}</Typography>} />
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon className={classes.listItem}>
            <CalendarTodayOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={<Typography>{t('Sidebar.8')}</Typography>} />
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon className={classes.listItem}>
            <SettingsOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={<Typography>{t('Sidebar.9')}</Typography>} />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
