import React from 'react'
import MeetingInfo from './components/MeetingInfo'
import NavBar from './components/NavBar'
import { Grid, Paper } from '@material-ui/core'
import Insights from './components/Insights'


function App() {
  
  return (
    <div className="App">
        <NavBar />
        <Grid container>
          <Grid item xs={0} sm={1} ></Grid>
          <Grid item xs={12} sm={10}>
            <br/>
            <MeetingInfo />
            <br/>
            <Paper>
            <Insights/> 
            </Paper>

          </Grid>
          <Grid item xs={0} sm={1} ></Grid>
        </Grid>


    </div>
  )
}

export default App;