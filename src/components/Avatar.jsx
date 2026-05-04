import { useState } from "react";

export default function Avatar({ className = "" }) {
  const [imgError, setImgError] = useState(false);

  if (!imgError) {
    return (
      <img
        src="/images/profile.jpg"
        alt="Bakari Juma"
        className={`rounded-full object-cover ${className}`}
        onError={() => setImgError(true)}
      />
    );
  }

  return (
    <div
      className={`rounded-full bg-[#00a884] flex items-center justify-center font-bold text-white ${className}`}
    >
      BJ
    </div>
  );
}
