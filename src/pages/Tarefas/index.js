import { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function PaginaTarefa() {
    // const navigate = useNavigate()
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState('');
    const [dataTarefa, setDataTarefa] = useState('');

    const adicionarTarefa = () => {
        if (novaTarefa.trim() === '' || dataTarefa.trim() === '') return;
        const nova = {
            id: Date.now(),
            texto: novaTarefa,
            data: dataTarefa,
            concluida: false
        };
        setTarefas([...tarefas, nova]);
        setNovaTarefa('');
        setDataTarefa('');
    };

    const marcarComoConcluida = (id) => {
        setTarefas(
            tarefas.map((tarefa) =>
                tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
            )
        );
    };

    const limparConcluidas = () => {
        setTarefas(tarefas.filter((tarefa) => !tarefa.concluida));
    };

    return (
        <div className='pagina-tarefa'>

            {/* MENU SUPERIOR */}
            <nav className="navbar">
                <div className="logo-navbar">Level Up</div>
                <ul className="nav-links">
                    <li><Link to = "/bemvindo">Home</Link></li>
                    <li>Tarefas</li>
                    <li>Perfil</li>
                    <li><Link to = '/login'>Sair</Link></li>
                </ul>
            </nav>

            {/* CONTEÚDO PRINCIPAL */}
            <div className='container2'>
                <h2>Área de Membros</h2>
                
                <input
                    type='text'
                    placeholder='Digite uma nova tarefa'
                    value={novaTarefa}
                    onChange={(e) => setNovaTarefa(e.target.value)}
                    className='input-tarefa'
                />
                
                <input
                    type='date'
                    value={dataTarefa}
                    onChange={(e) => setDataTarefa(e.target.value)}
                    className='input-data'
                />

                <button className='botao-adicionar' onClick={adicionarTarefa}>
                    Adicionar Tarefa
                </button>

                <ul className='lista-tarefas'>
                    {tarefas.map((tarefa) => (
                        <li key={tarefa.id} className={tarefa.concluida ? 'concluida' : ''}>
                            <input
                                type='checkbox'
                                checked={tarefa.concluida}
                                onChange={() => marcarComoConcluida(tarefa.id)}
                            />
                            <span>{tarefa.texto} - {tarefa.data}</span>
                        </li>
                    ))}
                </ul>

                {tarefas.some(t => t.concluida) && (
                    <button className='botao-limpar' onClick={limparConcluidas}>
                        Limpar Tarefas Concluídas
                    </button>
                )}
            </div>
        </div>
    );
}

export default PaginaTarefa;
