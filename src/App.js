import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import Navbar from "./components/navbar"
import Contacts from "./pages/contacts"
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
     <div>
       <Router>
        <Navbar/>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/contacts" exact component={Contacts}/>
            </Switch>
         </Router> 
     </div>
  );
}

export default App;
