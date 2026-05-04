export default function TypingIndicator() {
  return (
    <div className="flex justify-start mb-2">
      <div
        className="rounded-lg rounded-tl-none px-4 py-3 inline-flex items-center gap-1.5"
        style={{ backgroundColor: "var(--bubble-in)" }}
      >
        {[0, 180, 360].map((delay) => (
          <span
            key={delay}
            className="w-2 h-2 rounded-full animate-bounce"
            style={{
              backgroundColor: "var(--text-sub)",
              animationDelay: `${delay}ms`,
              animationDuration: "1s",
            }}
          />
        ))}
      </div>
    </div>
  );
}
