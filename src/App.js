import logo from './logo.svg';
import './App.css';
import Home from './components/home'
import Articles from './components/Articles';
import Services from './components/Services';
import News from './components/News';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap'
import Orders from './components/Orders';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useState} from 'react'
import firebase from './firebase-config'
import "firebase/messaging";

function App() {
const [newPage, setNewPage] = useState(true)
const [token, setToken] = useState('')
const msg = firebase.messaging();
const vapidKey = "BNvB16RkknCnapJcR4tt0lnOzqStlLnE8WPqtZ9-a6IzPho1Y1x-TOVcAsOuda_b4Ph0tov-jfn8dsqA0eIF15M"
    // Add the public key generated from the console here. 
  msg.getToken({vapidKey: vapidKey}).then((token)=>{
    console.log(token) 
    setToken(token) 
  })


return (
    <div className="App">
      {
        newPage?<div>
         <Home setNewPage={setNewPage} newPage={newPage}/>
         <Articles />
         <Services />
         <News/>
         <div>
           <input placeholder={token}></input>  
         </div> 
        </div>: <Orders />
        
      }
      
    </div>
  );
}

export default App;
