import { render } from 'react-dom'
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'
import ButtonAppBar from './MenuBar';


function DeveloperComponent(){
    return (
    <div className="App">
        <ButtonAppBar />
        <p>about the developer</p>
    </div>
    )
  }


export default DeveloperComponent;
  