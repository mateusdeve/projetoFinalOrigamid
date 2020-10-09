import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import LoginCreate from './LoginCreate'
import LoginForm from './LoginForm'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset'
import './styles.css'

const Login = () => {
    const {login} = React.useContext(UserContext);

    if(login === true) return <Navigate to="/conta" />
    return (
        <section className="loginf">
            <div className="forms">
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="criar" element={<LoginCreate />} />
                    <Route path="perdeu" element={<LoginPasswordLost />} />
                    <Route path="resetar" element={<LoginPasswordReset />} />
                </Routes>
            </div>
        </section>
    )
}

export default Login
