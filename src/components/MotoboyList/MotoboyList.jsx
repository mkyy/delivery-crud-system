import { useContext } from 'react'
import { MotoboyContext } from '../../context/MotoboyContext'
import { MotoboyForm } from '../MotoboyForm/'
import { Wrapper } from './style'

export const MotoboyList = () => {
  const { motoboys, removeMotoboy, updateMotoboy, saveUpdatesFromMotoboy } =
    useContext(MotoboyContext)

  // essa funcao lida com o evento click em cima de uma option dentro do select
  const handleClick = (event) => {
    const getActiveDiv = document.querySelector('.active')
    if (getActiveDiv) {
      getActiveDiv.classList.remove('active')
    }
    const divToBeStyled = document.getElementById(event.target.value)
    divToBeStyled.classList.add('active')
  }

  //this function handle the delete element motoboy
  const removeThisMotoboy = (event) => {
    removeMotoboy(event.target.value)
  }

  // this function handle the update element motoboy
  const updateThisMotoboy = (event) => {
    if (!event.target.classList.contains('modify')) {
      updateMotoboy(event, event.target.value)
    } else {
      saveUpdatesFromMotoboy(event)
    }
  }

  return (
    <Wrapper>
      <select name='motoboys' id='motoboys' multiple>
        <option onClick={handleClick} value='form'>
          New +
        </option>
        {motoboys.map((item, index) => (
          <option
            onClick={handleClick}
            className={item.name}
            value={item.name}
            key={index}>
            {item.nameAtNavigationTab}
          </option>
        ))}
      </select>
      <div id='form' className='stats'>
        <MotoboyForm />
      </div>
      {motoboys.map((item, index) => (
        <div id={item.name} className='stats' key={index}>
          <img src='avatar-motoboy.jpg' alt='' />
          <div className='info-box'>
            <p>
              <strong>Nome:</strong> {item.name}
            </p>
            <p>
              <strong>Idade:</strong> {item.age}
            </p>
            <p>
              <strong>Email: </strong> {item.email}
            </p>
            <p>
              <strong>Empresa atual: </strong> {item.actualJob}
            </p>
            <div className='buttons'>
              <button value={item.name} onClick={updateThisMotoboy}>
                ALTERAR
              </button>
              <button value={item.name} onClick={removeThisMotoboy}>
                REMOVER
              </button>
            </div>
          </div>
        </div>
      ))}
    </Wrapper>
  )
}
