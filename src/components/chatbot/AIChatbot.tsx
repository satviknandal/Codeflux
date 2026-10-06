import React, { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Check,
  ChevronRight,
  Headphones,
  MessageCircle,
  Minimize2,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { chatbotCategories, type ChatbotCategory, type ChatbotItem } from "./ChatbotData";

interface LiveMessage {
  id: number;
  sender: "bot" | "user";
  text: string;
}


const AIChatbot: React.FC = () => {
  const navigate = useNavigate();
  
    const [isOpen, setIsOpen] = useState(false);
  
    const [selectedCategory, setSelectedCategory] =
      useState<ChatbotCategory | null>(null);
  
    const [selectedItem, setSelectedItem] =
      useState<ChatbotItem | null>(null);
  
    const [isLiveChat, setIsLiveChat] = useState(false);
  
    const [message, setMessage] = useState("");
  
    const [liveMessages, setLiveMessages] = useState<LiveMessage[]>([
      {
        id: 1,
        sender: "bot",
        text: "Hi! Welcome to Codeflux. How can we help you today?",
      },
    ]);
  
    const messagesEndRef = useRef<HTMLDivElement>(null);
  
    /* =========================================================
       AUTO SCROLL LIVE CHAT
    ========================================================= */
  
    useEffect(() => {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }, [liveMessages]);
  
    /* =========================================================
       NAVIGATION
    ========================================================= */
  
    const openChat = () => {
      setIsOpen(true);
    };
  
    const closeChat = () => {
      setIsOpen(false);
    };
  
    const resetChat = () => {
      setSelectedCategory(null);
      setSelectedItem(null);
      setIsLiveChat(false);
    };
  
    const handleCategoryClick = (category: ChatbotCategory) => {
      setSelectedCategory(category);
      setSelectedItem(null);
    };
  
    const handleItemClick = (item: ChatbotItem) => {
      setSelectedItem(item);
    };
  
    const handleBack = () => {
      if (selectedItem) {
        setSelectedItem(null);
        return;
      }
  
      if (selectedCategory) {
        setSelectedCategory(null);
        return;
      }
  
      if (isLiveChat) {
        setIsLiveChat(false);
      }
    };
  
    const openLiveChat = () => {
      setIsLiveChat(true);
      setSelectedCategory(null);
      setSelectedItem(null);
    };
  
    const handleCta = (path?: string) => {
      if (!path) return;
  
      setIsOpen(false);
      resetChat();
      navigate(path);
    };
  
    /* =========================================================
       LIVE CHAT
    ========================================================= */
  
    const sendMessage = () => {
      const trimmedMessage = message.trim();
  
      if (!trimmedMessage) return;
  
      const userMessage: LiveMessage = {
        id: Date.now(),
        sender: "user",
        text: trimmedMessage,
      };
  
      setLiveMessages((previous) => [
        ...previous,
        userMessage,
      ]);
  
      setMessage("");
  
      /*
        Replace this section with your API call.
  
        Example:
  
        await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: trimmedMessage,
          }),
        });
      */
  
      setTimeout(() => {
        setLiveMessages((previous) => [
          ...previous,
          {
            id: Date.now() + 1,
            sender: "bot",
            text: "Thanks for your message. A Codeflux team member will be able to assist you shortly.",
          },
        ]);
      }, 700);
    };
  
    const handleMessageKeyDown = (
      event: React.KeyboardEvent<HTMLInputElement>
    ) => {
      if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
      }
    };
  
    /* =========================================================
       RENDER HEADER
    ========================================================= */
  
    const renderHeader = () => {
      const showBack =
        Boolean(selectedCategory) ||
        Boolean(selectedItem) ||
        isLiveChat;
  
      return (
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-slate-200/80
            px-4
            py-3.5
          "
        >
          <div className="flex min-w-0 items-center gap-3">
            {showBack && (
              <button
                type="button"
                onClick={handleBack}
                aria-label="Go back"
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  text-slate-500
                  transition
                  hover:bg-slate-100
                  hover:text-slate-900
                "
              >
                <ArrowLeft size={17} />
              </button>
            )}
  
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-slate-900
                text-white
                shadow-sm
              "
            >
              {isLiveChat ? (
                <Headphones size={18} />
              ) : (
                <Bot size={18} />
              )}
            </div>
  
            <div className="min-w-0">
              <h3 className="truncate text-sm font-semibold text-slate-900">
                {isLiveChat
                  ? "Live Chat"
                  : selectedItem?.title ||
                    selectedCategory?.title ||
                    "Codeflux Assistant"}
              </h3>
  
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
  
                <span className="text-[11px] text-slate-500">
                  {isLiveChat
                    ? "We're here to help"
                    : "Online"}
                </span>
              </div>
            </div>
          </div>
  
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={closeChat}
              aria-label="Minimize chatbot"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                text-slate-400
                transition
                hover:bg-slate-100
                hover:text-slate-900
              "
            >
              <Minimize2 size={16} />
            </button>
          </div>
        </div>
      );
    };
  
    /* =========================================================
       HOME / CATEGORIES
    ========================================================= */
  
    const renderHome = () => (
      <>
        <div className="px-4 pb-3 pt-4">
          <div className="mb-1 flex items-center gap-2">
            <Sparkles
              size={16}
              className="text-slate-900"
            />
  
            <h4 className="text-sm font-semibold text-slate-900">
              How can we help?
            </h4>
          </div>
  
          <p className="text-xs leading-5 text-slate-500">
            Choose a service to learn more about how Codeflux
            can help your business.
          </p>
        </div>
  
        <div className="max-h-[390px] overflow-y-auto px-3 pb-2">
          <div className="space-y-1.5">
            {chatbotCategories.map((category) => {
              const Icon = category.icon;
  
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => handleCategoryClick(category)}
                  className="
                    group
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-transparent
                    p-3
                    text-left
                    transition-all
                    duration-200
                    hover:border-slate-200
                    hover:bg-slate-50
                  "
                >
                  <span
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-slate-100
                      text-slate-700
                      transition
                      group-hover:bg-white
                      group-hover:shadow-sm
                    "
                  >
                    <Icon size={18} />
                  </span>
  
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium text-slate-800">
                      {category.title}
                    </span>
  
                    <span className="mt-0.5 block truncate text-[11px] text-slate-500">
                      {category.description}
                    </span>
                  </span>
  
                  <ChevronRight
                    size={17}
                    className="
                      shrink-0
                      text-slate-300
                      transition
                      group-hover:translate-x-0.5
                      group-hover:text-slate-600
                    "
                  />
                </button>
              );
            })}
          </div>
        </div>
      </>
    );
  
    /* =========================================================
       CATEGORY / SUBSECTIONS
    ========================================================= */
  
    const renderCategory = () => {
      if (!selectedCategory) return null;
  
      const Icon = selectedCategory.icon;
  
      return (
        <>
          <div className="px-4 pb-3 pt-4">
            <div className="flex items-start gap-3">
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-slate-100
                  text-slate-700
                "
              >
                <Icon size={19} />
              </div>
  
              <div>
                <h4 className="text-sm font-semibold text-slate-900">
                  {selectedCategory.title}
                </h4>
  
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {selectedCategory.description}
                </p>
              </div>
            </div>
          </div>
  
          <div className="max-h-[390px] overflow-y-auto px-3 pb-2">
            <p className="mb-2 px-1 text-[11px] font-medium uppercase tracking-wide text-slate-400">
              What are you looking for?
            </p>
  
            <div className="space-y-1.5">
              {selectedCategory.items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleItemClick(item)}
                  className="
                    group
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-transparent
                    p-3
                    text-left
                    transition-all
                    duration-200
                    hover:border-slate-200
                    hover:bg-slate-50
                  "
                >
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium text-slate-800">
                      {item.title}
                    </span>
  
                    <span className="mt-1 block text-[11px] leading-4.5 text-slate-500">
                      {item.description}
                    </span>
                  </span>
  
                  <ChevronRight
                    size={17}
                    className="
                      shrink-0
                      text-slate-300
                      transition
                      group-hover:translate-x-0.5
                      group-hover:text-slate-600
                    "
                  />
                </button>
              ))}
            </div>
          </div>
        </>
      );
    };
  
    /* =========================================================
       DETAILS
    ========================================================= */
  
    const renderDetails = () => {
      if (!selectedItem) return null;
  
      return (
        <>
          <div className="max-h-[420px] overflow-y-auto px-4 pb-4 pt-4">
            <div className="mb-4">
              <div
                className="
                  mb-3
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-slate-900
                  text-white
                "
              >
                <Sparkles size={19} />
              </div>
  
              <h4 className="text-base font-semibold text-slate-900">
                {selectedItem.title}
              </h4>
  
              <p className="mt-2 text-xs leading-5 text-slate-500">
                {selectedItem.description}
              </p>
            </div>
  
            {selectedItem.details &&
              selectedItem.details.length > 0 && (
                <div className="mb-5">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                    What we can help with
                  </p>
  
                  <div className="space-y-2">
                    {selectedItem.details.map((detail) => (
                      <div
                        key={detail}
                        className="flex items-start gap-2.5"
                      >
                        <span
                          className="
                            mt-0.5
                            flex
                            h-4
                            w-4
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-emerald-50
                            text-emerald-600
                          "
                        >
                          <Check size={10} strokeWidth={3} />
                        </span>
  
                        <span className="text-xs leading-5 text-slate-600">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
  
            <button
              type="button"
              onClick={() => handleCta(selectedItem.ctaPath)}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-slate-900
                px-4
                py-3
                text-xs
                font-semibold
                text-white
                shadow-sm
                transition-all
                duration-200
                hover:bg-slate-800
                hover:shadow-md
              "
            >
              {selectedItem.cta || "Get in touch"}
  
              <ArrowRight size={15} />
            </button>
          </div>
        </>
      );
    };
  
    /* =========================================================
       LIVE CHAT
    ========================================================= */
  
    const renderLiveChat = () => (
      <div className="flex min-h-0 flex-1 flex-col">
        <div
          className="
            flex-1
            overflow-y-auto
            px-4
            py-4
          "
        >
          <div className="space-y-3">
            {liveMessages.map((chatMessage) => (
              <div
                key={chatMessage.id}
                className={`flex ${
                  chatMessage.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`
                    max-w-[82%]
                    rounded-2xl
                    px-3.5
                    py-2.5
                    text-xs
                    leading-5
                    ${
                      chatMessage.sender === "user"
                        ? "rounded-br-md bg-slate-900 text-white"
                        : "rounded-bl-md bg-slate-100 text-slate-700"
                    }
                  `}
                >
                  {chatMessage.text}
                </div>
              </div>
            ))}
  
            <div ref={messagesEndRef} />
          </div>
        </div>
  
        <div className="border-t border-slate-200 p-3">
          <div
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              px-3
              py-1.5
              transition
              focus-within:border-slate-400
              focus-within:bg-white
            "
          >
            <input
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyDown={handleMessageKeyDown}
              placeholder="Type your message..."
              className="
                min-w-0
                flex-1
                bg-transparent
                py-2
                text-xs
                text-slate-900
                outline-none
                placeholder:text-slate-400
              "
            />
  
            <button
              type="button"
              onClick={sendMessage}
              disabled={!message.trim()}
              aria-label="Send message"
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-slate-900
                text-white
                transition
                hover:bg-slate-800
                disabled:cursor-not-allowed
                disabled:opacity-30
              "
            >
              <Send size={14} />
            </button>
          </div>
  
          <p className="mt-2 text-center text-[9px] text-slate-400">
            A Codeflux team member will respond as soon as possible.
          </p>
        </div>
      </div>
    );
  
    /* =========================================================
       FOOTER
    ========================================================= */
  
    const renderFooter = () => {
      if (isLiveChat) return null;
  
      return (
        <div className="border-t border-slate-200/80 p-3">
          <button
            type="button"
            onClick={openLiveChat}
            className="
              group
              flex
              w-full
              items-center
              gap-3
              rounded-xl
              bg-slate-50
              px-3
              py-2.5
              text-left
              transition
              hover:bg-slate-100
            "
          >
            <span
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white
                text-slate-700
                shadow-sm
              "
            >
              <MessageCircle size={16} />
            </span>
  
            <span className="min-w-0 flex-1">
              <span className="block text-xs font-semibold text-slate-800">
                Talk to a person
              </span>
  
              <span className="block text-[10px] text-slate-500">
                Chat with the Codeflux team
              </span>
            </span>
  
            <ChevronRight
              size={15}
              className="
                text-slate-300
                transition
                group-hover:translate-x-0.5
                group-hover:text-slate-600
              "
            />
          </button>
        </div>
      );
    };
  
    /* =========================================================
       CLOSED STATE
    ========================================================= */
  
    if (!isOpen) {
      return (
        <button
          type="button"
          onClick={openChat}
          aria-label="Open Codeflux chatbot"
          className="
            group
            fixed
            bottom-5
            right-5
            z-[110]
  
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
  
            bg-slate-900
            text-white
  
            shadow-[0_10px_35px_rgba(0,0,0,0.22)]
  
            transition-all
            duration-300
            ease-out
  
            hover:scale-110
            hover:shadow-[0_15px_45px_rgba(0,0,0,0.28)]
  
            focus:outline-none
            focus:ring-4
            focus:ring-slate-300
          "
        >
          <span
            className="
              absolute
              inset-0
              rounded-full
              bg-white/10
              opacity-0
              transition
              duration-300
              group-hover:scale-125
              group-hover:opacity-100
            "
          />
  
          <MessageCircle
            size={25}
            className="relative transition-transform duration-300 group-hover:rotate-6"
          />
  
          <span
            className="
              absolute
              right-0
              top-0
              h-3
              w-3
              rounded-full
              border-2
              border-white
              bg-emerald-500
            "
          />
        </button>
      );
    }
  
    /* =========================================================
       OPEN CHAT
    ========================================================= */
  
    return (
      <div
        className="
          fixed
          bottom-5
          right-5
          z-[110]
  
          w-[390px]
          max-w-[calc(100vw-32px)]
  
          overflow-hidden
          rounded-2xl
          border
          border-slate-200/80
          bg-white
  
          shadow-[0_20px_60px_rgba(0,0,0,0.18)]
  
          animate-[chatbotIn_0.25s_ease-out]
        "
        role="dialog"
        aria-label="Codeflux chatbot"
      >
        {renderHeader()}
  
        {isLiveChat
          ? renderLiveChat()
          : selectedItem
          ? renderDetails()
          : selectedCategory
          ? renderCategory()
          : renderHome()}
  
        {renderFooter()}
  
        {/* =====================================================
            MOBILE CLOSE / MINIMIZE AREA
        ===================================================== */}
  
        <button
          type="button"
          onClick={closeChat}
          aria-label="Close chatbot"
          className="
            absolute
            right-2
            top-2
  
            hidden
            max-md:flex
  
            h-8
            w-8
            items-center
            justify-center
            rounded-full
  
            bg-white/80
            text-slate-500
            shadow-sm
            backdrop-blur
  
            transition
            hover:bg-white
            hover:text-slate-900
          "
        >
          <X size={16} />
        </button>
      </div>
    );
}

export default AIChatbot;
