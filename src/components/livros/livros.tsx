import React from 'react';

interface Livros {
	ID: number;
	NOME: string;
	Star: number;
	DATA_PUBLICACAO: string;
	EDITORA: string;
	AUTOR: string;
	FL_FAVORITO: boolean;
}

interface LivrosProps {
	livros: Livros[];
}


const LivrosLista: React.FC<LivrosProps> = ({ livros }) => {
	return (
		<div className='containerLivros'>
			<h1 className="title1">Livros Disponíveis</h1>
			<div className='listaLivros'>
				{livros.map((livro) => (
					<div key={livro.ID} >						
						<h2 className='title1'>{livro.NOME}</h2>
						<p className='headlineBold'>Autor: {livro.AUTOR}</p>
						<p className='headline'>Avaliação: {livro.Star}⭐️</p>
						<p className='headline'>{livro.FL_FAVORITO ? 'Favorito' : 'Não Favorito'}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default LivrosLista;