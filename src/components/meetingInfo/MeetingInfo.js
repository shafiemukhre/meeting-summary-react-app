import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Typography, Box } from '@material-ui/core'
import TodayIcon from '@material-ui/icons/Today';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { Topics } from './Topics'
import { useFetch } from './TopicsAPI'
import { useFetchMembers } from './MembersAPI'
import { Members } from './Members'
import { useFetchConversation } from './ConversationAPI'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1, 
    },
    paper: {
        padding: theme.spacing(2),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    chipStyle: {
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(0.5),
        },
      },
}))

export default function MeetingInfo() {
    const classes = useStyles()
    const conversationid = 5427431447986176
    const datas = useFetch(`https://api.symbl.ai/v1/conversations/${conversationid}/insights`)

    const members = useFetchMembers(`https://api.symbl.ai/v1/conversations/${conversationid}`)

    const conversations = useFetchConversation(`https://api.symbl.ai/v1/conversations/${conversationid}`)

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                        <Paper className = {classes.paper} elevation={3}>
                            <Box p={2}>
                                <Typography variant="h4">
                                    {conversations[0]}
                                </Typography>
                                <Box p={1} display="flex" flexDirection="row">
                                    <Box alignItems="center" display="flex" pr={2}>
                                        <TodayIcon/>
                                        <Typography display="inline">
                                            {conversations[1]}
                                        </Typography>
                                    </Box>
                                    <Box alignItems="center" display="flex" p={2}>
                                        <ScheduleIcon/>
                                        <Typography display="inline">
                                            {conversations[2]}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box p={1}>
                                    <Typography>Attendees</Typography>
                                    <div className={classes.chipStyle}>
                                        {members.map( (member, i) => {
                                                return (
                                                    <Members key={i} member={member[0]}></Members>
                                                ) 
                                        })}
                                    </div>

                                </Box>
                                <Box p={1}>
                                    <Typography>Summary Topics</Typography>
                                    <div className={classes.chipStyle}>
                                        {datas.map( (data, i) => {
                                            if (data[1]==='topic'){
                                                return (
                                                        <Topics key={i} topic={data[2]}></Topics>
                                                ) 
                                            } else { return null }
                                        })}
                                    </div>

                                </Box>
                            </Box>
                        </Paper>
                </Grid>
            </Grid>
        </div>
    )
}