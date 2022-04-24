import { useContext } from 'react'
import { ClientContext } from '../../context/ClientContext'
import { ClientForm } from '../ClientForm/'
import { Wrapper } from './style'

export const ClientList = () => {
  const { clients, removeClient, updateClient, saveUpdatesFromClient } =
    useContext(ClientContext)

  // essa funcao lida com o evento click em cima de uma option dentro do select
  const handleClick = (event) => {
    const getActiveDiv = document.querySelector('.active')
    if (getActiveDiv) {
      getActiveDiv.classList.remove('active')
    }

    const divToBeStyled = document.getElementById(event.target.value)
    divToBeStyled.classList.add('active')
  }

  //this function handle the delete element client
  const removeThisClient = (event) => {
    removeClient(event.target.value)
  }

  // this function handle the update element client
  const updateThisClient = (event) => {
    if (!event.target.classList.contains('modify')) {
      updateClient(event, event.target.value)
    } else {
      saveUpdatesFromClient(event)
    }
  }

  return (
    <Wrapper>
      <select name='clients' id='clients' multiple>
        <option onClick={handleClick} value='form'>
          New +
        </option>
        {clients.map((item, index) => (
          <option onClick={handleClick} value={item.name} key={index}>
            {item.nameAtNavigationTab}
          </option>
        ))}
      </select>
      <div id='form' className='stats'>
        <ClientForm />
      </div>
      {clients.map((item, index) => (
        <div id={item.name} className='stats' key={index}>
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
      ))}
    </Wrapper>
  )
}
