import { useContext, useState, FormEvent } from 'react'
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc'
import { AuthContext } from '../../contexts/auth'
import { api } from '../../services/api'
import SendMessageFormStyles from './styles.module.scss'

function SendMessageForm() {
  const { user, signOut } = useContext(AuthContext)
  const [message, setMessage] = useState('')

  async function handleSendMessage(event: FormEvent) {
    event.preventDefault()

    if (!message.trim()) return

    await api.post('messages', { message })
    setMessage('')
  }

  return (
    <div className={SendMessageFormStyles.sendMessageFormWrapper}>
      <button className={SendMessageFormStyles.signOutButton} onClick={signOut}>
        <VscSignOut size="32" />
      </button>

      <header className={SendMessageFormStyles.userInformation}>
        <div className={SendMessageFormStyles.userImage}>
          <img src={user?.avatar_url} alt={`Imagem do ${user?.name}`} />
        </div>
        <strong className={SendMessageFormStyles.userName}>{user?.name}</strong>
        <span className={SendMessageFormStyles.userGithub}>
          <VscGithubInverted size={16} />
          {user?.login}
        </span>
      </header>

      <form
        onSubmit={handleSendMessage}
        className={SendMessageFormStyles.sendMessageForm}
      >
        <label htmlFor="message">Mensagem</label>
        <textarea
          name="message"
          id="message"
          placeholder="Qual sua expectativa para o evento?"
          onChange={(event) => setMessage(event.target.value)}
          value={message}
        />

        <button type="submit">Enviar Mensagem</button>
      </form>
    </div>
  )
}

export { SendMessageForm }
