
import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";


function Signin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost:4500/signin", {
                email: email,
                password: password,
            });

            const { token, user } = response.data;
            window.location.href = '/';

            localStorage.setItem("TOKEN", response.data.token);
            localStorage.setItem("USERID", response.data.user._id);
            localStorage.setItem("NAME", response.data.user.fullname);
            localStorage.setItem("EMAIL", response.data.user.email);
            localStorage.setItem("USERTYPE", response.data.user.usertype);

        } catch (error) {
            setError(error.response.data.message);
        }
    };

    return (
        <>
            <div className='dashboard'>
                <div className='dashboard-app'>
                    <div className='dashboard-content'>
                        <h1 className="text-center">Sign In</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" style={{maxWidth: "500px"}} className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" style={{maxWidth: "500px"}} className="form-control" id="password" onChange={(e) => setPassword(e.target.value)} />
                            </div><br/>
                            <button type="submit" className="btn btn-primary">Sign In</button>
                        </form>
                    </div></div></div>
        </>
    );
}

export default Signin;
