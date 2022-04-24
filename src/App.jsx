import { MotoboyProvider } from './context/MotoboyContext'
import { ClientProvider } from './context/ClientContext'
import { Path } from './pages/Path/'
import { GlobalStyle } from './style/GlobalStyle'

function App() {
  return (
    <div>
      <ClientProvider>
        <MotoboyProvider>
          <Path />
          <GlobalStyle />
        </MotoboyProvider>
      </ClientProvider>
    </div>
  )
}

export default App
