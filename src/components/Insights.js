import React from 'react';
import { Grid, Typography, } from '@material-ui/core';
import { makeStyles }  from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import InsightsList from './InsightsList';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1, 
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

    blockStyles: {
        color: grey,
    },
}))

export default function MeetingInfo() {
    const classes = useStyles

    return (
        <div className={classes.root}>
            <Typography variant="h6">Insights</Typography>
            <Grid container>
                <InsightsList title="Action Items"/>
            </Grid>
        </div>
    )
}