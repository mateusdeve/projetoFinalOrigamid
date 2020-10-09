import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

import { ReactComponent as Dogs } from '../../Assets/dogs.svg'
import {UserContext} from '../../Context/UserContext'

const Header = () => {
    const {data , userLogout} = React.useContext(UserContext);
    return (
        <header className="header">
            <nav className="nav container">
                <Link  className="logo" to="/">
                    <Dogs />
                </Link>
                {data ? (
                    <Link className="login" to="/conta">
                        {data.nome}
                        <button onClick={userLogout} >Sair</button>
                    </Link>
                ) : (
                    <Link className="login" to="/login">
                        / Criar / Login
                    </Link>
                )
                } 
            </nav>
        </header>
    )
}

export default Header
