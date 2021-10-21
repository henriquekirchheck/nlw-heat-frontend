import { api } from '../../services/api'
import io from 'socket.io-client'

import MessageListStyle from './styles.module.scss'
import logoImage from '../../assets/logo.svg'
import { useEffect, useState } from 'react'

type IMessageList = {
  numberOfMessages: Number
}

type Message = {
  id: string
  text: string
  user: {
    name: string
    avatar_url: string
  }
}

const messagesQueue: Message[] = []

const socket = io('http://localhost:8000')

socket.on('new_message', (newMessage: Message) => {
  messagesQueue.push(newMessage)
})

function MessageList(props: IMessageList) {
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessages(prevState =>
          [messagesQueue[0], prevState[0], prevState[1]].filter(Boolean)
        )
        messagesQueue.shift()
      }
    }, 3000)
  }, [])

  useEffect(() => {
    api
      .get<Message[]>(`messages/last${props.numberOfMessages}`)
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
              <p className={MessageListStyle.messageContent}>{message.text}</p>
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
