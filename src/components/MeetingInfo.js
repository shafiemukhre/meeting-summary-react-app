import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Typography, Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1, 
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}))

export default function MeetingInfo() {
    const classes = useStyles

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className = {classes.paper} elevation={3}>
                        <Typography variant="h6">Meeting Title</Typography>
                            <Box>
                                <Typography display="inline" >Date, </Typography>
                                <Typography display="inline" >Time, </Typography>
                                <Typography display="inline">Duration</Typography>
                            </Box>
                            <Typography>Attendees:</Typography>
                            <Typography>Summary Topics</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}