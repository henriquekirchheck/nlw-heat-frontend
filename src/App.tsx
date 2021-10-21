import { useContext } from 'react'
import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'
import { SendMessageForm } from './components/SendMessageForm'
import { AuthContext } from './contexts/auth'
import AppStyles from './styles/App.module.scss'

function App() {
  const { user } = useContext(AuthContext)

  return (
    <main
      className={`${AppStyles.contentWrapper} ${
        !!user ? AppStyles.contentSigned : ''
      }`}
    >
      <MessageList numberOfMessages={3} />
      {!!user ? <SendMessageForm /> : <LoginBox />}
    </main>
  )
}

export { App }
