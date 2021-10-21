import { useContext } from 'react'
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc'
import { AuthContext } from '../../contexts/auth'
import SendMessageFormStyles from './styles.module.scss'

function SendMessageForm() {
  const { user } = useContext(AuthContext)

  return (
    <div className={SendMessageFormStyles.sendMessageFormWrapper}>
      <button className={SendMessageFormStyles.signOutButton}>
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

      <form className={SendMessageFormStyles.sendMessageForm}>
        <label htmlFor="message">Mensagem</label>
        <textarea
          name="message"
          id="message"
          placeholder="Qual sua expectativa para o evento?"
        />

        <button type="submit">Enviar Mensagem</button>
      </form>
    </div>
  )
}

export { SendMessageForm }
