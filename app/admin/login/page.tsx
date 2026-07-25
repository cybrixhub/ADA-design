"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: fd.get("username"),
          password: fd.get("password"),
        }),
      });
      const data = await res.json();
      if (data.ok) {
        router.push("/admin/projects");
        router.refresh();
      } else {
        setError(data.error ?? "Invalid credentials");
      }
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-off-white flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-sm">
        <div className="mb-10">
          <p className="text-[0.6rem] tracking-[0.2em] uppercase text-stone mb-3">AD Design</p>
          <h1 className="font-serif text-2xl text-bark">Admin login</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-7">
          <div className="space-y-1.5">
            <label className="text-[0.65rem] tracking-widest uppercase text-stone" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              autoComplete="username"
              className="w-full bg-transparent border-b border-linen focus:border-bark outline-none py-3 text-bark font-light placeholder:text-stone/40 transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[0.65rem] tracking-widest uppercase text-stone" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="w-full bg-transparent border-b border-linen focus:border-bark outline-none py-3 text-bark font-light transition-colors"
            />
          </div>

          {error && <p className="text-terracotta text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-bark text-off-white py-3 text-xs tracking-widest uppercase hover:bg-terracotta transition-colors disabled:opacity-50"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
