import React, { useState } from 'react'
import { login } from '../services/api';
import { useNavigate } from 'react-router-dom';
const Signin = () => {
    const history = useNavigate();
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleLogin = async (e) => {
        console.log(userName,password);
        e.preventDefault();
        try {
            const token = await login(userName, password);
            console.log(token)
            if (token.status === 'success') {
                console.log("first")
                history('/')
            }else{
                console.log("firs1")
                setErrorMessage(token.message)
            }

        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <>
            {/* sign section start */}
            <div className="container-fluid signIn bgPrimaryColor d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="card py-30 px-40 br-15 m-auto b-none">
                        <h1 className="titleFour text-uppercase white text-center fw-600">SignIn</h1>
                        {errorMessage&&<div className="white text-center bg-danger">
                                {errorMessage}
                            </div>}
                        <form className="form-group">
                            <div className="d-flex flex-column my-4">
                                <label className="descripionOne fw-500 white text-uppercase">Username</label>
                                <input className="form-control fw-600 mr-2" name="name" type="text" placeholder="Enter Username"  required  onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                            <div className="d-flex flex-column my-4">
                                <label className="descripionOne fw-500 white text-uppercase">Password</label>
                                <input className="form-control fw-600 mr-2" name="password" type="password" placeholder="Enter Password"  required onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <button className="btn d-flex fw-600 text-uppercase mt-20 bgPrimaryColor m-auto" onClick={handleLogin}>SignIn</button>
                        </form>
                    </div>
                </div>
            </div>
            {/* sign section end */}
        </>
    )
}

export default Signin