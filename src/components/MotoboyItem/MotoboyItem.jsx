import { useContext } from 'react';
import { MotoboyContext } from '../../context/MotoboyContext';

export const MotoboyItem = props => {
  const { motoboys, removeMotoboy, updateMotoboy, saveUpdatesFromMotoboy } = useContext(MotoboyContext);

  //this function handle the delete element motoboy
  const removeThisMotoboy = event => {
    removeMotoboy(event.target.value);
    props.handleRemove();
  };
  // this function handle the update element motoboy
  const updateThisMotoboy = event => {
    if (!event.target.classList.contains('modify')) {
      updateMotoboy(event, event.target.value);
    } else {
      saveUpdatesFromMotoboy(event);
    }
  };
  var item = {};
  motoboys.forEach((motoboy, index) => {
    if (motoboy.id == props.id) {
      item = motoboys[index];
    }
  });

  return (
    <div id={item.id} className='stats' key={item.id}>
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
          <strong>Empresa atual: </strong>
          {item.actualJob}
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
  );
};
