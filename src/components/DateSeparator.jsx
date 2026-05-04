export default function DateSeparator({ label = "Today" }) {
  return (
    <div className="flex items-center justify-center my-4">
      <span
        className="px-3 py-1 rounded-lg text-[11px] shadow-sm"
        style={{
          backgroundColor: "var(--panel)",
          color: "var(--text-sub)",
        }}
      >
        {label}
      </span>
    </div>
  );
}
