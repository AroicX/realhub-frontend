import React, { useEffect, useRef, useState } from "react";
import Pusher from "pusher-js";
import SVG from "react-inlinesvg";
import Nav from "@/components/nav/nav";
import useAuth from "@/hooks/useAuth";
import api from "@/services/api";
import { formatDate } from "@/utils/helpers";

const Inbox = () => {
  const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_API_KEY, {
    cluster: process.env.NEXT_PUBLIC_CLUSTER,
    encrypted: true,
  });
  const channel = pusher.subscribe("messages");
  channel.bind("chat", (data) => {
    console.log(data);
  });

  const [state, setState] = useState({
    users: [],
    currentUser: null,
    messages: [],
    message: "",
  });

  const token = localStorage.getItem("user-data");
  const parsedToken = JSON.parse(token);

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
  };
  useEffect(scrollToBottom, [state.messages]);

  const sendMessage = async () => {
    const date = new Date();
    const currentMessage = state.message;

    setState({
      ...state,
      message: "",
      messages: [
        ...state.messages,
        {
          message: currentMessage,
          created_at: JSON.stringify(date),
          sender_id: parsedToken.user.id,
        },
      ],
    });
    await api.post("/messaging/send", {
      sender_id: parsedToken.user.id,
      receiver_id: state.currentUser,
      message: state.message,
    });
  };

  const getUsers = async () => {
    const startChat = localStorage.getItem("start-chat");
    const user = JSON.parse(startChat);

    try {
      const { data } = await api.get("/messaging/get-user-list");
      if (user)
        setState({ ...state, users: [user, ...state.users, ...data.data] });
      else setState({ ...state, users: [...state.users, ...data.data] });

      localStorage.removeItem("start-chat");
    } catch (error) {}
  };

  const getMessages = async () => {
    const { data } = await api.post("/messaging/get-message", {
      sender_id: parsedToken.user.id,
      receiver_id: state.currentUser,
    });
    setState({ ...state, messages: data.data });
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (state.currentUser) {
      getMessages();
    }
  }, [state.currentUser]);
  return (
    <div className=" font-inter h-screen">
      <Nav custom={true} />
      <div className="w-full flex flex-row pt-12 inbox_container">
        <div className="w-2/5 border-r-2 border-light-gray">
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
                    onClick={() => setState({ ...state, currentUser: user.id })}
                    key={id}
                    className={`cursor-pointer flex px-8 py-4 flex-row items-center mb-6 ${
                      user.id === state.currentUser ? "bg-light" : ""
                    }`}
                  >
                    <div>
                      <img
                        className="w-16 h-16 rounded-2xl"
                        src="/images/person.png"
                        alt="*"
                      />
                    </div>
                    <div className="ml-6 font-inter flex-1">
                      <div className="text-dark-gray mb-2 text-sm">
                        {user.name}
                      </div>
                      <div className="font-medium text-lg">
                        Hey mudia, how was your experience with realhub?
                      </div>
                    </div>
                    <div>
                      <SVG src="/svg/inbox.svg"></SVG>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="w-3/5 inbox_bg flex flex-col h-full justify-end pb-20">
          {!state.currentUser ? (
            <div className="w-full h-full flex items-center justify-center pb-10 px-10 font-unna text-4xl leading-10 px-24 text-center">
              Connect and share experiences with other Hubspot users
            </div>
          ) : (
            <>
              {state.messages && (
                <div className="overflow-y-auto h-full px-10 flex-col justify-end">
                  {state.messages.map((message, id) => {
                    return (
                      <>
                        {message.sender_id === parsedToken.user.id ? (
                          <div
                            key={id}
                            className="flex flex-row justify-end mb-10"
                          >
                            <div className="text-white bg-sent px-4 pt-8 pb-2 max-2/4">
                              <div>{message.message}</div>
                              <div className="text-right mt-4 text-xs">
                                {formatDate(message.created_at)}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div
                            key={id}
                            className="flex flex-row justify-start mt-10"
                          >
                            <div className="text-dark-gray bg-white px-4 pt-8 pb-2 max-2/4">
                              <div>{message.message}</div>
                              <div className="text-right mt-4 text-xs">
                                {formatDate(message.created_at)}
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    );
                  })}
                  <div ref={messagesEndRef}></div>
                </div>
              )}
              <div className="mt-10 bg-white flex flex-row border pr-8 items-center mx-10">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    sendMessage();
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
  );
};

export default useAuth(Inbox);

{
  /* <div className="flex px-8 py-4 flex-row items-center mb-6">
              <div>
                <img
                  className="w-16 h-16 rounded-2xl"
                  src="/images/person.png"
                  alt="*"
                />
              </div>
              <div className="ml-6 font-inter flex-1">
                <div className="text-dark-gray mb-2 text-sm">Afolabi Tobi</div>
                <div className="font-medium text-lg">
                  Hey mudia, how was your experience with realhub?
                </div>
              </div>
              <div>
                <SVG src="/svg/inbox.svg"></SVG>
              </div>
            </div> */
}

{
  /* <div className="flex px-8 py-4 flex-row items-center mb-6 bg-light">
              <div>
                <img
                  className="w-16 h-16 rounded-2xl"
                  src="/images/person.png"
                  alt="*"
                />
              </div>
              <div className="ml-6 font-inter flex-1">
                <div className="text-dark-gray mb-2 text-sm">Joy kenneth</div>
                <div className="text-dark-gray text-sm">
                  I’ll meet you at the house then.
                </div>
              </div>
              <div>
                <SVG src="/svg/seen.svg"></SVG>
              </div>
            </div>
            <div className="flex px-8 py-4 flex-row items-center mb-6">
              <div>
                <img
                  className="w-16 h-16 rounded-2xl"
                  src="/images/person.png"
                  alt="*"
                />
              </div>
              <div className="ml-6 font-inter flex-1">
                <div className="text-dark-gray mb-2 text-sm">Joy kenneth</div>
                <div className="text-dark-gray text-sm">
                  I’ll meet you at the house then.
                </div>
              </div>
              <div>
                <SVG src="/svg/seen.svg"></SVG>
              </div>
            </div>
         */
}
