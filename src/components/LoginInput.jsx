import React from "react"
import useInput from "../hooks/useInput"
import PropTypes from 'prop-types';

const LoginInput = ({ login }) => {
    const [email, setEmail] = useInput('')
    const [password, setPassword] = useInput('')

    const onSubmitHandler = (e) => {
        e.preventDefault()
        login({
            email: email,
            password: password
        })
    }

    return(
        <form onSubmit={onSubmitHandler} className='login-input'>
            <input type="email" placeholder='Email' value={email} onChange={setEmail} />
            <input type="password" placeholder='Password' value={password} onChange={setPassword} />
            <button>Masuk</button>
        </form>
    )
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
};

export default LoginInput