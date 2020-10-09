import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import Input from '../../../Components/Forms/Input';
import Button from '../../../Components/Forms/Button';
import useForm from '../../../Hooks/useForm';
import Error from '../../../Components/Helper/Error'
import { TOKEN_POST, USER_GET } from '../../../api';
import {UserContext} from '../../../Context/UserContext'

const LoginForm = () => {
    const username = useForm();
    const password = useForm();

    const {userLogin , error, loading} = React.useContext(UserContext);

    React.useEffect(() => {
        const token = window.localStorage.getItem('token');
        if(token){
            getUser(token)
        }
    },[])

    async function getUser(token) { 
        const {url, options} = USER_GET(token)
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);

    }

    async function handleSubmit (event) {
        event.preventDefault()

        if(username.validate() && password.validate()){
            userLogin(username.value, password.value)
        }
    }

    return (
        <section className="animeLeft">
            <h1 className="title">Login</h1>
            <form className="form" onSubmit={handleSubmit} >
                <Input label="Usuario" type="text" name="username" {...username}/>
                <Input label="Senha" type="password" name="password" {...password}/>
                {loading ? <Button disabled >Carregando..</Button> : <Button>Entrar</Button>}
                <Error error={error} />
            </form>
            <Link  className="perdeu" to="/login/perdeu">Perdeu a senha?</Link>
            <div className="cadastro">
                <h2 className="subtitle">Cadastre-se</h2>
                <p>ainda não possui conta ?</p>
                <Link className="button" to="/login/criar">Cadastro</Link>
            </div>
        </section>
    )
}

export default LoginForm
