"use client";
import Link from "next/link";
import { useState } from "react";

/* Netlify Forms. The email step (sending the guide) is not connected yet:
   [TO BE PROVIDED: email service or system]. Nothing here is sent to the partner. */
export default function SignupForm({ idPrefix, source, dark = false }: { idPrefix: string; source: string; dark?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const id = (n: string) => `${idPrefix}-${n}`;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const body = new URLSearchParams();
    new FormData(e.currentTarget).forEach((v, k) => body.append(k, String(v)));
    try {
      const res = await fetch("/__forms.html", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body.toString() });
      if (!res.ok) throw new Error("failed");
      setStatus("done");
    } catch { setStatus("error"); }
  }

  if (status === "done") return <p role="status" className="rounded-lg bg-white p-6 font-serif text-2xl text-atlantic">Thank you! Your insider guide is on its way.</p>;

  return (
    <form name="insider-guide" method="POST" onSubmit={onSubmit} className="space-y-4">
      <input type="hidden" name="form-name" value="insider-guide" />
      <input type="hidden" name="source" value={source} />
      <p className="hidden"><label>Leave this empty <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={id("first")} className="mb-1 block text-sm font-medium">First name <span aria-hidden="true">*</span></label>
          <input id={id("first")} name="first_name" required autoComplete="given-name" className="field !text-ink" />
        </div>
        <div>
          <label htmlFor={id("email")} className="mb-1 block text-sm font-medium">Email <span aria-hidden="true">*</span></label>
          <input id={id("email")} name="email" type="email" required autoComplete="email" className="field !text-ink" />
        </div>
      </div>
      <label className="flex items-start gap-3 text-sm">
        <input type="checkbox" name="consent" value="yes" required className="mt-1 h-4 w-4 accent-[#1E5A7A]" />
        <span>I agree to receive the guide by email, as described in the <Link href="/privacy-policy" className="text-link">Privacy Policy</Link>. *</span>
      </label>
      <button type="submit" className="btn" disabled={status === "sending"}>{status === "sending" ? "Sending" : "Send Me the Guide"}</button>
      {status === "error" && <p role="alert" className={`text-sm font-medium ${dark ? "text-white" : "text-[#8a1f1f]"}`}>Your sign-up could not be sent. Please try again.</p>}
    </form>
  );
}
