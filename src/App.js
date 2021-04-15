
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';

function App() {
  return (
    
     <Router>
      <Header></Header>
      <Banner></Banner>
       
        <Switch>
          <Route path="/about">
          
          </Route>
          <Route path="/users">
            
          </Route>
          <Route path="/">
        
          </Route>
        </Switch>
    
    </Router>
  );
      
  

}

export default App;
