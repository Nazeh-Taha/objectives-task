import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    deleteDialog: {
        '& .MuiDialog-paperWidthMd':{
        borderRadius: 16
        }
    },
    deletePaper: {
        width: 698,
        padding: '0 32px'
    },
    deleteHeader: {
        padding: '32px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& > h4': {
            margin: 0,
            fontSize: 34,
            fontStyle: 'normal',
            fontWeight: 700,
            letterSpacing: 0.25
        },
        '& > div': {
            width: 48,
            height: 48,
            borderRadius: '50%',
            backgroundColor: '#FAFAFA',
            padding: 12,
            color: 'rgba(0, 0, 0, 0.54)',
            cursor: 'pointer'
        }
    },
    deleteContent:{
        '& > p':{
            margin: 0,
            padding: '32px 0 24px',
            fontSize: 16,
            fontWeight: 500.
        },
        '& > div':{
            padding: '8px 16px',
            borderRadius: 8,
            backgroundColor: '#F5F5F5',
            fontSize: 16,
            fontWeight: 'normal'
        }
    },
    deleteActions: {
        float: 'right',
        padding: '65px 0 32px 0'
    }

}));