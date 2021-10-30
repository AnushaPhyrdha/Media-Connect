import React from 'react';
import './Post_View.css';
import PostViewImage from '../../Assets/clone.png';
import CameraImage from '../../Assets/camera-solid.svg';
import Post from '../../Assets/post.JPG';
import Like from '../../Assets/love.png';
import Share from '../../Assets/send1.jfif';

export default function Post_View() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-between p-2">
        <a className="navbar-brand" href="#">
          <img src={PostViewImage} width="65" height="65" alt="Instaclone"/>
        </a>
        <img src={CameraImage} width="65" height="65" alt="Instaclone"/>
      </nav>
      <div className="row justify-content-md-center pt-5">
        <div className="Card p-0 fixed-width">
        <nav className="navbar navbar-light justify-content-between p-1">
        <a className="navbar-brand" href="#">
          <h4>Suma Sri</h4>
          <small>Singapore</small>
        </a>
        <p className="Dots"><b>...</b></p>
      </nav>
          <img className="card_image" src={Post} alt="Card Header" />
          <div className = "Card-Body">
          <nav className="navbar justify-content-between p-2">
          <a className="navbar-brand" href="#">
          <img src={Like} width="25" height="25" alt="Like_Img"/>
          <img src={Share} width="25" height="25" alt="share_img"/>
          </a>
          <div className="Date"> <small><b>17 Sep 2021</b></small> </div>
          </nav>
          <p className="Card-text">Welcome to the Postview Page and see the card detils</p>
          <a className="btn btn-primary">Navigate</a>

          </div>

        </div>
      </div>

      
    </div>

  );
	}
