import React, { createContext, useContext, useState } from 'react'
import { ClientContext } from './ClientContext'

export const MotoboyContext = createContext()

export const MotoboyProvider = ({ children }) => {
  const { clients, setClients } = useContext(ClientContext)

  const [motoboys, setMotoboys] = useState([])
  const [inputNewName, setInputNewName] = useState()
  const [inputNewAge, setInputNewAge] = useState()
  const [inputNewEmail, setInputNewEmail] = useState()
  const [inputNewJob, setInputNewJob] = useState()

  const removeMotoboy = (name) => {
    const arrayToReplace = motoboys.filter((element) => element.name !== name)
    setMotoboys(arrayToReplace)
  }

  const updateMotoboy = (event, name) => {
    // changing button text
    event.target.classList.add('modify')
    event.target.textContent = 'SALVAR'
    //transforming name into a input

    setMotoboys(
      motoboys.map((element) => {
        if (element.name === name) {
          setInputNewName(name)
          element.name = (
            <input
              type='text'
              name=''
              id='update-input'
              defaultValue={name}
              onChange={(e) => setInputNewName(e.target.value)}
            />
          )
          setInputNewAge(element.age)
          let aux = element.age
          element.age = (
            <input
              type='number'
              name=''
              id='update-input'
              defaultValue={aux}
              onChange={(e) => setInputNewAge(e.target.value)}
            />
          )
          setInputNewEmail(element.email)
          let auxEmail = element.email
          element.email = (
            <input
              type='email'
              name='email'
              id='update-input'
              defaultValue={auxEmail}
              onChange={(e) => setInputNewEmail(e.target.value)}
            />
          )
          setInputNewJob(element.actualJob)
          let auxJob = element.actualJob
          element.actualJob = (
            <select
              name='actualjob'
              id=''
              defaultValue={auxJob}
              onChange={(e) => setInputNewJob(e.target.value)}>
              <option value='Não informado' selected>
                Selecione uma empresa...
              </option>
              {clients.map((element) => {
                return <option value={element.name}> {element.name} </option>
              })}
            </select>
          )
        }
        return element
      })
    )
  }

  const saveUpdatesFromMotoboy = (event) => {
    event.target.classList.remove('modify')
    event.target.textContent = 'ALTERAR'
    setMotoboys(
      motoboys.map((element) => {
        if (typeof element.name === 'object') {
          element.name = inputNewName
          element.nameAtNavigationTab = inputNewName
          element.age = inputNewAge
          element.email = inputNewEmail
          element.actualJob = inputNewJob
        }

        return element
      })
    )
  }

  return (
    <MotoboyContext.Provider
      value={{
        motoboys,
        setMotoboys,
        removeMotoboy,
        updateMotoboy,
        saveUpdatesFromMotoboy,
      }}>
      {children}
    </MotoboyContext.Provider>
  )
}
