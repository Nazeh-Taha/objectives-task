import { makeStyles } from "@material-ui/core/styles";
import { insideDrawerWidth } from "../../../globals";

export const useStyles = makeStyles((theme) => ({
  drawer: {
    width: insideDrawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: insideDrawerWidth,
    paddingInline: "16px",
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    display: "flex",
    alignItems: "center",
  },
  drawerTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    flexGrow: "1",
  },
  formInput: {
    marginBottom: 20,
    "& > legend": {
      marginBlock: "16px",
      color: theme.palette.text.secondary,
    },
    "& > div": {
      width: "100%",
    },
  },
}));
