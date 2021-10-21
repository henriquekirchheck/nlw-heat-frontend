import LoginBoxStyles from './styles.module.scss'
import { VscGithubInverted } from "react-icons/vsc"

function LoginBox() {
  const signInURL = `https://github.com/login/oauth/authorize?scope=user&client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}`

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
