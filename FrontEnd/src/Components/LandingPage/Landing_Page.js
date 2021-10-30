import React from 'react';
import './Landing_Page.css';
import LandingImage from '../../Assets/image.JPG';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Button} from 'react-bootstrap';
import { useHistory } from 'react-router';
import { setToken } from '../../Utils/AuthOperations';
	
function Landing_Page() {
  const history = useHistory();
  const login = async e => {
    try{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/login", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value
      }) // body data type must match "Content-Type" header
    });
    const { data } = await response.json(); // parses JSON response
    setToken(data.token)
    console.log("Token: ", data.token);
    //window.location.href = "/posts";
    history.push('/posts');
  }
  catch (e) {
    console.log(e);
    alert("login failed");

  }
  }


  return (
    <div className='Container'>
      <div className='row justify-content-md-center pt-5'>
        <div className='col-md-3'>
          <img src={LandingImage} className="image" alt="Landing_Image"></img>
        </div>
        <div className='col-md-3 align-middle'>
          <form className="form-login" onSubmit={e => login(e)}>
          <h1>10x Team 04</h1 >
          <br />
          <input name = "email" type="email" placeholder = "Email" />
          <input name = "password" type="password" placeholder = "Password" />
          <br />
          <br />
          <Button type= "submit" className="btn btn-success btn-lg">Login</Button>
          </form>
          <div className="register">
          <div class="separator">New User!!!</div>
          <br />
          <Button type= "submit" className="btn btn-success btn-lg">Register Here</Button>
          </div>
          
        </div>

      </div>

    </div>

  )
	}

  export default Landing_Page;