import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'
import InsightCard from './InsightsCard'

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
    return (
        <div className={classes.root}>
            <Typography>{title}</Typography>
            <InsightCard></InsightCard>
        </div>

    )
}