
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import CadastroCondutor from './api/config.js/cadastroApi/ApiCadastroCondutor';
//import CadastroCliente from './api/config.js/cadastroApi/ApiCadastroCliente'; './api/config.js/cadastroApi/ApiCadastroCliente';
//import CadastroVeiculo from './api/config.js/cadastroApi/ApiCadastroveiculo';

function App() {


  const [name, setName] = useState('');
  const [document, setDocument] = useState('');
  const [typeDocument, setTypeDocument] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [bairro, setBairro] = useState('');


  function minhaFuncao() {
    axios.get('https://api-deslocamento.herokuapp.com/swagger/v1/swagger.json')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }


  minhaFuncao();

  

 return (
    
   

  <div className="App">

  <h1>olá</h1>


  <form>
       
        <label htmlFor="document">
          Documento
        </label>
        <input type="number" id="document" value={document} onChange={e => setDocument(e.target.value)} />
        <label htmlFor="typeDocument">
          Tipo de Documento
        </label>
        <input type="text" id="typeDocument" value={typeDocument} onChange={e => setTypeDocument(e.target.value)} />
        <label htmlFor="logradouro">
          Logradouro
        </label>
        <input type="text" id="logradouro" value={logradouro} onChange={e => setLogradouro(e.target.value)} />
        <label htmlFor="numero">
          Número
        </label>
        <input type="number" id="numero" value={numero} onChange={e => setNumero(e.target.value)} />
       
        <button type="submit" onSubmit={CadastroCondutor(logradouro, document, typeDocument)}>Enviar</button>
      </form>

  </div>
    
  );

 }
export default App;
