import { useHistory, useLocation } from "react-router-dom";
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  Icon,
  ListItemText,
} from "@material-ui/core";
import { useStyles } from "./styles";

const AppDrawer = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.drawerHeader}>
        <h1 className={classes.drawerTitle}>Protfolio Pro</h1>
      </div>
      <Divider />
      <List>
        <ListItem
          button
          className={classes.listItem}
          onClick={() => history.push("/")}
          selected={location.pathname === "/"}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <Icon>home</Icon>
          </ListItemIcon>
          <ListItemText className={classes.listItemText} primary={"Home"} />
        </ListItem>
        <ListItem
          button
          className={classes.listItem}
          onClick={() => history.push("/organization-portfolios")}
          selected={location.pathname === "/organization-portfolios"}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <Icon>star</Icon>
          </ListItemIcon>
          <ListItemText
            className={classes.listItemText}
            primary={"Organization Portfolios"}
          />
        </ListItem>
        <ListItem
          button
          className={classes.listItem}
          onClick={() => history.push("/organization-strategy")}
          selected={location.pathname === "/organization-strategy"}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <Icon>star</Icon>
          </ListItemIcon>
          <ListItemText
            className={classes.listItemText}
            primary={"Organization Strategy"}
          />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default AppDrawer;
