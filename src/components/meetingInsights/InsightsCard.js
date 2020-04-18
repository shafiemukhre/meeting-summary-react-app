import React from 'react'
import { Card, Box } from '@material-ui/core'

export default function InsightCard({insightsText}){
    return (
        <div>
            <Card>
                <Box p={1}>
                    {insightsText}
                </Box>
            </Card>
        </div>
    )
}