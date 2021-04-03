import React from 'react'
import Home from './components/Home'
import Typography from '@material-ui/core/Typography'
import './assets/index.css';

function App() {

  return (
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
          <Home></Home>
      <div class="py-6 my-5">
          <Copyright />
      </div>
    </div>
  );
}

function Copyright() {
  return (
    <div class="footer">
      <Typography variant="body2" color="" align="center">
        &#128293; {'@avflo'}
      </Typography>
    </div>

  );
}


export default App