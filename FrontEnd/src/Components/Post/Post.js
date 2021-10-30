    import "./Post.css";
    import { FiSend } from "react-icons/fi";
    import { BsHeart } from "react-icons/bs";
    import Dog from "../../Assets/dog.jpg";


    function Post({ id, title, body,Location, image}) {
        return <div className="row justify-content-md-center pt-5">
            <div className="card p-0 border-secondary">
        <nav className="navbar navbar-light justify-content -between p-1">
        <a className="navbar-brand" href="#">
          <h5><b>{title}</b></h5>
          <small>{Location}</small>
        </a>
        <p className='text-right'><b>...</b></p>
      </nav>
          <img className="card_image" src={image} height='300' width='399' alt="Card Header" />
          <div className = "card-body">
          <nav className="navbar  navbar-light justify-content-between p-0">
          <a className="img-below navbar-brand" href="#">
          <BsHeart className = "love" />
          <FiSend className = "send" />
          </a>
          <div className="Date"> <small><b>17 Sep 2021</b></small> </div>

          </nav>
          <p className="card-text">{body}</p>
          </div>

            </div>          
        </div>  
    }

    export default Post; 
    