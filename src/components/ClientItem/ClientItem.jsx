import { useContext } from 'react';
import { ClientContext } from '../../context/ClientContext';

export const ClientItem = props => {
  const { clients, removeClient, updateClient, saveUpdatesFromClient } = useContext(ClientContext);

  //this function handle the delete element client
  const removeThisClient = event => {
    removeClient(event.target.value);
    props.handleRemove();
  };

  // this function handle the update element client
  const updateThisClient = event => {
    if (!event.target.classList.contains('modify')) {
      updateClient(event, event.target.value);
    } else {
      saveUpdatesFromClient(event);
    }
  };

  var item = {};
  clients.forEach((client, index) => {
    if (client.id == props.id) {
      item = clients[index];
    }
  });

  return (
    <div id={item.name} className='stats' key={item.iid}>
      <img src='avatar-business.webp' alt='' />
      <div className='info-box'>
        <p>
          <strong>Nome:</strong> {item.name}
        </p>
        <p>
          <strong>CNPJ:</strong> {item.cnpj}
        </p>
        <p>
          <strong>Funcionarios: </strong>
          {item.funcionarios.join(' ')}
        </p>
        <div className='buttons'>
          <button value={item.name} onClick={updateThisClient}>
            ALTERAR
          </button>
          <button value={item.name} onClick={removeThisClient}>
            REMOVER
          </button>
        </div>
      </div>
    </div>
  );
};
