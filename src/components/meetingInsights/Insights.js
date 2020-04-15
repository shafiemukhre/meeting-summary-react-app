import React from 'react';
import { Grid, Typography, Paper, Box, } from '@material-ui/core';
import { makeStyles }  from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import ActionsList from './ActionsList';
import QuestionsList from './QuestionsList'
import FollowUpsList from './FollowUpsList'

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
            <Paper className = {classes.paper} elevation={3}>
                <Box p={2}>
                    <Box pb={1}>
                        <Typography variant="h5">Insights</Typography>
                    </Box>
                    <Box>
                        <Grid container justify="center" spacing={2}>
                            <Grid item>
                                    <ActionsList title="Action Items"/>
                            </Grid>
                            <Grid item>
                                    <FollowUpsList title="Follow Ups"/>
                            </Grid>
                            <Grid item>
                                    <QuestionsList title="Questions"/>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Paper>
        </div>
    )
}