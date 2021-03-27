import React from 'react';
import { Dialog, Paper, Slide, Button, Divider, DialogActions } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from "./styles";

const DeleteObjective = ({ onClose = () => { }, handleDelete = () => { }, open = false }) => {

    const classes = useStyles();
    return (
        <Dialog maxWidth='md' className={classes.deleteDialog} open={open} onClose={onClose} >
            <Paper className={classes.deletePaper}>
                <div className={classes.deleteHeader}>
                    <h4>Delete Objective</h4>
                    <div>
                        <CloseIcon onClick={() => onClose()} />
                    </div>
                </div>
                <Divider />
                <div className={classes.deleteContent}>
                    <p>You’re about to delete an objective linked with 1 KPI , Are you sure?</p>
                    <div>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    </div>
                </div>
                <div className={classes.deleteActions}>
                    <Button color="primary" style={{ marginRight: 27 }} onClick={() => onClose()}>cancel</Button>
                    <Button variant="contained" color="secondary" onClick={() => handleDelete()}>delete</Button>
                </div>
            </Paper>
        </Dialog>

    );
};


export default DeleteObjective;