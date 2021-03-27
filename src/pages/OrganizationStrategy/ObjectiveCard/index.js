
import { Card, Grid, Typography,Grow } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { useStyles } from "./styles";

const ObjectiveCard = ({ objective = { title: '' }, state={} }) => {
    const classes = useStyles();
    return (
        <Grow
        in={true}
        {...({ timeout: 700 })}
    >
        <Card className={classes.objectiveCard}>
            <Grid container  >
                <Grid item xs={11} className={classes.kpiDisc}>
                    <h4>{objective.title}</h4>
                    <Typography variant="body1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut</Typography>
                </Grid>
                <Grid item xs={1} className={classes.kpiControl}>
                    <EditIcon className={classes.objectiveEdit} onClick={() => state.dispatcher({ type: 'editObjective', id: objective.id, title: objective.title})}/>
                    <DeleteOutlineIcon  className={classes.objectiveDelete}  onClick={() => state.dispatcher({ type: 'openDeleteDialog', id: objective.id})}/>
                </Grid>
            </Grid>
            <div className={classes.kpiContainer}>
                <p>KTIs</p>
                <div className={classes.addKti}>
                    <p><AddIcon /> ADD NEW KTI</p>
                </div>
            </div>
        </Card>
        </Grow>
    );
};

export default ObjectiveCard;