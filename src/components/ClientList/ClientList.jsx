import { useContext, useState } from 'react';
import { ClientContext } from '../../context/ClientContext';
import { ClientForm } from '../ClientForm/';
import { ClientItem } from '../ClientItem/ClientItem';
import { Wrapper } from './style';

export const ClientList = () => {
  const { clients } = useContext(ClientContext);
  const [page, setPage] = useState();

  // essa funcao lida com o evento click em cima de uma option dentro do select
  const handleClick = event => {
    let id = event.target.value;
    if (id === 'form') {
      setPage(<ClientForm />);
    } else {
      setPage(<ClientItem id={id} handleRemove={handleRemove} />);
    }
  };

  const handleRemove = () => {
    setPage('');
  };

  return (
    <Wrapper>
      <select name='clients' id='clients' multiple>
        <option onClick={handleClick} value='form'>
          New +
        </option>
        {clients.map((item, index) => (
          <option onClick={handleClick} value={item.id} key={item.id}>
            {item.nameAtNavigationTab}
          </option>
        ))}
      </select>

      {page}
    </Wrapper>
  );
};
