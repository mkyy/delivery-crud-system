import { useContext, useState } from 'react'
import { ClientContext } from '../../context/ClientContext'
import styled from 'styled-components'

export const ClientForm = () => {
  const [name, setName] = useState()
  const [cnpj, setCnpj] = useState()

  const { clients, setClients } = useContext(ClientContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    let isDuplicated = false
    clients.forEach((element) => {
      if (element.name === name) {
        isDuplicated = true
      }
    })
    if (!isDuplicated) {
      setClients([
        {
          name: name,
          nameAtNavigationTab: name,
          cnpj: cnpj,
          funcionarios: [],
        },
        ...clients,
      ])
    } else {
      alert('Oops... já existe um cliente com esse nome no sistema.')
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Nome...'
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        minLength={4}
      />
      <input
        type='number'
        name='age'
        id='age'
        placeholder='CNPJ...'
        value={cnpj}
        onChange={(e) => setCnpj(e.target.value)}
      />

      <button type='submit'>Cadastrar</button>
    </Form>
  )
}

const Form = styled.form`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  input {
    margin-bottom: 20px;

    &:nth-child(2) {
      width: 200px;
    }
  }

  button {
    margin: 30px;
    padding: 15px;
    border-radius: 10px;
    background: #66a6dd;
    border: none;
    width: fit-content;
    align-self: center;

    &:hover {
      cursor: pointer;
      background: #00a6ff;
    }
  }
`
