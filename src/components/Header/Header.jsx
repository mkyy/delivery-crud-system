import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Header = () => {
  const handleClick = (event) => {
    const atualOnDiv = document.querySelector('.on')
    if (atualOnDiv) {
      atualOnDiv.classList.remove('on')
    }
    event.target.classList.add('on')
  }

  return (
    <HeaderWrapper>
      <h1>delivery-crud-system</h1>
      <div className='nav'>
        <Link className='link' onClick={handleClick} to={'/'}>
          Home
        </Link>
        <Link className='link' onClick={handleClick} to={'/motoboys'}>
          Motoboys
        </Link>
        <Link className='link' onClick={handleClick} to={'/clientes'}>
          Clientes
        </Link>
      </div>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  text-align: center;
  width: 80vw;
  margin: 0px auto;

  .nav {
    text-align: right;
    background-color: #bbb;
    padding: 20px 0px;
    border-radius: 15px 15px 0px 0px;

    .link {
      color: #000;
      text-decoration: none;
      padding: 20px;

      &:last-child {
        border-top-right-radius: 15px;
      }
    }
  }
  .on {
    background-color: #ddd;
  }
`
