import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'
import InsightCard from './InsightsCard'
// import auth from '../auth.json'

const useStyles = makeStyles(() => ({
    root: {
        background: '#ccc',
        borderRadius: 5,
        width: 300,
        padding: 8,
    },
}))

const useFetch = (url) => {
    const [data, setData] = useState([])

    useEffect( () => {
        async function fetchData(){
            const response = await fetch(url,{
                method: 'GET',
                headers: {
                    'x-api-key': "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFVUTRNemhDUVVWQk1rTkJNemszUTBNMlFVVTRRekkyUmpWQ056VTJRelUxUTBVeE5EZzFNUSJ9.eyJpc3MiOiJodHRwczovL2RpcmVjdC1wbGF0Zm9ybS5hdXRoMC5jb20vIiwic3ViIjoiU1FEVmZtMldhWkY5VjU0dXFwUGxiaEtscjR1bWN2N09AY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcGxhdGZvcm0ucmFtbWVyLmFpIiwiaWF0IjoxNTg2ODE2NDQ0LCJleHAiOjE1ODY5MDI4NDQsImF6cCI6IlNRRFZmbTJXYVpGOVY1NHVxcFBsYmhLbHI0dW1jdjdPIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.JpgyzsAQ_5ARCLSE1-LDjivEnZDv8e4pAxitA3Srmsqzq1xXi1p9v7YfLBDr34tLXTNAlRjOcGrQF_BUvyYfq5gjJQoz6h_c4w03vv1TSL16oHdw66pWeccXKdB07P3rtjyCc91I6HwcfAtJ7bNFItp7MCV8bJk3adIaAAunKe-Qrs1nKS2pLOoeQYFocy6zcNZw9hKabuck9HR4XXYHpqQSQCFuPfnAKrWsGNgzftLRE6P01PpKyXVr0Xfe5RBQSmg2xM_WmkNbWdKsrvH27iuZxmpbuG_0cLP6by8RnW3OE_aupXo-0-qSCTjwhx9vYyQuVAFXJmIiTOEXLVNMjA"
                }
            })
            const data = await response.json()
            const item = data.insights.map((item) => ([
                item.id,
                item.type,
                item.text
            ]))
            setData(item)
        }
        fetchData(url)
    },[url])

    return data
}

export default function InsightsList({title}){
    const classes = useStyles()
    const conversationid = 5427431447986176
    const datas = useFetch(`https://api.symbl.ai/v1/conversations/${conversationid}/insights`)

    return (
        <div className={classes.root}>
            <Typography>{title}</Typography>
            {datas.map( (data) => {
                console.log(data)
                if (data[1]==='action_item'){
                    return (
                        <div>
                            <InsightCard insightsText={data[2]}></InsightCard>
                            <br/>
                        </div>
                    ) 
                } else { return null }
            })}
        </div>
    )
}