import React from "react";
import { Snackbar, Slide } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import PropTypes from 'prop-types';

/**
 * 
 * @param {{
 * openAlert: boolean, 
 * msg: string, 
 * severity: ('error'| 'info'| 'success'| 'warning')
 * }} param0 
 */

export default function Snackbars({ openAlert = false, msg = '', severity = 'success', handleClose=()=>{} }) {
  return (
    <Snackbar open={openAlert} TransitionComponent={(props) => { return <Slide {...props} direction="up" /> }} >
      <Alert severity={severity} onClose={handleClose}>
        {msg}
      </Alert>
    </Snackbar>
  );
}

Snackbar.propTypes = {
  openAlert: PropTypes.bool,
  msg: PropTypes.string, //  general message don't know what expected
  severity: PropTypes.string
}