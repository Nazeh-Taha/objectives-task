import { useState } from "react";
import {
  Drawer,
  IconButton,
  Icon,
  TextField,
  Button,
  FormControl,
  FormLabel,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";

const PortfolioDrawer = ({ open, setOpen }) => {
  const classes = useStyles();

  const users = useSelector((state) => state.auth.users);

  const [title, setTitle] = useState("");
  const [managedBy, setManagedBy] = useState("");
  const [, setManagerID] = useState("");

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <h3 className={classes.drawerTitle}>Portfolio Title</h3>
        <IconButton onClick={() => setOpen(false)}>
          <Icon>close</Icon>
        </IconButton>
      </div>
      <FormControl component="fieldset" className={classes.formInput}>
        <FormLabel component="legend">Projects</FormLabel>
        <strong>5</strong>
      </FormControl>
      <FormControl className={classes.formInput}>
        <TextField
          variant="outlined"
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormControl>
      <FormControl className={classes.formInput}>
        <Autocomplete
          id="combo-box-demo"
          options={users}
          getOptionLabel={(user) =>
            `${user.pk} ${user.first_name} ${user.last_name}`
          }
          inputValue={managedBy}
          onInputChange={(e, user) => {
            setManagedBy(user);
            setManagerID(user.split(" ")[0]);
          }}
          renderInput={(params) => (
            <TextField {...params} label="Managed By" variant="outlined" />
          )}
        />
      </FormControl>
      <FormControl className={classes.formInput}>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          onClick={() => {}}
        >
          DELETE PORTFOLIO
        </Button>
      </FormControl>
      <FormControl className={classes.formInput}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={() => {}}
        >
          OK
        </Button>
      </FormControl>
    </Drawer>
  );
};

export default PortfolioDrawer;
