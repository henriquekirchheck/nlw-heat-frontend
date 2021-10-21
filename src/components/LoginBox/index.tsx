import LoginBoxStyles from './styles.module.scss'
import { VscGithubInverted } from 'react-icons/vsc'
import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/auth'
import Spinner from 'react-bootstrap/Spinner'

function LoginBox() {
  const { signInURL, loading } = useContext(AuthContext)
  let icon

  if (loading) {
    icon = (
      <Spinner
        animation="border"
        className={LoginBoxStyles.githubIconLoading}
      />
    )
  } else {
    icon = (
      <VscGithubInverted
        size={42}
        className={LoginBoxStyles.githubIconLoading}
      />
    )
  }

  return (
    <div className={LoginBoxStyles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href={signInURL} className={LoginBoxStyles.signInWithGithub}>
        {icon}
        Entrar com GitHub
      </a>
    </div>
  )
}

export { LoginBox }
