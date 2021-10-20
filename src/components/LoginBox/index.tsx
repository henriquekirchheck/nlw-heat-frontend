import LoginBoxStyles from './styles.module.scss'
import { VscGithubInverted } from "react-icons/vsc"

function LoginBox() {
  return (
    <div className={LoginBoxStyles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href="#" className={LoginBoxStyles.signInWithGithub}>
        <VscGithubInverted size={42} />
        Entrar com GitHub
      </a>
    </div>
  )
}

export { LoginBox }
