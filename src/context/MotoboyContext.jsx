import React, { createContext, useContext, useRef, useState } from 'react';
import { ClientContext } from './ClientContext';

export const MotoboyContext = createContext();

export const MotoboyProvider = ({ children }) => {
  const { clients, setClients } = useContext(ClientContext);

  const [motoboys, setMotoboys] = useState([]);
  const [id, setId] = useState(1);
  const nameRef = useRef('');
  const ageRef = useRef('');
  const emailRef = useRef('');
  const jobRef = useRef('Não informado');

  const createMotoboy = (name, age, email, actualJob) => {
    let isDuplicated = false;
    motoboys.forEach(element => {
      if (element.name === name) {
        isDuplicated = true;
      }
    });
    if (!isDuplicated) {
      setMotoboys([
        {
          id: id,
          name: name,
          nameAtNavigationTab: name,
          age: age,
          email: email,
          actualJob: actualJob,
        },
        ...motoboys,
      ]);
      setId(id + 1);
      setClients(
        clients.map(client => {
          if (client.name === actualJob) {
            client.funcionarios.push(name);
          }
          return client;
        })
      );
    } else {
      alert('Oops... já existe um motoboy com esse nome no sistema.');
    }
  };

  const removeMotoboy = name => {
    const arrayToReplace = motoboys.filter(element => element.name !== name);
    setMotoboys(arrayToReplace);
  };

  const updateMotoboy = (event, name) => {
    // changing button text
    event.target.classList.add('modify');
    event.target.textContent = 'SALVAR';

    //transforming name into a input
    setMotoboys(
      motoboys.map(element => {
        if (element.name === name) {
          element.name = (
            <input type='text' name='' id='update-input' defaultValue={name} ref={nameRef} minLength={4} />
          );
          element.age = <input type='number' name='' id='update-input' defaultValue={element.age} ref={ageRef} />;
          element.email = (
            <input type='email' name='email' id='update-input' defaultValue={element.email} ref={emailRef} />
          );
          element.actualJob = (
            <select name='actualjob' id='' defaultValue={element.actualJob} ref={jobRef}>
              <option value='Não informado'>Selecione uma empresa...</option>

              {clients.map(element => {
                return (
                  <option key={element.id} value={element.name}>
                    {element.name}
                  </option>
                );
              })}
            </select>
          );
        }
        return element;
      })
    );
  };

  const saveUpdatesFromMotoboy = event => {
    event.target.classList.remove('modify');
    event.target.textContent = 'ALTERAR';
    setMotoboys(
      motoboys.map(element => {
        if (typeof element.name === 'object') {
          element.name = nameRef.current.value;
          element.nameAtNavigationTab = nameRef.current.value;
          element.age = ageRef.current.value;
          element.email = emailRef.current.value;
          element.actualJob = jobRef.current.value;
        }

        return element;
      })
    );
    if (jobRef === 'Não informado') {
      setClients(
        clients.map(client => {
          client.funcionarios = client.funcionarios.filter(funcionario => funcionario !== nameRef.current.value);
          return client;
        })
      );
    } else {
      setClients(
        clients.map(client => {
          client.funcionarios = client.funcionarios.filter(funcionario => {
            funcionario !== nameRef;
          });
          if (client.name === jobRef.current.value) {
            client.funcionarios.push(nameRef.current.value);
          }
          return client;
        })
      );
    }
  };

  return (
    <MotoboyContext.Provider
      value={{
        motoboys,
        createMotoboy,
        removeMotoboy,
        updateMotoboy,
        saveUpdatesFromMotoboy,
      }}
    >
      {children}
    </MotoboyContext.Provider>
  );
};
