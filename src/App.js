import React from 'react'
import Home from './components/Home'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import './App.sass'
import DevGuy from './devguy.svg'
//import logo from './logo.svg'

function Copyright() {
  return (
    <div className="footer">
      <Typography variant="body2" color="textSecondary" align="center">
        {'Made with '}<Icon>free_breakfast</Icon> {'from the end of the world'}
      </Typography>
    </div>

  );
}

function App() {

  return (
    <div className="App">
      <div className="skewe"></div>
      <div className="container">

      <div className="pt-3 mt-3">
        <div class="center pt-5 mt-5">
            <img src={DevGuy} width="auto" height="480" alt="helloworld" ></img>
        </div>
      </div>
       

        <div>
          <div class="pt-3">
            <Home></Home>
          </div>
          <Copyright />
        </div>
      </div>
    </div>
  );
}

export default App


/**local_cofe
 *
 *   <header className="App-header">

      </header>
 *  <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
 */