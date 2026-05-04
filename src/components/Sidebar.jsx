import { useState } from "react";
import Avatar from "./Avatar";

export default function Sidebar({ chats, activeChat, onSelect, unreadIds, theme, onToggleTheme }) {
  const [search, setSearch] = useState("");

  const filtered = chats.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full" style={{ backgroundColor: "var(--bg)" }}>
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{ backgroundColor: "var(--panel)" }}
      >
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10 text-sm" />
          <div>
            <p className="font-semibold text-sm" style={{ color: "var(--text)" }}>
              Bakari Juma
            </p>
            <p className="text-xs" style={{ color: "var(--text-sub)" }}>
              Full-Stack Software Engineer
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {/* Theme toggle */}
          <button
            onClick={onToggleTheme}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-full transition-colors"
            style={{ color: "var(--text-muted)" }}
          >
            {theme === "dark" ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Download CV */}
          <a
            href="/Isaac_juma_fullstack_role.pdf"
            download
            title="Download CV"
            className="p-2 rounded-full transition-colors"
            style={{ color: "var(--text-muted)" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Search */}
      <div className="px-3 py-2" style={{ backgroundColor: "var(--bg)" }}>
        <div
          className="flex items-center gap-2 rounded-lg px-3 py-2"
          style={{ backgroundColor: "var(--panel)" }}
        >
          <svg
            className="w-4 h-4 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ color: "var(--text-sub)" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent text-sm outline-none flex-1"
            style={{ color: "var(--text)" }}
          />
        </div>
      </div>

      {/* Chat list */}
      <div className="flex-1 overflow-y-auto">
        {filtered.map((chat) => {
          const isUnread = unreadIds.has(chat.id);
          const isActive = activeChat?.id === chat.id;

          return (
            <button
              key={chat.id}
              onClick={() => onSelect(chat)}
              className="w-full flex items-center gap-3 px-4 py-3 transition-colors"
              style={{
                backgroundColor: isActive ? "var(--active)" : "transparent",
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.backgroundColor = "var(--hover)";
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                {chat.useProfilePhoto ? (
                  <Avatar className="w-12 h-12 text-sm" />
                ) : (
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ backgroundColor: chat.avatarColor }}
                  >
                    {chat.avatar}
                  </div>
                )}
              </div>

              {/* Chat info */}
              <div
                className="flex-1 min-w-0 text-left border-b pb-3"
                style={{ borderColor: "var(--divider)" }}
              >
                <div className="flex justify-between items-baseline">
                  <p className="font-medium text-sm truncate" style={{ color: "var(--text)" }}>
                    {chat.name}
                  </p>
                  <span className="text-[11px] ml-2 flex-shrink-0" style={{ color: "var(--text-sub)" }}>
                    {chat.time}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-0.5">
                  <p className="text-xs truncate flex-1" style={{ color: "var(--text-sub)" }}>
                    {chat.lastMessage}
                  </p>
                  {isUnread && (
                    <span
                      className="ml-2 w-5 h-5 rounded-full text-[10px] font-bold text-white flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "var(--green)" }}
                    >
                      {chat.messages.length}
                    </span>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div
        className="px-4 py-3 border-t"
        style={{ borderColor: "var(--divider)" }}
      >
        <p className="text-xs text-center" style={{ color: "var(--text-sub)" }}>
          {new Date().getFullYear()} Bakari Juma · All rights reserved
        </p>
      </div>
    </div>
  );
}
