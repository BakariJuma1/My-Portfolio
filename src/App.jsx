import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import { chats } from "./data/chats";

function WelcomeScreen() {
  return (
    <div
      className="flex-1 flex flex-col items-center justify-center"
      style={{ backgroundColor: "var(--active)" }}
    >
      <div className="text-center space-y-4 px-6">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto"
          style={{ backgroundColor: "var(--panel)" }}
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            style={{ color: "var(--text-sub)" }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        <h2 className="text-2xl font-light" style={{ color: "var(--text)" }}>
          Bakari's Portfolio
        </h2>
        <p className="text-sm max-w-xs leading-relaxed" style={{ color: "var(--text-sub)" }}>
          Select a conversation to explore my background, skills, projects, and how to reach me.
        </p>
        <div className="flex flex-wrap justify-center gap-2 pt-2">
          {chats.map((c) => (
            <span
              key={c.id}
              className="text-xs px-3 py-1.5 rounded-full border"
              style={{
                borderColor: "var(--divider)",
                color: "var(--text-sub)",
              }}
            >
              {c.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activeChat, setActiveChat] = useState(null);
  const [mobileView, setMobileView] = useState("sidebar");
  const [unreadIds, setUnreadIds] = useState(new Set(chats.map((c) => c.id)));
  const [theme, setTheme] = useState("dark");

  // Apply theme to html element
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [theme]);

  // Shareable URL: open the right chat on load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const chatId = params.get("chat");
    if (chatId) {
      const found = chats.find((c) => c.id === chatId);
      if (found) {
        setActiveChat(found);
        setMobileView("chat");
        setUnreadIds((prev) => {
          const next = new Set(prev);
          next.delete(found.id);
          return next;
        });
      }
    }
  }, []);

  const handleSelect = (chat) => {
    setActiveChat(chat);
    setMobileView("chat");
    setUnreadIds((prev) => {
      const next = new Set(prev);
      next.delete(chat.id);
      return next;
    });

    // Update URL for shareable links
    const url = new URL(window.location.href);
    url.searchParams.set("chat", chat.id);
    window.history.pushState({}, "", url);
  };

  const handleBack = () => {
    setMobileView("sidebar");
  };

  const handleToggleTheme = () => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };

  return (
    <div className="h-screen flex overflow-hidden" style={{ backgroundColor: "var(--bg)" }}>
      {/* Sidebar */}
      <div
        className={`
          ${mobileView === "chat" ? "hidden" : "flex"}
          md:flex flex-col
          w-full md:w-[380px]
          flex-shrink-0
          border-r
        `}
        style={{ borderColor: "var(--divider)" }}
      >
        <Sidebar
          chats={chats}
          activeChat={activeChat}
          onSelect={handleSelect}
          unreadIds={unreadIds}
          theme={theme}
          onToggleTheme={handleToggleTheme}
        />
      </div>

      {/* Chat panel */}
      <div
        className={`
          ${mobileView === "chat" ? "flex" : "hidden"}
          md:flex flex-1 flex-col min-w-0
        `}
      >
        {activeChat ? (
          <ChatWindow key={activeChat.id} chat={activeChat} onBack={handleBack} />
        ) : (
          <WelcomeScreen />
        )}
      </div>
    </div>
  );
}
