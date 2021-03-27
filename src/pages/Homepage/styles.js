import { makeStyles } from "@material-ui/core/styles";
import { appDrawerWidth } from "../../globals";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: `calc(100% - ${appDrawerWidth}px)`,
  },
  welcomeText: {
    margin: "0",
    fontSize: "24px",
  },
}));
