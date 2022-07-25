import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { Switch, Route } from "react-router-dom";


function App() {
  return <>
    <NavBar></NavBar>
    <Switch>



      <Home></Home>

    </Switch>
  </>

}

export default App;
