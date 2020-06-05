import React from 'react'
import Home from './components/Home'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import './App.sass'
import DevGuy from './devguy.svg'
//import logo from './logo.svg'

function Copyright() {
  return (
    <div class="footer">
      <Typography variant="body2" color="#FFFFFF" align="center">
        {'Made with '}<Icon>free_breakfast</Icon> {'from the end of the world'}
      </Typography>
    </div>

  );
}

function App() {

  return (
    <div class="App">
      <div class="skewe"></div>
      <div class="container">

      <div class="">
        <div class="center pt-5 mt-5">
            <img src={DevGuy} width="auto" height="480" alt="helloworld" ></img>
        </div>
      </div>
       

        <div>
          <div class="">
            <Home></Home>
          </div>
        </div>
      </div>

      <div class="">
          <Copyright />
      </div>
    </div>
  );
}

export default App