"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CheckCircle2, X } from "lucide-react";

const MESSAGES: Record<string, string> = {
  created: "Project created successfully.",
  saved: "Changes saved.",
  deleted: "Project deleted.",
  seeded: "Projects imported from static data.",
  settings_saved: "Settings saved.",
  user_added: "User added.",
};

export default function FlashMessage() {
  const params = useSearchParams();
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const key = params.get("msg");
    if (key && MESSAGES[key]) {
      setMessage(MESSAGES[key]);
      const t = setTimeout(() => {
        setMessage(null);
        const url = new URL(window.location.href);
        url.searchParams.delete("msg");
        const qs = url.searchParams.toString();
        router.replace(url.pathname + (qs ? "?" + qs : ""));
      }, 4000);
      return () => clearTimeout(t);
    }
  }, [params, router]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-white border border-emerald-100 text-bark rounded-lg shadow-lg px-4 py-3 text-sm animate-in slide-in-from-bottom-2 duration-200">
      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
      {message}
      <button
        onClick={() => setMessage(null)}
        className="ml-1 text-stone hover:text-bark transition-colors"
      >
        <X size={14} />
      </button>
    </div>
  );
}
