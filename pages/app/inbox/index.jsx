import React, { useEffect, useRef, useState } from 'react'
import Pusher from 'pusher-js'
import SVG from 'react-inlinesvg'
import Nav from '@/components/nav/nav'
import useAuth from '@/hooks/useAuth'
import api from '@/services/api'
import { formatDate } from '@/utils/helpers'
import Covid from '@/components/layout/covid'
// import { useUser } from "@/hooks/useUser";

const Inbox = () => {
  const [state, setState] = useState({
    users: [],
    currentUser: null,
    activeUser: null,
    messages: [],
    message: '',
  })

  const [parsedToken, setToken] = useState({})

  const [chatId, setChatId] = useState(null)

  const [pusherData, setPusher] = useState(null)

  // const { user } = useUser();

  useEffect(() => {
    const token = localStorage?.getItem('user-data')
    const parsedToken = JSON.parse(token)

    setToken(parsedToken)

    Pusher.logToConsole = true

    var pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_API_KEY, {
      cluster: 'eu',
    })

    var channel = pusher.subscribe('messages')
    channel.bind(`chat`, function (data) {
      setPusher(data)
    })
    getUsers()
  }, [])

  useEffect(() => {
    if (state.currentUser) {
      getMessages()
    }
  }, [state.currentUser])

  useEffect(() => {
    if (pusherData) {
      setState({ ...state, messages: [...state.messages, pusherData] })
    }
  }, [pusherData])

  const messagesEndRef = useRef(null)
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'auto' })
  }
  useEffect(scrollToBottom, [state.messages])

  const sendMessage = async () => {
    const token = localStorage?.getItem('user-data')
    const parsedToken = JSON.parse(token)
    const date = new Date()
    const currentMessage = state.message
    setState({ ...state, message: '' })

    setState({
      ...state,
      message: '',
      messages: [
        ...state.messages,
        {
          message: currentMessage,
          created_at: date,
          sender_id: parsedToken.user.id,
        },
      ],
    })

    let data
    if (chatId) {
      data = {
        chat_id: chatId,
        sender_id: parsedToken.user.id,
        receiver_id: state.currentUser,
        message: state.message,
      }
    } else {
      data = {
        sender_id: parsedToken.user.id,
        receiver_id: state.currentUser,
        message: state.message,
      }
    }
    await api.post('/messaging/send', data)
  }

  const checkIfUserExist = (id, users) => {
    if (users)
      for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
          return users[i]
        }
      }
  }

  const getUsers = async () => {
    const user = JSON.parse(localStorage.getItem('start-chat'))
    try {
      const { data } = await api.get('/messaging/get-user-list')
      if (user && !checkIfUserExist(user.id, data.data))
        setState({ ...state, users: [user, ...state.users, ...data.data] })
      else setState({ ...state, users: [...state.users, ...data.data] })

      localStorage.removeItem('start-chat')
    } catch (error) {}
  }

  const getMessages = async () => {
    if (chatId) {
      const { data } = await api.post('/messaging/get-message', {
        chat_id: chatId,
      })
      setState({ ...state, messages: data.data })
    }
  }
  const goBack = () => {
    setState({ ...state, currentUser: null, activeUser: null })
  }
  return (
    <div className=" font-inter h-screen">
      {state.currentUser && (
        <div className="w-full fixed top-10 flex justify-between md:hidden mt-2 ml-4 p-2 pb-4 ">
          {' '}
          <b className="mx-3">{state.activeUser.name}</b>
          <button className="flex bg-red mr-10" onClick={goBack}>
            <SVG className="m-2 " src="/svg/back.svg"></SVG>
          </button>
        </div>
      )}
      <Covid />
      <Nav custom={{ inbox: true, message: state.currentUser }} />
      <div className="w-full flex flex-row pt-12 inbox_container">
        <div
          className={`w-full md:w-2/5 border-r-2 border-light-gray ${
            state.currentUser ? 'hidden md:block' : ''
          }`}
        >
          <div className="px-8 py-4 font-unna text-dark-gray text-4xl flex flex-row items-center justify-between mb-10">
            <div>Conversations</div>
            <div>
              <SVG src="/svg/search.svg"></SVG>
            </div>
          </div>
          <div>
            {state.users &&
              state.users.map((user, id) => {
                return (
                  <div
                    onClick={() => {
                      setState({
                        ...state,
                        currentUser: user.id,
                        activeUser: user,
                      })
                      if (user.chat_id) {
                        setChatId(user.chat_id)
                      }
                    }}
                    key={id}
                    className={`cursor-pointer flex px-8 py-4 flex-row items-center mb-6 ${
                      user.id === state.currentUser ? 'bg-light' : ''
                    }`}
                  >
                    <div>
                      <img
                        className="w-16 h-16 border-50p"
                        src="https://picsum.photos/200"
                        alt="*"
                      />
                    </div>
                    <div className="ml-6 font-inter flex-1">
                      <div className="text-dark-gray font-inter--bold text-xl mb-2 text-sm">
                        {user.name}
                      </div>
                      <div className="font-medium text-sm font-inter--light">
                        ......
                      </div>
                    </div>
                    <div>
                      <SVG src="/svg/inbox.svg"></SVG>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
        <div
          className={`w-full relative md:w-3/5 inbox_bg flex-col h-full justify-end pb-10 ${
            state.currentUser ? 'flex' : 'hidden'
          }`}
        >
          {!state.currentUser ? (
            <div className="w-full h-full flex items-center justify-center pb-10 font-unna text-4xl leading-10 px-24 text-center">
              Connect and share experiences with other Hubspot users
            </div>
          ) : (
            <>
              {state.messages && (
                <div
                  className="overflow-y-auto  h-full px-10 flex-col justify-end"
                  ref={messagesEndRef}
                >
                  {state.messages.map((message, id) => {
                    return (
                      <div key={id}>
                        {message.sender_id === parsedToken.user.id ? (
                          <div className="flex flex-row justify-end mb-10">
                            <div className="text-white bg-sent px-4 pt-8 pb-2 max-2/4">
                              <div>{message.message}</div>
                              <div className="text-right mt-4 text-xs">
                                {formatDate(message.created_at)}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-row justify-start mt-10">
                            <div className="text-dark-gray bg-white px-4 pt-8 pb-2 max-2/4">
                              <div>{message.message}</div>
                              <div className="text-right mt-4 text-xs">
                                {formatDate(message.created_at)}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
              <div className=" mt-10 bg-white flex flex-row border pr-8 items-center mx-10">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    sendMessage()
                  }}
                  className="w-full"
                >
                  <input
                    className="bg-white w-full py-4 pl-4"
                    placeholder="Type your message"
                    value={state.message}
                    onChange={(e) =>
                      setState({ ...state, message: e.target.value })
                    }
                  />
                </form>

                <div onClick={sendMessage}>
                  <SVG src="/svg/send-icon.svg"></SVG>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default useAuth(Inbox)
