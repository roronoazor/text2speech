import { render } from 'react-dom'
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'
import ButtonAppBar from './MenuBar';


function HelpComponent(){
    return (
    <div className="App">
        <ButtonAppBar />
        <p>how the application works</p>
    </div>
    )
  }
  

  export default HelpComponent;