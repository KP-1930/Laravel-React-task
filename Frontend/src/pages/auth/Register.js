import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../context/actions/action';


function Register() {

    const [state, setState] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [error, setError] = useState("")

    const { name, email, password } = state;

    const handleInputChange = (e) => {
        let { name, value } = e.target
        setState({ ...state, [name]: value })

    }

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !email || !password) {
            setError("Please Fill All Input Fields")
        }
        else {
            dispatch(addUser(state))
            navigate('/')
            setError("")
        }
    }

    return (
        <div>
            <div className="login-page">
                {error && <h6 style={{ color: "red" }}>{error}</h6>}
                <div className="form">
                    <h4>Register</h4>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <input type="text" name='name' value={name} placeholder="Name" onChange={handleInputChange} />
                        <input type="email" name='email' value={email} placeholder="Email" onChange={handleInputChange} />
                        <input type="password" name='password' value={password} placeholder="Password" onChange={handleInputChange} />
                        <button>Register</button>
                        <p className="message"><Link to="/">I already have a membership</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register