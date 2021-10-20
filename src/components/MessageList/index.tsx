import MessageListStyle from './styles.module.scss'
import logoImage from '../../assets/logo.svg'

function MessageList() {
  return (
    <div className={MessageListStyle.messageListWrapper}>
      <img src={logoImage} alt="DoWhile 2021" />
      <ul className={MessageListStyle.messageList}>
        <li className={MessageListStyle.message}>
          <p className={MessageListStyle.messageContent}>DDDDDDDDDDDDDDDDD</p>
          <div className={MessageListStyle.messageUser}>
            <div className={MessageListStyle.userImage}>
              <img
                src="https://github.com/henriquekirchheck.png"
                alt="Imagem do {placeholder}"
              />
            </div>
            <span>Henrique Kirch Heck</span>
          </div>
        </li>
        <li className={MessageListStyle.message}>
          <p className={MessageListStyle.messageContent}>CCCCCCCCCCCCCC</p>
          <div className={MessageListStyle.messageUser}>
            <div className={MessageListStyle.userImage}>
              <img
                src="https://github.com/henriquekirchheck.png"
                alt="Imagem do {placeholder}"
              />
            </div>
            <span>Henrique Kirch Heck</span>
          </div>
        </li>
        <li className={MessageListStyle.message}>
          <p className={MessageListStyle.messageContent}>BBBBBBBBBBBBBB</p>
          <div className={MessageListStyle.messageUser}>
            <div className={MessageListStyle.userImage}>
              <img
                src="https://github.com/henriquekirchheck.png"
                alt="Imagem do {placeholder}"
              />
            </div>
            <span>Henrique Kirch Heck</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export { MessageList }
