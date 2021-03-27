import { makeStyles } from "@material-ui/core/styles";
import { appDrawerWidth, insideDrawerWidth } from "../../globals";
import { grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: `calc(100% - ${appDrawerWidth}px)`,
  },
  contentShift: {
    width: `calc(100% - ${appDrawerWidth}px - ${insideDrawerWidth}px)`,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  mainHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainTitle: {
    marginBlock: "0",
    fontSize: "34px",
    lineHeight: "70px",
    letterSpacing: "0.25px",
  },
  grid: {
    marginTop: "32px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "200px",
    padding: "16px",
    cursor: "pointer",
  },
  cardHeader: {
    "& > h3": {
      margin: "0 0 8px 0",
      fontSize: "20px",
    },
  },
  cardFooter: {
    "& > h6": {
      marginTop: "16px",
      color: grey[500],
      "& > span": {
        color: theme.palette.text.secondary,
      },
    },
  },
}));

export const useOrganizationStrategyStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: `calc(100% - ${appDrawerWidth}px)`,
  },
  contentShift: {
    width: `calc(100% - ${appDrawerWidth}px - ${insideDrawerWidth}px)`,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  mainHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainTitle: {
    marginBlock: "0",
    fontSize: "34px",
    lineHeight: "70px",
    letterSpacing: "0.25px",
  },
  grid: {
    marginTop: "32px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 152,
    padding: "16px",
   
  },
  cardHeader: {
    display:'flex',
    alignItems: 'center',
    "& > h3": {
      margin: "8px 0 8px 0", 
    },
  },
  cardFooter: {
    "& > h6": {
      marginTop: "16px",
      color: grey[500],
      "& > span": {
        color: theme.palette.text.secondary,
      },
    },
  },
  cardTitle: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 700,
    letterSpacing: 0.15000000596046448,
    textAlign: 'left'
  },
  iconHeader:{
    width:48,
    height:48,
    borderRadius: '50%',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    marginRight: 15
  },
  objectiveCards: {
    padding: "16px",
    marginTop: 24
  },
  objectiveCardsHeader: {
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    "& > h3": {
      margin: "8px 0 8px 0", 
    },
  },
  objectiveCardTitle:{
    display:'flex',
    alignItems: 'center',
  },
  objectiveAdd:{
    color: 'rgba(0, 0, 0, 0.54)',
    display: 'flex',
    cursor:'pointer',
    '& svg':{
      fontSize: 30,
    }
  },
  objectiveContainer:{
    padding: '32px 0 32px 64px'
  }
}));
