import { useState } from "react";
import {
  Drawer,
  IconButton,
  Icon,
  TextField,
  Button,
  FormControl,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";
import { addObjectives, editObjectives } from "../../../api/organizationStrategy.api";

const StrategyDrawer = ({ state = {} }) => {
  const classes = useStyles();

  const users = useSelector((state) => state.auth.users);


  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={state.organizationStrategyDrawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <h3 className={classes.drawerTitle}>{state.editObjectiveMode === 1 ? 'Edit Objective':'Add Objectives'}</h3>
        <IconButton onClick={() => state.dispatcher({type: 'toggleOrganizationStrategyDrawer'})}>
          <Icon>close</Icon>
        </IconButton>
      </div>
      <FormControl className={classes.formInput}>
        <TextField
          variant="outlined"
          label="Objective"
          value={state.objectiveTitle}
          onChange={(e) => state.dispatcher({type: 'changeObjectiveTitleValue', value: e.target.value})}
        />
      </FormControl>
      <FormControl className={classes.formInput}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={async () => 
            state.editObjectiveMode === 1 ?
            state.dispatcher({type: 'editObjectiveConfirm', response: await editObjectives(state.objectiveTitle, 0, state.objectiveId)}):
            state.dispatcher({type: 'addObjectives', objective: await addObjectives(state.objectiveTitle, 0)})
          }
          disabled={!state.objectiveTitle}
        >
          {state.editObjectiveMode === 1 ? 'edit':'Submit'}
        </Button>
      </FormControl>
    </Drawer>
  );
};

export default StrategyDrawer;
