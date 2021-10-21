import LoginBoxStyles from './styles.module.scss'
import { VscGithubInverted } from 'react-icons/vsc'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'

function LoginBox() {
  const { signInURL, user } = useContext(AuthContext)

  console.log(user)

  return (
    <div className={LoginBoxStyles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href={signInURL} className={LoginBoxStyles.signInWithGithub}>
        <VscGithubInverted size={42} />
        Entrar com GitHub
      </a>
    </div>
  )
}

export { LoginBox }
