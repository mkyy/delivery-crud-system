import { createContext, useState } from 'react'

export const ClientContext = createContext()

export const ClientProvider = ({ children }) => {
  const [clients, setClients] = useState([])
  const [inputNewName, setInputNewName] = useState()
  const [inputNewCnpj, setInputNewCnpj] = useState()

  const removeClient = (name) => {
    const arrayToReplace = clients.filter((element) => element.name !== name)
    setClients(arrayToReplace)
  }

  const updateClient = (event, name) => {
    // changing button text
    event.target.classList.add('modify')
    event.target.textContent = 'SALVAR'
    //transforming name into a input

    setClients(
      clients.map((element) => {
        setInputNewName(element.name)
        if (element.name === name) {
          element.name = (
            <input
              type='text'
              name=''
              id='update-input'
              defaultValue={name}
              onChange={(e) => setInputNewName(e.target.value)}
            />
          )
          setInputNewCnpj(element.cnpj)
          let aux = element.cnpj
          element.cnpj = (
            <input
              type='number'
              name=''
              id='update-input'
              defaultValue={aux}
              onChange={(e) => setInputNewCnpj(e.target.value)}
            />
          )
        }
        return element
      })
    )
  }

  const saveUpdatesFromClient = (event) => {
    event.target.classList.remove('modify')
    event.target.textContent = 'ALTERAR'
    setClients(
      clients.map((element) => {
        if (typeof element.name === 'object') {
          element.name = inputNewName
          element.nameAtNavigationTab = inputNewName
          element.cnpj = inputNewCnpj
        }

        return element
      })
    )
  }

  return (
    <ClientContext.Provider
      value={{
        clients,
        setClients,
        removeClient,
        updateClient,
        saveUpdatesFromClient,
      }}>
      {children}
    </ClientContext.Provider>
  )
}
