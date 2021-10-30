import React from 'react';
import './Landing_Page.css';
import LandingImage from '../../Assets/image.JPG';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
	
export default function Landing_Page() {
  return (
    <div className='Container'>
      <div className='row justify-content-md-center pt-5'>
        <div className='col-md-3'>
          <img src={LandingImage} className="image" alt="Landing_Image"></img>
        </div>
        <div className='col-md-3 align-middle'>
          <div className="text-center">
          <h2>10x Team 04</h2>
          <Link to='/postview' className="btn btn-success">Enter</Link>
          </div>
         
        </div>

      </div>

    </div>

  )
	}
