import React from 'react'
import Home from './components/Home'
//import HomeSeo from './components/Seo'
import Typography from '@material-ui/core/Typography'
import './assets/index.css';

function App() {
  return (
        <div class="bg-gray-100">
          <div class="py-5 my-5 min-h-48 flex flex-col justify-center"> 
            <Home></Home>    
            <div class="py-4 my-3">
              <Copyright />
            </div>        
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