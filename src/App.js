import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets'
import './App.css'
import Grid from '@material-ui/core/Grid';



function App() {
  return (
  
    <div className="app">
      
        {/* <h1>Twitter App Clone 🤖</h1>   */}
      <Grid container spacing={3}>

          <Grid item xs={3}>

              <Sidebar />
            {/* Sidebar */}

          </Grid>

          <Grid item xs={6}>
            <Feed />
            {/* Feed// */}

          </Grid>


          <Grid item xs={3}>
              <Widgets />
              {/* Widgets */}
          </Grid>
      
      </Grid>
    </div>
  );
}

export default App;
