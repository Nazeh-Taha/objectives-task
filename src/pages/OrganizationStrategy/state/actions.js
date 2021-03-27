
//---------------------------------------------organization Strategy Actions--------------------------------------------------
export const organizationStrategyActions = (prevState, action) => {
  switch (action.type) {
    case 'getAllObjectives': // Get all objectives data
      return {
        ...prevState,
        objectives: action.data
      }
    case 'addObjectives': // add new objectives 
      if (action.objective.severity === 'success') {
        return {
          ...prevState,
          objectives: [action.objective.data, ...prevState.objectives],
          organizationStrategyDrawer: false,
          objectiveTitle: ''
        }
      } else {
        return {
          ...prevState,
          snackbars: action.objective
        }
      }
    case 'closeSnackbar': // close alert snack bar
      return {
        ...prevState,
        snackbars: {
          severity: 'success',
          status: false,
          message: ''
        }
      }
    case 'toggleOrganizationStrategyDrawer': // open - close drawer
      return {
        ...prevState,
        organizationStrategyDrawer: !prevState.organizationStrategyDrawer,
        editObjectiveMode: 0,
        objectiveTitle: ''
      }
    case 'changeObjectiveTitleValue': // change objective input value
      return {
        ...prevState,
        objectiveTitle: action.value
      }
    case 'openDeleteDialog': // open delete confirm dialog
      return {
        ...prevState,
        deleteDialog: true,
        objectiveId: action.id
      }
    case 'closeDeleteDialog': // close delete confirm dialog
      return {
        ...prevState,
        deleteDialog: false
      }
    case 'deleteObjective': // delete specific objective
      if (action.response.severity === 'success') {
        return {
          ...prevState,
          objectives: prevState.objectives.filter(item => item.id !== prevState.objectiveId),
          deleteDialog: false,
        }
      } else {
        return {
          ...prevState,
          snackbars: action.objective
        }
      }
    case 'editObjective': // edit objective title
      return {
        ...prevState,
        organizationStrategyDrawer: true,
        objectiveTitle: action.title,
        objectiveId: action.id,
        editObjectiveMode: 1
      }
    case 'editObjectiveConfirm': // confirm edit objective
      if (action.response.severity === 'success') {
        return {
          ...prevState,
          objectives: prevState.objectives.map(item => item.id === action.response.data.id ? { ...item, title: action.response.data.title } : item),
          organizationStrategyDrawer: false,
          objectiveTitle: '',
          editObjectiveMode: 0
        }
      } else {
        return {
          ...prevState,
          snackbars: action.objective
        }
      }
    default:
      return {
        ...prevState
      }
  }
}
