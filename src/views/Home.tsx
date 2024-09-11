import React from 'react';

const Home: React.FC = () => {
    return (
        <div>
            <h1 className='bg-inheritbg-red-400'>Página Inicial</h1>
            <p>Bem-vindo à aplicação!</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Clique aqui
            </button>
        </div>
    );
};

export default Home;