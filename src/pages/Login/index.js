import './styles.css'
import logo from '../../assets/images/logo1.png'
// import { useNavigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function PaginaLogin() {
    const navigate = useNavigate() //Obrigatorio usar para poder linkar uma pagina na outra
    return (
        <div className='pagina-login'>
            <div className='container1'>
                <img src={logo} alt="Logo da empresa" className="logo"/>
                <h2>Login</h2>
                <input type="email" placeholder="Email" className="input"/>
                <input type="password" placeholder="Senha" className="input"/>
                <button onClick={() => navigate('/tarefas')} className='link-voltar'>
                    Entrar
                    </button>
            </div>
        </div>
    )
}

export default PaginaLogin
