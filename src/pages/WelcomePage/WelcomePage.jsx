import styled from 'styled-components';

export const WelcomePage = () => {
  return (
    <>
      <Div>
        <div id='img-title'>
          <img src='mt-av.png' alt='' />
          <h2>Bem vindo ao sistema de controle de Delivery.</h2>
        </div>
        <p>
          Este sistema consegue manejar os motoboys e as empresas clientes, e trabalha com o vinculo do motoboy na
          empresa contratante. Para facilitar sua vida, o sistema é divido em duas áreas, Motoboys e Clientes.
        </p>
        <p>
          Na área motoboys, você pode criar e editar os motoboys cadastrados na empresa, além de vincular eles a uma
          empresa e controlar todos os contratos.
        </p>
        <p>
          Já na área clientes, é possivel criar e editar empresas clientes, que precisam de serviços de frete, podendo
          ter um ou mais motoboys trabalhando nela por vez.
        </p>
      </Div>
    </>
  );
};

const Div = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  #img-title {
    display: flex;
    justify-content: center;
  }
`;
