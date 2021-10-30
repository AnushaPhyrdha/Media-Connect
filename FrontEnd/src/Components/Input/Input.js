import React from "react";
import 'bootstrap';
import { Form, Row } from "react-bootstrap";
import './Input.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../Header/Header";
import { useHistory } from 'react-router';
import { getToken } from "../../Utils/AuthOperations";

function Input_Page() {
    const history = useHistory();
    const login = async e => {
        try {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/posts",{
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
              },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url

            body: JSON.stringify({
              title: e.target.title.value,
              Location: e.target.Location.value,
              body: e.target.body.value,
              image: e.target.image.value
            })
        });
        const { data } = await response.json();
        console.log(data.status);
        history.push("/posts");

    }
        catch (e) {
            console.log(e);
            alert('Post not added');
    }
}

    return (
        <div>
            <div>
            <Header />
            </div>

            <div class= "container-fluid my-4 justify-content-middle pt-5 border" >
            <form onSubmit={e => login(e)}>
            <div class="row justify-content-between ">
            <h2> Add Post Details</h2>
            <div class="form-group col-sm-6">
                <label for="inputEmail4"></label>
                <input type="text" class="form-control" name="title" placeholder="Title" />
            </div>
            <div class="form-group col-sm-6     ">
                <label for="inputPassword4"></label>
                <input type="text" class="form-control" name="Location" placeholder="Location" />
            </div>
            </div>
            <div class="form-group">
                <label for="inputAddress"></label>
                <input type="text" class="form-control" name="body" placeholder="Description" />
            </div>
            <br />  
            <div>
                <label for="inputAddress"></label>
                <input type="text" class="form-control" name="image" placeholder="Add image URL" />
            {/* <Form.Group controlId="formFile" className="mb-3">
                <Form.Control type="file" name="image" />
            </Form.Group> */}
            </div>
            <br />
            <div className='button'>
            <button type="submit" class="btn btn-info btn-lg">Post</button>
            </div>
            </form>
            </div>
            
        </div>
    )
}


export default Input_Page;