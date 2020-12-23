import logo from './logo.svg';
import './App.css';
import "./components/MenuBar";
import ButtonAppBar from './components/MenuBar';
import TextComponent from "./components/TextComponent";
import PDFTextComponent from "./components/PDFTextComponent";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DeveloperComponent from './components/DeveloperComponent';
import HelpComponent from './components/HelpComponent';


function HomeComponent(){
  return (
    <div className="App">
        <ButtonAppBar />
        <p>Enter text here: </p>
        <TextComponent />
        <PDFTextComponent />
      </div>
  )
}



function App() {
  return (
    <Switch>
      <Route path="/" component={HomeComponent} exact/>
      <Route path="/developer" component={DeveloperComponent} />
      <Route path="/help" component={HelpComponent} />
    </Switch>
  );
}

export default App;
