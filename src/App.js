import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import api from './services/api';


import './App.css';
import backgroundImage from './assets/computer_wallpaper.png';

/**
 * // Conceitos importantes:
 * // Componente
 * // Propriedade
 * // Imutabilidade
 */


export default function App(){
  const [ listagem, setlistagem ] = useState([]);
  
  // useState retorna um array com 2 posicoes
  // 
  // 1. variavel com seu valor inicial 
  // 2. função para atualizacao deste valor 

  useEffect(() => {
    api.get('listagem').then(response => {
      setlistagem(response.data);
    });
  }, []);

  async function addNewProject() {
    const response = await api.post('listagem', {
      name: `Novo Projeto ${Date.now()}`,
      email: "Rubens Guimarães"
    });

    const project = response.data;

    console.log(project);

    setlistagem([...listagem, project]); // spread operator
	
	// Logo abaixo, dentro do return temos o exemplo do fragment <>

  }

  return (
    <>
      <img width={725} src={backgroundImage} />
      <Header name="listagem">
        <ul>
          {listagem.map(project => <li key={project.id}>{project.name}</li>)}
        </ul>
      </Header>
      <button type="button" onClick={addNewProject}>Adicionar Projeto</button>
    </>
  );
}