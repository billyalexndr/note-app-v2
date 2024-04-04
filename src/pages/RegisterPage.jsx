import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import { register } from "../utils/api";

const RegisterPage = () => {
    const navigate = useNavigate()

    const onRegisterHandler = async (user) => {
        const { error } = await register(user)
        if (!error) {
            navigate('/')
        }
    }

    return(
        <section className="register-page">
            <h2>Silahkan masukkan informasi akun anda...</h2>
            <RegisterInput register={onRegisterHandler} />
            <p>Kembali ke <Link to="/">Masuk</Link></p>
        </section>
    )
}

export default RegisterPage