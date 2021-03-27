import {
  useReducer
} from 'react';
import {
  organizationStrategyActions
} from './actions';

//---------------------------------Organization Strategy Reducers-----------------------------------------------------

export const useOrganizationStrategyReducer = () => {
  const [state, dispatcher] = useReducer(organizationStrategyActions, {
    objectives: [],
    objectiveTitle: '',
    organizationStrategyDrawer: false,
    deleteDialog : false,
    objectiveId: null,
    editObjectiveMode: 0,//0 - create || 1 - edit
    snackbars: {
      severity: 'success',
      status: false,
      message: ''
    },
   
  });
  return [state, dispatcher];
}