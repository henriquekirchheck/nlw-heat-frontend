import { api } from '../../services/api'

import MessageListStyle from './styles.module.scss'
import logoImage from '../../assets/logo.svg'
import { useEffect, useState } from 'react'

interface IMessageList {
  numberOfMessages: Number
}

type TMessage = {
  id: string
  text: string
  user: {
    name: string
    avatar_url: string
  }
}

function MessageList(props: IMessageList) {
  const [ messages, setMessages ] = useState<TMessage[]>([])

  useEffect(() => {
    api
      .get<TMessage[]>(`messages/last${props.numberOfMessages}`)
      .then((response) => {
        setMessages(response.data)
      })
  }, [])

  return (
    <div className={MessageListStyle.messageListWrapper}>
      <img src={logoImage} alt="DoWhile 2021" />
      <ul className={MessageListStyle.messageList}>
        {messages.map((message) => {
          return (
            <li key={message.id} className={MessageListStyle.message}>
              <p className={MessageListStyle.messageContent}>
                {message.text}
              </p>
              <div className={MessageListStyle.messageUser}>
                <div className={MessageListStyle.userImage}>
                  <img
                    src={message.user.avatar_url}
                    alt={`Imagem do ${message.user.name}`}
                  />
                </div>
                <span>{message.user.name}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export { MessageList }
