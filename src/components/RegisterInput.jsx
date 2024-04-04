import React, { useState } from "react";
import PropTypes from 'prop-types';
import useInput from "../hooks/useInput";

const RegisterInput = ({ register }) => {
    const [name, setName] = useInput('');
    const [email, setEmail] = useInput('');
    const [password, setPassword] = useInput('');
    const [confirmPassword, setConfirmPassword] = useInput('');
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage("Password and Confirm Password must match.");
        } else {
            register({ name, email, password });
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='register-input'>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <input type="text" placeholder="Nama" value={name} onChange={setName} />
            <input type="email" placeholder="Email" value={email} onChange={setEmail} />
            <input type="password" placeholder="Password" autoComplete='current-password' value={password} onChange={setPassword} />
            <input type="password" placeholder="Confirm Password" autoComplete='current-password' value={confirmPassword} onChange={setConfirmPassword} />
            <button>Register</button>
        </form>
    );
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
};

export default RegisterInput;
