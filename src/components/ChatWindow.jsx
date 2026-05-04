import { useState, useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import DateSeparator from "./DateSeparator";
import ProfilePanel from "./ProfilePanel";
import Avatar from "./Avatar";
import { projects } from "../data/chats";
import { playMessageSound } from "../utils/sound";

export default function ChatWindow({ chat, onBack }) {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [headerStatus, setHeaderStatus] = useState(chat.subtitle);
  const [showProfile, setShowProfile] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    setVisibleMessages([]);
    setIsTyping(false);
    setHeaderStatus(chat.subtitle);
    setShowProfile(false);

    const timers = [];
    let totalDelay = 0;

    chat.messages.forEach((msg) => {
      if (msg.from === "visitor") {
        totalDelay += totalDelay === 0 ? 400 : 700;
        const d = totalDelay;
        timers.push(
          setTimeout(() => {
            setVisibleMessages((prev) => [...prev, msg]);
            playMessageSound();
          }, d)
        );
      } else {
        totalDelay += 250;
        const typingStart = totalDelay;
        timers.push(
          setTimeout(() => {
            setIsTyping(true);
            setHeaderStatus("typing...");
          }, typingStart)
        );

        totalDelay += 900;
        const msgTime = totalDelay;
        timers.push(
          setTimeout(() => {
            setIsTyping(false);
            setHeaderStatus(chat.subtitle);
            setVisibleMessages((prev) => [...prev, msg]);
            playMessageSound();
          }, msgTime)
        );
      }
    });

    return () => timers.forEach(clearTimeout);
  }, [chat.id]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [visibleMessages, isTyping]);

  return (
    <div className="flex flex-col h-full relative">
      {/* Header */}
      <div
        className="flex items-center gap-3 px-4 py-3 border-b cursor-pointer select-none"
        style={{
          backgroundColor: "var(--panel)",
          borderColor: "var(--divider)",
        }}
        onClick={() => chat.useProfilePhoto && setShowProfile(true)}
      >
        <button
          onClick={(e) => { e.stopPropagation(); onBack(); }}
          className="md:hidden p-1 -ml-1 transition-colors"
          style={{ color: "var(--text-muted)" }}
          aria-label="Back"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {chat.useProfilePhoto ? (
          <Avatar className="w-10 h-10 text-sm flex-shrink-0" />
        ) : (
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
            style={{ backgroundColor: chat.avatarColor }}
          >
            {chat.avatar}
          </div>
        )}

        <div className="flex-1 min-w-0">
          <p className="font-medium text-sm" style={{ color: "var(--text)" }}>
            {chat.name}
          </p>
          <p
            className="text-xs transition-all duration-300"
            style={{
              color: headerStatus === "typing..." ? "var(--green)" : "var(--text-sub)",
            }}
          >
            {headerStatus}
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 wa-chat-bg">
        <div className="max-w-3xl mx-auto">
          <DateSeparator label="Today" />
          <div className="space-y-0.5">
            {visibleMessages.map((msg) => (
              <MessageBubble key={msg.id} message={msg} projects={projects} />
            ))}
            {isTyping && <TypingIndicator />}
          </div>
          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input bar */}
      <div
        className="flex items-center gap-3 px-4 py-3 border-t"
        style={{
          backgroundColor: "var(--panel)",
          borderColor: "var(--divider)",
        }}
      >
        <div
          className="flex-1 rounded-full px-5 py-2.5 text-sm select-none cursor-default"
          style={{
            backgroundColor: "var(--input)",
            color: "var(--text-sub)",
          }}
        >
          This is a portfolio simulation. Browse the chats above.
        </div>
      </div>

      {/* Profile panel — slides over the chat */}
      {showProfile && (
        <ProfilePanel onClose={() => setShowProfile(false)} />
      )}
    </div>
  );
}
