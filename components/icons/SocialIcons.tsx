import React, { useId } from "react";

type IconProps = { className?: string };

export function InstagramIcon({ className }: IconProps) {
  const gradId = useId();
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <defs>
        <linearGradient id={gradId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FEDA75" />
          <stop offset="30%" stopColor="#FA7E1E" />
          <stop offset="55%" stopColor="#D62976" />
          <stop offset="80%" stopColor="#962FBF" />
          <stop offset="100%" stopColor="#4F5BD5" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="22" height="22" rx="6" fill={`url(#${gradId})`} />
      <rect x="6.2" y="6.2" width="11.6" height="11.6" rx="3.6" fill="none" stroke="#fff" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.1" fill="none" stroke="#fff" strokeWidth="1.8" />
      <circle cx="17.15" cy="6.85" r="1.05" fill="#fff" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="11" fill="#1877F2" />
      <path
        d="M13.5 21v-7.2h2.4l.36-2.8h-2.76v-1.8c0-.81.22-1.36 1.39-1.36h1.48V5.34C15.85 5.24 15.02 5.2 14.05 5.2c-2.03 0-3.42 1.24-3.42 3.5v1.5H8.2v2.8h2.43V21z"
        fill="#fff"
      />
    </svg>
  );
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <rect x="1" y="1" width="22" height="22" rx="5" fill="#0A66C2" />
      <path d="M7.4 9.6H4.8V19h2.6z" fill="#fff" />
      <circle cx="6.1" cy="6.3" r="1.5" fill="#fff" />
      <path
        d="M19.2 19h-2.6v-5.1c0-1.2-.4-2-1.5-2-.8 0-1.3.6-1.5 1.1-.1.2-.1.5-.1.7V19H10.9s.03-8.4 0-9.4h2.6v1.3c.3-.5 1-1.3 2.4-1.3 1.8 0 3.1 1.1 3.1 3.6z"
        fill="#fff"
      />
    </svg>
  );
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <rect x="1" y="4" width="22" height="16" rx="5" fill="#FF0000" />
      <polygon points="10,8.5 16.5,12 10,15.5" fill="#fff" />
    </svg>
  );
}
