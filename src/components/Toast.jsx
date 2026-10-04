import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="floating-toast" role="status" aria-live="polite">
      <CheckCircle2 size={18} className="toast-check-icon" />
      <span>{message}</span>
    </div>
  );
}
