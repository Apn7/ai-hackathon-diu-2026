"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("checking...");

  useEffect(() => {
    fetch("/api/health")
      .then((r) => r.json())
      .then((d) => setStatus(d.status))
      .catch(() => setStatus("down"));
  }, []);

  return (
    <main className="flex flex-1 items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-3 rounded-2xl border border-black/10 p-6 dark:border-white/15">
        <h1 className="text-xl font-semibold">AI Hackathon 2026</h1>
        <p>
          API status: <span className="font-mono">{status}</span>
        </p>
      </div>
    </main>
  );
}
