import React from "react"; 
import backVideo from "./assets/realesto.webm"; 
import './Esto.css';

function Esto(){
     return( <div className="video-container"> 
     <video src={backVideo} autoPlay muted loop playsInline className="background-video" /> 
     <div className="content"> 
        <h1>Welcome</h1> 
        <p>This is a background video in React</p> 
    </div> </div> ); 
    }
export default Esto;