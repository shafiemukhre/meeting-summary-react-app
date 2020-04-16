import React from 'react'
import MeetingInfo from './components/meetingInfo/MeetingInfo'
import NavBar from './components/layouts/NavBar'
import { Grid } from '@material-ui/core'
import Insights from './components/meetingInsights/Insights'

function App() {
  
  return (
    <div className="App">
        <NavBar />
        <br/><br/>
        <Grid container>
          <Grid item xs={false} sm={1} ></Grid>
          <Grid item xs={12} sm={10}>
            <br/>
            <MeetingInfo />
            <br/><br/>
            <Insights/>
            <br/><br/> 
          </Grid>
          <Grid item xs={false} sm={1} ></Grid>
        </Grid>
    </div>
  )
}

export default App;