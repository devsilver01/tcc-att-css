import React from 'react';
import './styles.css'; // opcional, para estilizar depois
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo1.png';

function PaginaBemvindo() {
    const navigate = useNavigate()
  return (
    <div className="pagina-bemvindo">
      <div className='particle'></div>
      <div></div>
      <h1>Bem-vindo!</h1>
      <img src={logo}  alt="Logo da empresa" className='logo' />
      <p>Transforme seus dias com pequenas atitudes: comece agora a criar a rotina que vai mudar a sua vida.</p>
      <button onClick={() => navigate('/cadastro')} className='botao-bemvindo'>
                    Começar agora
        </button>
    </div>

  );
}

export default PaginaBemvindo;