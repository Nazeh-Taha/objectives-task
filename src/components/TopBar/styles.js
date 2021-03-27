import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import { appDrawerWidth, insideDrawerWidth } from "../../globals";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  appBar: {
    marginLeft: appDrawerWidth,
    width: `calc(100% - ${appDrawerWidth}px)`,
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  appBarShift: {
    width: `calc(100% - ${appDrawerWidth}px - ${insideDrawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: insideDrawerWidth,
  },
  buttonsContainer: {
    marginLeft: "auto",
  },
  avatarIconButton: {
    marginRight: "24px",
  },
  icon: {
    color: grey[500],
  },
}));

export const useTooltipStyle = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.white,
  },
  tooltip: {
    display: "flex",
    flexDirection: "column",
    boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: theme.palette.common.white,
    padding: "8px 16px",
    color: theme.palette.common.black,
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: "14px",
  },
}));
