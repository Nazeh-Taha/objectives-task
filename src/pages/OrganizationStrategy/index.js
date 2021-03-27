import { useEffect } from "react";
import TopBar from "../../components/TopBar";
import ObjectiveCard from './ObjectiveCard';
import AppDrawer from "../../components/AppDrawer";
import {
  Breadcrumbs,
  Link,
  Typography,
  Divider,
  Grid,
  Card,
} from "@material-ui/core";
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FlagIcon from '@material-ui/icons/Flag';
import AddIcon from '@material-ui/icons/Add';
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link as RouterLink } from "react-router-dom";
import { useOrganizationStrategyStyles } from "./styles";
import clsx from "clsx";
import StrategyDrawer from "./StrategyDrawer";
import DeleteObjective from './DeleteObjective';
import Snackbars from '../../components/Snackbars'
import { deleteObjectives, getObjectives } from '../../api/organizationStrategy.api';
import { useOrganizationStrategyReducer } from './state/reducer';
const OrganizationStrategy = () => {
  const classes = useOrganizationStrategyStyles();
  const [organizationStrategyState, organizationStrategyDispatcher] = useOrganizationStrategyReducer();


  useEffect(() => {
    (async () => {
      organizationStrategyDispatcher({ type: 'getAllObjectives', data: await getObjectives() });
    })();
  }, []);

  console.log(organizationStrategyState)
  return (
    <div className={classes.container}>
      <TopBar drawerIsOpen={organizationStrategyState.organizationStrategyDrawer} />
      <AppDrawer />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: organizationStrategyState.organizationStrategyDrawer,
        })}
      >
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link color="inherit" component={RouterLink} to="/">
            Portfolio Pro
          </Link>
          <Typography color="textPrimary">Organization Strategy</Typography>
        </Breadcrumbs>
        <header className={classes.mainHeader}>
          <h1 className={classes.mainTitle}>Organization Strategy</h1>
        </header>
        <Divider />
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={6} >
            <Card className={classes.card}>
              <header className={classes.cardHeader}>
                <div className={classes.iconHeader} style={{ backgroundColor: '#219653' }}>
                  <VisibilityIcon />
                </div>
                <h3 className={classes.cardTitle}>Vision</h3>
              </header>
              <footer className={classes.cardFooter}>
                <Typography variant="body2" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </footer>
            </Card>
          </Grid>
          <Grid item xs={6} >
            <Card className={classes.card}>
              <header className={classes.cardHeader}>
                <div className={classes.iconHeader} style={{ backgroundColor: '#F2C94C' }}>
                  <FlagIcon />
                </div>
                <h3 className={classes.cardTitle}>Mission</h3>
              </header>
              <footer className={classes.cardFooter}>
                <Typography variant="body2" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </footer>
            </Card>
          </Grid>
        </Grid>
        <Card className={classes.objectiveCards}>
          <header className={classes.objectiveCardsHeader}>
            <div className={classes.objectiveCardTitle}>
              <div className={classes.iconHeader} style={{ backgroundColor: '#2F80ED' }}>
                <GpsFixedIcon />
              </div>
              <h3 className={classes.cardTitle}>Objectives ({organizationStrategyState.objectives.length})</h3>
            </div>
            <div className={classes.objectiveAdd}>
              <AddIcon onClick={() => organizationStrategyDispatcher({ type: 'toggleOrganizationStrategyDrawer' })} />
            </div>
          </header>
          {/* ------------------------------Map over Objectives-------------------------------------- */}
          {organizationStrategyState.objectives.length > 0 &&
            <div className={classes.objectiveContainer}>
              {organizationStrategyState.objectives.map((objective) => (
                <ObjectiveCard
                  key={objective.id}
                  objective={objective}
                  state={{ ...organizationStrategyState, dispatcher: organizationStrategyDispatcher }} />
              ))}
            </div>
          }
        </Card>
      </main>
      {/* ------------------------------Side Drawer------------------------------- */}
      <StrategyDrawer
        state={{ ...organizationStrategyState, dispatcher: organizationStrategyDispatcher }}
      />
      {/* ------------------------------Delete objective confirm dialog--------------------------- */}
      <DeleteObjective
        open={organizationStrategyState.deleteDialog}
        onClose={() => organizationStrategyDispatcher({ type: 'closeDeleteDialog' })}
        handleDelete={async () => organizationStrategyDispatcher({ type: 'deleteObjective', response: await deleteObjectives(organizationStrategyState.objectiveId) })} />
      {/* -------------------Alert message snack bar---------------------------------------- */}
      <Snackbars
        severity={organizationStrategyState.snackbars.severity}
        openAlert={organizationStrategyState.snackbars.status}
        msg={organizationStrategyState.snackbars.message}
        handleClose={() => organizationStrategyDispatcher({ type: 'closeSnackbar' })} />
    </div>
  );
};

export default OrganizationStrategy;
