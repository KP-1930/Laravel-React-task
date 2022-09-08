import React from 'react'
import { Link } from 'react-router-dom'


function Login() {
    return (
        <div>
            <div className="login-page">
                <div className="form">
                    <h4>Login</h4>
                    <form className="login-form">
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>login</button>
                        <p className="message">Not registered? <Link to="/register">Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login