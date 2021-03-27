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
