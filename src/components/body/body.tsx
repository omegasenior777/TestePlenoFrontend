import React, { useEffect, useState } from 'react';
import { ResponseLivros } from '../../Mocks/livros';
import LivrosLista from '../livros/livros';

const Body: React.FC = () => {

    const [livros, setLivros] = useState<any[]>([]);

    useEffect(() => {
        const data = ResponseLivros(); // Chama a função para obter os livros
        setLivros(data.data.lstLivros); // Pega a lista de livros e define no estado
    }, []);

    return (
        <div>
            {livros.length === 0 ? (
                <div className="container">
                    <div>
                        <h1 className="title1">Que pena! Estamos em desenvolvimento :(</h1>
                        <h3 className="paragraph">Nossa aplicação está em desenvolvimento, em breve teremos novidades</h3>
                    </div>
                </div>
            ) : (
                <LivrosLista livros={livros} />
            )}
        </div>
    );
};

export default Body;