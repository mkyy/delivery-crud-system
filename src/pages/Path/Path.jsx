import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '../../components/Header'
import { MotoboyPage } from '../MotoboyPage/'
import { WelcomePage } from '../WelcomePage/'
import { ClientPage } from '../ClientPage'
import styled from 'styled-components'

export const Path = () => {
  return (
    <BrowserRouter>
      <Header />
      <PageWrapper>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/motoboys' element={<MotoboyPage />} />
          <Route path='/clientes' element={<ClientPage />} />
        </Routes>
      </PageWrapper>
    </BrowserRouter>
  )
}

const PageWrapper = styled.section`
  margin: 0px auto;
  width: 80vw;
  height: 75vh;
  background-color: #ddd;
  margin-bottom: 30px;
  border-radius: 0px 0px 15px 15px;
`
