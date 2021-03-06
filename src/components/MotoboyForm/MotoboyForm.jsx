import { useState, useContext } from 'react';
import styled from 'styled-components';
import { ClientContext } from '../../context/ClientContext';
import { MotoboyContext } from '../../context/MotoboyContext';

export const MotoboyForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('example@email.com');
  const [actualJob, setActualJob] = useState('Não informado');

  const { createMotoboy } = useContext(MotoboyContext);
  const { clients } = useContext(ClientContext);

  const handleSubmit = e => {
    e.preventDefault();
    createMotoboy(name, age, email, actualJob);
    setName('');
    setAge('');
    setEmail('');
    setActualJob('Não informado');
  };

  return (
    <Form className='stats' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Nome...'
        value={name}
        onChange={e => setName(e.target.value)}
        required
        minLength={4}
      />
      <div>
        <input
          type='number'
          name='age'
          id='age'
          value={age}
          placeholder={'Idade...'}
          onChange={e => setAge(e.target.value)}
          min={0}
          required
        />
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Email...'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <select name='company' id='company' value={actualJob} onChange={e => setActualJob(e.target.value)}>
        <option value='Não informado'>Escolha uma empresa...</option>
        {clients.map(element => {
          return (
            <option key={element.id} value={element.name}>
              {element.name}
            </option>
          );
        })}
      </select>

      <button type='submit'>Cadastrar</button>
    </Form>
  );
};

const Form = styled.form`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  input {
    margin-bottom: 20px;
  }
  #age {
    width: 80px;
  }
  #email {
    width: calc(100% - 100px);
    margin-left: 20px;
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
`;
