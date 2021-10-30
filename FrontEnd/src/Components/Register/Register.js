import React from "react";
import 'bootstrap';
import './Input.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../Header/Header";
import { useHistory } from 'react-router';


function Input_Page() {
    const history = useHistory();
    const login = async e => {
        try {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/register",{
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
              },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url

            body: JSON.stringify({
              name: e.target.name.value,
              email: e.target.email.value,
              password: e.target.password.value
            })
        });
        const { data } = await response.json();
        console.log(data.status);
        history.push("/");

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
            <h2> Enter the Details </h2>
            <div class="form-group col-sm-6">
                <label for="inputEmail4"></label>
                <input type="text" class="form-control" name="name" placeholder="Name" />
            </div>
            <div class="form-group col-sm-6     ">
                <label for="inputPassword4"></label>
                <input type="text" class="form-control" name="email" placeholder="Email" />
            </div>
            </div>
            <div class="form-group">
                <label for="inputAddress"></label>
                <input type="text" class="form-control" name="password" placeholder="Password" />
            </div>
            <br />  
            <div className='button'>
            <button type="submit" class="btn btn-info btn-lg">Register</button>
            </div>
            </form>
            </div>
            
        </div>
    )
}


export default Input_Page;