import { makeStyles } from "@material-ui/core/styles";
import { appDrawerWidth } from "../../globals";

export const useStyles = makeStyles((theme) => ({
  drawer: {
    width: appDrawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: appDrawerWidth,
    paddingInline: "16px",
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    display: "flex",
    alignItems: "center",
    paddingInline: "10px",
  },
  drawerTitle: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  listItem: {
    borderRadius: "8px",
    marginBottom: "8px",
    paddingInline: "8px",
    "&.Mui-selected, &.Mui-selected:hover": {
      backgroundColor: theme.palette.info.main,
      color: theme.palette.common.white,
    },
  },
  listItemIcon: {
    minWidth: "auto",
    marginRight: "8px",
    ".Mui-selected > &": {
      color: theme.palette.common.white,
    },
  },
  listItemText: {
    "& > span": {
      fontSize: "14px",
    },
  },
}));
