import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { login } from "../utils/api";
import LoginInput from "../components/LoginInput";

const LoginPage = ({ loginSuccess }) => {
    const onLogin = async ({ email, password }) => {
        const { error, data } = await login({ email, password })

        if(!error) {
            loginSuccess(data)
        }
    }

    return(
        <section className="login-page">
            <h2>Silahkan masuk untuk melanjutkan...</h2>
            <LoginInput login={onLogin} />
            <p>Belum punya akun? <Link to="/register">Daftar di sini</Link></p>
        </section>
    )
}

LoginPage.propTypes = {
    loginSuccess: PropTypes.func
}

export default LoginPage