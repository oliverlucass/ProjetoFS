import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from 'react-router-dom'


class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            _id: '',
            username: 'padrao'
        }
    }

    

    render() {

        const getUserPhoto = () => {
            const newUsername = document.querySelector(".form-control").value;

            console.log(this.state)
            return this.setState({id: 0, username: newUsername})
        }

        return(
            <>
                <div class="card w-100 mx-auto"  >
                    <div class="card-body">
                        <h4 class="card-title d-flex">Identificação</h4>
    
                        <div class="row d-flex flex-column p-3" style={{width: '500px', height: '600px'}}>
    
                            <div class="col  d-flex align-items-center">
                                <img 
                                src={`https://github.com/${this.state.username}.png`}
                                class="rounded d-block w-50 mx-auto" 
    
                                />
                            </div>
    
                            <div class="col p-2">
                                <input
                                 type="text"
                                 class="form-control w-75 h-25 mx-auto mb-5"
                                 placeholder="Username"
                                 onChange={getUserPhoto}
                                 />
    
                                <Link to="/ChatScreen" class="btn btn-primary d-block mx-auto w-25">Entrar</Link>
                            </div>
    
                        </div>
                    </div>
                </div>
            </> 
        );
    } 
}

export default Login;
