import React from 'react'
import { Typography, Card } from '@material-ui/core'

export default function InsightCard({insightsText}){
    return (
        <div>
            <Card>
                <Typography gutterBottom>
                {insightsText}
                </Typography>
            </Card>
        </div>
    )
}