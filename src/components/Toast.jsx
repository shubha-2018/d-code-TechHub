import React from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="toast-notification">
      <div className="toast-icon">
        <CheckCircle2 size={20} color="#10b981" />
      </div>
      <div className="toast-text">
        <span>{message}</span>
      </div>
      <button onClick={onClose} className="toast-close" aria-label="Dismiss toast">
        <X size={16} />
      </button>
    </div>
  );
}
