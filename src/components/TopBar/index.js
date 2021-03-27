import { useState } from "react";
import { AppBar, IconButton, Icon, Tooltip } from "@material-ui/core";
import { useStyles, useTooltipStyle } from "./styles";
import { useSelector } from "react-redux";
import clsx from "clsx";

const TopBar = ({ drawerIsOpen }) => {
  const classes = useStyles();
  const tooltip = useTooltipStyle();

  const [tooltipIsOpen, setTooltipIsOpen] = useState(false);
  const userData = useSelector((state) => state.auth.userData);

  return (
    <AppBar
      position="static"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: drawerIsOpen,
      })}
    >
      <div className={classes.buttonsContainer}>
        <Tooltip
          title={
            <>
              <span>{userData.first_name}</span>
              <span>{userData.position}</span>
            </>
          }
          open={tooltipIsOpen}
          onOpen={() => setTooltipIsOpen(true)}
          onClose={() => setTooltipIsOpen(false)}
          arrow
          classes={tooltip}
        >
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            className={classes.avatarIconButton}
          >
            <Icon className={classes.icon}>account_circle</Icon>
          </IconButton>
        </Tooltip>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
        >
          <Icon className={classes.icon}>filter_list</Icon>
        </IconButton>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
        >
          <Icon className={classes.icon}>more_horiz</Icon>
        </IconButton>
      </div>
    </AppBar>
  );
};

export default TopBar;
