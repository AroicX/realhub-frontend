import Nav from "@/components/nav/nav";
import React, { useState } from "react";

const Inbox = () => {
  const [noMessage, setMessage] = useState(false);
  return (
    <div className="h-screen font-inter">
      <Nav inbox={true} />
      <div className="w-full flex flex-row pt-12 h-full">
        <div className="w-2/5 border-r-2 border-light-gray">
          <div className="px-8 py-4 font-unna text-dark-gray text-4xl flex flex-row items-center justify-between mb-10">
            <div>Conversations</div>
            <div>
              <img src="/svg/search.svg" alt="*" />
            </div>
          </div>
          <div>
            <div className="flex px-8 py-4 flex-row items-center mb-6">
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
                <img src="/svg/inbox.svg" alt="*" />
              </div>
            </div>
            <div className="flex px-8 py-4 flex-row items-center mb-6 bg-light">
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
                <img src="/svg/seen.svg" alt="*" />
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
                <img src="/svg/seen.svg" alt="*" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/5 inbox_bg flex flex-col h-full justify-end pb-10 px-10">
          {noMessage && (
            <div className="w-full h-full flex items-center justify-center font-unna text-4xl leading-10 px-24 text-center">
              Connect and share experiences with other Hubspot users
            </div>
          )}
          {!noMessage && (
            <div>
              <div className="flex flex-row justify-end">
                <div className="text-white bg-sent px-4 pt-8 pb-2 max-2/4">
                  <div>
                    Hey, I do not think i can make it to the coffee house. I’ll
                    be home all day.
                  </div>
                  <div className="text-right mt-4 text-xs">11:15</div>
                </div>
              </div>
              <div className="flex flex-row justify-start mt-10">
                <div className="text-dark-gray bg-white px-4 pt-8 pb-2 max-2/4">
                  <div>
                    I’ll meet you at the house then. Do i get you anything as
                    i’m coming?
                  </div>
                  <div className="text-right mt-4 text-xs">11:30</div>
                </div>
              </div>
            </div>
          )}
          <div className="mt-10 bg-white flex flex-row border pr-8">
            <input
              className="bg-white w-full py-4 pl-4"
              placeholder="Type your message"
            />
            <img src="/svg/send-icon.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
