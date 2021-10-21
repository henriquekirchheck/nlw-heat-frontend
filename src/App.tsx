import { LoginBox } from "./components/LoginBox"
import { MessageList } from "./components/MessageList"
import AppStyles from "./styles/App.module.scss"

function App() {
  return (
    <main className={AppStyles.contentWrapper}>
      <MessageList numberOfMessages={3}/>
      <LoginBox />
    </main>
  )
}

export { App }
