import axios from 'axios';
// fazer validação dos dados antes de enviar ou o sitema vai ficar louco

const CadastroCondutor = (nomeCondutor, numeroHabilitacaoCondutor, categoriaHabilitacaoCondutor,vencimentoHabilitacaoCondutor) => {
  axios.post('https://api-deslocamento.herokuapp.com/api/v1/Condutor', {
    nome: nomeCondutor,
    numeroHabilitacao: numeroHabilitacaoCondutor,
    categoriaHabilitacao: categoriaHabilitacaoCondutor,
    vencimentoHabilitacao: vencimentoHabilitacaoCondutor // lembrar de formatar a data corretamente ou vai retorna erro
  })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
};

export default CadastroCondutor;

  
