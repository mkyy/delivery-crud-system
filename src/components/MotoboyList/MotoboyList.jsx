import { useContext, useState } from 'react';
import { MotoboyContext } from '../../context/MotoboyContext';
import { MotoboyForm } from '../MotoboyForm/';
import { MotoboyItem } from '../MotoboyItem/';
import { Wrapper } from './style';

export const MotoboyList = () => {
  const { motoboys } = useContext(MotoboyContext);
  const [page, setPage] = useState();

  // essa funcao lida com o evento click em cima de uma option dentro do select
  const handleClick = event => {
    let id = event.target.value;
    if (id === 'form') {
      setPage(<MotoboyForm />);
    } else {
      setPage(<MotoboyItem id={id} handleRemove={handleRemove} />);
    }
  };

  const handleRemove = () => {
    setPage('');
  };

  return (
    <Wrapper>
      <select name='motoboys' id='motoboys' multiple>
        <option onClick={handleClick} value='form'>
          New +
        </option>

        {motoboys.map(item => (
          <option onClick={handleClick} value={item.id} key={item.id}>
            {item.nameAtNavigationTab}
          </option>
        ))}
      </select>

      {page}
    </Wrapper>
  );
};
