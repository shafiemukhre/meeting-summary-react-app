import React from 'react'
import { Typography, Card, Box } from '@material-ui/core'

export default function InsightCard({insightsText}){
    return (
        <div>
            <Card>
                <Typography gutterBottom>
                    <Box p={1}>
                        {insightsText}
                    </Box>
                </Typography>
            </Card>
        </div>
    )
}