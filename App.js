import React from 'react';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Importing all the Components:
import Header from "./Components/Header";
import About from './Components/About';
import Main from './Components/Main';




function App() {

  const message = {
    inputFile: ""
  }
    
    // when the "RUN MODEL" button is pressed: 
    const submithandler = ()=>{
    
      axios
      .post('/',message)
      .then(res=>console.log(res))
      .catch(console.error);

    }

    // when the file is chosen from the local disk:
    let handleFileInput = (e)=>{

      message['inputFile']= e.target.files[0]['name'];
      console.log(message['inputFile']);

    }

    return (
      <>
        <Router>
            <Header title="People-Counter"/>
            <Switch>

              {/* first route */}
              <Route exact path='/' render={
                ()=>{
                  return(
                    <>
                      <h1 style={Style.mainTitle}>People Counter Using OpenCV.</h1>
                      <input type = "file"  name="files" style={Style.chooseButton} onChange={(e)=>handleFileInput(e)} />
                      <button type="button" className="btn btn-warning btn-lg" onClick={submithandler} style={Style.submitButton}>Run Model</button>
                      <Main />
                    </>
                  )
                }
              }>
              </Route>

              {/* second route */}
              <Route exact path='/About'>
                  <About/>
              </Route>

            </Switch>
          
        </Router>
      </>
    );
}


let Style = {
  chooseButton :{
    marginLeft: "25%",
    marginTop: "150px",
    fontSize: "20px",
    fontWeight: "bold",
    fontFamily: "Montserrat, sans-serif",
    color: "#fff"
  },
  submitButton: {
    fontSize: "20px",
    fontWeight: "bold",
    fontFamily: "Montserrat, sans-serif",
    color: "#132c33",
    width: "200px",
    height: "50px",
    borderRadius: "0px",
    border: "0px",
    background: "linear-gradient(40deg, #000428, #004e92)",
    boxShadow: "0 4px 7px rgba(0, 0, 0, 0.4)",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    transition: "transform .2s ease-out"
  },
  wholePage:{
    backgroundColor: "black"
  },
  mainTitle: {
    // position: "absolute",
    textAlign: "center",
    marginTop: "100px",
    // marginLeft: "20px",
    fontSize: "70px",
    fontWeight: "bold",
    fontFamily: "Montserrat, sans-serif",
    color: "#f4eee8"
    
  },
  subText:{
    textAlign: "center",
    marginTop: "15px",
    fontFamily: "Montserrat, sans-serif",
    color: "#f4eee8",
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: "20px",
    background: "linear-gradient(40deg, #000428, #004e92)",
    webkitBackgroundClip: "text",
    webkitTextFillColor: "transparent"
  }
}

export default App;


