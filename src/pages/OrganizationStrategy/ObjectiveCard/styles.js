import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    objectiveCard: {
        borderRadius: 0,
        minHeight: 305,
        marginTop: 24,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    kpiContainer: {
        height: 200,
        backgroundColor: '#F5F5F5',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        '& > p': {
            fontFamily: 'Roboto',
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: 700,
            letterSpacing: 0.15000000596046448,
            textAlign: 'left',
            margin: 0
        },

    },
    kpiDisc: {
        padding: 16,
        '& > h4': {
            fontSize: 25,
            fontStyle: 'normal',
            fontWeight: 600,
            letterSpacing: 0,
            margin: 0,
            marginButton: 16
        },
        '& > p': {
            margin: '16px 0 0 0',
        }
    },
    kpiControl: {
        padding: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        '& svg': {
            color: 'rgba(0, 0, 0, 0.54)',
            cursor: 'pointer'
        }
    },
    addKti: {
        width: 264,
        height: 128,
        border: '2px dashed #8080807a',
        display: 'flex',
        alignItems: 'flex-end',
        '& > p': {
            fontSize: 15,
            fontWeight: 500,
            color: '#007DFF',
            cursor: 'pointer',
            padding: 16,
            display: 'flex',
            alignItems: 'center',
            margin: 0
        }
    },
    objectiveEdit: {
        transition: '0.4s',
        '&:hover': {
            color: '#2196f3',
        }
    },
    objectiveDelete: {
        transition: '0.4s',
        '&:hover': {
            color: 'red',

        }
    }
}));
