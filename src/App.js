
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Header from './Components/Shared/Header/Header';

import AddService from './Components/AddService/AddService';
import Home from './Components/Home/Home';
import Service from './Components/Service/Service';
import Banner from './Components/Banner/Banner';

function App() {
  return (
    
     <Router>
       
      
       <Header></Header>
        <Switch>
     
        <Route path="/home">
            <Home></Home>
        
          </Route>

         <Route path="/addServices">
           <AddService></AddService>
          
         </Route>
         <Route exact path="/">
            <Home></Home>
        
          </Route>
         
         
        </Switch>
    
    </Router>
  );
      
  

}

export default App;
