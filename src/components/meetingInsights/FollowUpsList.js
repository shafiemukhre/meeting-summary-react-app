import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Box } from '@material-ui/core'
import InsightCard from './InsightsCard'
import { useFetch } from './InsightsAPI'

const useStyles = makeStyles(() => ({
    root: {
        background: '#ccc',
        borderRadius: 5,
        width: 300,
        padding: 8,
    },
}))

export default function InsightsList({title}){
    const classes = useStyles()
    const conversationid = 5427431447986176
    const datas = useFetch(`https://api.symbl.ai/v1/conversations/${conversationid}/insights`)

    return (
        <div className={classes.root}>
            <Box p={1}>
                <Box pb={1}>
                    <Typography variant="h6">{title}</Typography>
                </Box>
                {datas.map( (data) => {
                    if (data[1]==='follow_up'){
                        return (
                            <div key={data[0]}>
                                <InsightCard key={data[0]} insightsText={data[2]}></InsightCard>
                                <br/>
                            </div>
                        ) 
                    } else { return null }
                })}
            </Box>
        </div>
    )
}