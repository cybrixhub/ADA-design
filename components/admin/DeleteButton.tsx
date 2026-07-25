"use client";

interface Props {
  action: () => Promise<void>;
  label?: string;
  confirm?: string;
}

export default function DeleteButton({ action, label = "Delete", confirm: msg = "Are you sure?" }: Props) {
  return (
    <form
      action={action}
      onSubmit={(e) => {
        if (!window.confirm(msg)) e.preventDefault();
      }}
    >
      <button
        type="submit"
        className="px-3 py-1.5 text-xs text-terracotta border border-terracotta/30 rounded hover:bg-terracotta/5 transition-colors"
      >
        {label}
      </button>
    </form>
  );
}
