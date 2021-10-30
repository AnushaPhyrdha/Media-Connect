import React from 'react';
import PostViewImage from '../../Assets/insta_clone_icon.svg';
import CameraImage from '../../Assets/camera@2x.png';
import "./Header.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-between p-2">
        <a className="navbar-brand" href="#">
          <img src={PostViewImage} width="50" height="50" alt="Instaclone" class="d-inline-block align-top" alt = '' />
          Instaclone
        </a>
        <Link to='/add_post' className="btn btn-default">
        <img src={CameraImage} width="35" height="35" alt="Instaclone"/></Link>
      </nav>
      <hr></hr>
      </div>
  );
} 