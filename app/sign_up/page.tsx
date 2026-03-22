"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";           // ✅ App Router — NOT "next/router"
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignupPage() {
  const router = useRouter();                           // ✅ hook, not static Router

  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [agree, setAgree] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState("");              // ✅ was "const [ ]" — incomplete

  useEffect(() => { setMounted(true); }, []);

  const passwordMatch = form.confirm !== "" && form.password === form.confirm;
  const passwordMismatch = form.confirm !== "" && form.password !== form.confirm;

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.password || !form.confirm || !agree) return;
    if (passwordMismatch) return;

    setIsLoading(true);
    setError("");

    try {
      // Step 1 — create the user in Firebase (same as before)
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      // Step 2 — NEW: get the ID token from the newly created user
      const idToken = await userCredential.user.getIdToken();

      // Step 3 — NEW: send token to our server to create session + save to MongoDB
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });

      if (!response.ok) {
        throw new Error("Session creation failed");
      }

      // Step 4 — only redirect after cookie is set
      setForm({ name: "", email: "", password: "", confirm: "" });
      router.push("/");

    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Registration failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const strength = (() => {
    const p = form.password;
    if (!p) return 0;
    let s = 0;
    if (p.length >= 8) s++;
    if (/[A-Z]/.test(p)) s++;
    if (/[0-9]/.test(p)) s++;
    if (/[^A-Za-z0-9]/.test(p)) s++;
    return s;
  })();

  const strengthLabel = ["", "WEAK", "FAIR", "GOOD", "STRONG"];
  const strengthColor = ["", "#ff2d78", "#ffaa00", "#00f5ff", "#39ff14"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Share+Tech+Mono&display=swap');

        * { box-sizing: border-box; }
        .font-orbitron { font-family: 'Orbitron', sans-serif; }
        .font-tech     { font-family: 'Share Tech Mono', monospace; }

        .scanlines::after {
          content: '';
          position: absolute; inset: 0; pointer-events: none; z-index: 10;
          background: repeating-linear-gradient(
            0deg, transparent, transparent 2px,
            rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px
          );
        }

        .glow-cyan  { text-shadow: 0 0 8px #00f5ff, 0 0 20px #00f5ff, 0 0 40px #00f5ffaa; }
        .glow-pink  { text-shadow: 0 0 8px #ff2d78, 0 0 20px #ff2d78, 0 0 40px #ff2d78aa; }
        .glow-green { text-shadow: 0 0 8px #39ff14, 0 0 20px #39ff14, 0 0 40px #39ff14aa; }

        .neon-card {
          border: 1px solid #00f5ff44;
          box-shadow: 0 0 10px #00f5ff22, 0 0 40px #00f5ff11, inset 0 0 30px #00000088;
          position: relative;
        }
        .neon-card::before {
          content: '';
          position: absolute; top: -1px; left: -1px; right: -1px; bottom: -1px;
          background: linear-gradient(90deg, #ff2d78, #00f5ff, #39ff14, #ff2d78);
          background-size: 300%;
          animation: border-run 4s linear infinite;
          z-index: -1; opacity: 0.4;
        }
        @keyframes border-run { to { background-position: 300% center; } }

        .neon-input {
          width: 100%; background: #05050a;
          border: 1px solid #00f5ff33;
          padding: 0.75rem 2.5rem 0.75rem 0.85rem;
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.875rem; color: #00f5ff;
          outline: none;
          transition: border-color 0.3s, box-shadow 0.3s;
          caret-color: #00f5ff;
        }
        .neon-input::placeholder { color: #00f5ff22; }
        .neon-input:focus {
          border-color: #00f5ff;
          box-shadow: 0 0 8px #00f5ff55, inset 0 0 10px #00f5ff11;
        }
        .neon-input.error  { border-color: #ff2d7888; box-shadow: 0 0 8px #ff2d7833; }
        .neon-input.success { border-color: #39ff1488; box-shadow: 0 0 8px #39ff1433; }

        @keyframes glitch {
          0%   { clip-path: inset(0 0 95% 0); transform: translate(-3px, 0); }
          10%  { clip-path: inset(40% 0 40% 0); transform: translate(3px, 0); }
          20%  { clip-path: inset(80% 0 5% 0); transform: translate(-2px, 0); }
          30%  { clip-path: inset(10% 0 80% 0); transform: translate(0, 0); }
          100% { clip-path: inset(0 0 95% 0); transform: translate(0, 0); }
        }
        .glitch-wrap { position: relative; display: inline-block; }
        .glitch-wrap::before, .glitch-wrap::after {
          content: attr(data-text);
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          font-family: 'Orbitron', sans-serif; font-weight: 900;
        }
        .glitch-wrap::before { color: #ff2d78; animation: glitch 3s infinite step-start; opacity: 0.7; }
        .glitch-wrap::after  { color: #39ff14; animation: glitch 3s infinite step-start 0.1s; opacity: 0.7; }

        .neon-btn {
          position: relative; overflow: hidden;
          background: transparent;
          border: 1px solid #ff2d78;
          box-shadow: 0 0 8px #ff2d7855, inset 0 0 8px #ff2d7811;
          transition: box-shadow 0.3s;
          cursor: pointer;
        }
        .neon-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(90deg, #ff2d7822, #00f5ff22);
          opacity: 0; transition: opacity 0.3s;
        }
        .neon-btn:hover { box-shadow: 0 0 16px #ff2d78, 0 0 40px #ff2d7855, inset 0 0 16px #ff2d7822; }
        .neon-btn:hover::before { opacity: 1; }
        .neon-btn > * { position: relative; z-index: 1; }
        .neon-btn:disabled { opacity: 0.4; cursor: not-allowed; pointer-events: none; }

        .social-neon {
          background: transparent;
          border: 1px solid #ffffff11;
          transition: border-color 0.3s, box-shadow 0.3s, color 0.3s;
          cursor: pointer;
        }
        .social-neon:hover { border-color: #00f5ff; box-shadow: 0 0 10px #00f5ff44; color: #00f5ff !important; }

        .neon-check {
          appearance: none;
          width: 14px; height: 14px;
          border: 1px solid #00f5ff44;
          background: transparent; cursor: pointer;
          position: relative; flex-shrink: 0;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .neon-check:checked { border-color: #39ff14; background: #39ff1422; box-shadow: 0 0 6px #39ff14; }
        .neon-check:checked::after {
          content: '';
          position: absolute; left: 2px; top: 0;
          width: 6px; height: 9px;
          border: 1.5px solid #39ff14;
          border-top: none; border-left: none;
          transform: rotate(40deg);
        }

        @keyframes flicker {
          0%, 95%, 100% { opacity: 1; }
          96% { opacity: 0.6; } 97% { opacity: 1; } 98% { opacity: 0.4; } 99% { opacity: 1; }
        }
        .flicker { animation: flicker 6s infinite; }

        @keyframes spin { to { transform: rotate(360deg); } }
        .spinner { animation: spin 0.6s linear infinite; }

        .corner-tl, .corner-tr, .corner-bl, .corner-br {
          position: absolute; width: 16px; height: 16px; pointer-events: none;
        }
        .corner-tl { top: 0; left: 0;   border-top: 2px solid #ff2d78; border-left: 2px solid #ff2d78; }
        .corner-tr { top: 0; right: 0;  border-top: 2px solid #ff2d78; border-right: 2px solid #ff2d78; }
        .corner-bl { bottom: 0; left: 0;  border-bottom: 2px solid #ff2d78; border-left: 2px solid #ff2d78; }
        .corner-br { bottom: 0; right: 0; border-bottom: 2px solid #ff2d78; border-right: 2px solid #ff2d78; }

        .grid-lines {
          background-image:
            linear-gradient(rgba(255,45,120,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,45,120,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        @keyframes pulse-ring {
          0%   { transform: scale(0.8); opacity: 0.6; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        .pulse-ring-pink {
          position: absolute; border-radius: 50%;
          border: 1px solid #ff2d78;
          animation: pulse-ring 2.5s ease-out infinite;
        }

        .strength-bar { height: 3px; transition: width 0.4s ease, background-color 0.4s ease; }
      `}</style>

      <div className="font-tech min-h-screen grid grid-cols-1 md:grid-cols-2 bg-black overflow-hidden">

        {/* ══ LEFT PANEL ══ */}
        <div className="scanlines grid-lines relative hidden md:flex flex-col justify-between bg-[#060306] p-12 overflow-hidden border-r border-[#ff2d7822]">
          <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10"
               style={{ background: "radial-gradient(circle, #ff2d78 0%, transparent 65%)", filter: "blur(30px)" }} />
          <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-10"
               style={{ background: "radial-gradient(circle, #00f5ff 0%, transparent 65%)", filter: "blur(25px)" }} />

          {/* Brand */}
          <div className={`relative flex items-center gap-3 transition-all duration-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}`}>
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="pulse-ring-pink w-10 h-10" />
              <div className="pulse-ring-pink w-10 h-10" style={{ animationDelay: "1.2s" }} />
              <div className="w-10 h-10 border border-[#ff2d78] flex items-center justify-center font-orbitron font-black text-[#ff2d78] text-sm glow-pink relative z-10">
                AX
              </div>
            </div>
            <span className="font-orbitron text-[0.6rem] tracking-[0.3em] uppercase text-[#ff2d7866]">
              Arcadia<span className="text-[#00f5ff]">_</span>X
            </span>
          </div>

          {/* Hero */}
          <div className={`relative transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <p className="font-orbitron text-[0.6rem] tracking-[0.3em] uppercase text-[#00f5ff] glow-cyan mb-6">
              // NEW_AGENT_INIT
            </p>
            <div className="glitch-wrap" data-text="CREATE">
              <h1 className="font-orbitron font-black text-6xl text-white leading-none tracking-tight">CREATE</h1>
            </div>
            <h1 className="font-orbitron font-black text-6xl leading-none tracking-tight glow-pink text-[#ff2d78]">ACCOUNT.</h1>
            <p className="mt-6 text-sm text-[#ffffff33] leading-relaxed max-w-xs">
              Register your identity in the system.<br />
              Access level: <span className="text-[#ff2d78] glow-pink">PENDING</span> → <span className="text-[#39ff14] glow-green">ACTIVE</span>
            </p>
            <div className="mt-8 flex flex-col gap-3 max-w-xs">
              {[["01","Encrypted identity storage"],["02","Multi-device access"],["03","Real-time sync protocol"]].map(([num, text]) => (
                <div key={num} className="flex items-center gap-3">
                  <span className="font-orbitron text-[0.55rem] text-[#ff2d78] glow-pink">{num}</span>
                  <div className="flex-1 h-px bg-[#ff2d7822]" />
                  <span className="font-tech text-xs text-white/30">{text}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 border border-[#ff2d7822] bg-[#ff2d7805] p-4 max-w-xs relative">
              <div className="corner-tl" /><div className="corner-tr" />
              <div className="corner-bl" /><div className="corner-br" />
              <p className="text-[#ff2d7866] text-xs mb-1">{`> sys.register()`}</p>
              <p className="text-[#00f5ff] text-xs mb-1 glow-cyan">{`> STATUS: READY`}</p>
              <p className="text-[#ffffff33] text-xs">{`> fill credentials`}<span className="text-[#ff2d78] animate-pulse">_</span></p>
            </div>
          </div>

          {/* Stats */}
          <div className={`relative flex gap-8 transition-opacity duration-500 delay-500 ${mounted ? "opacity-100" : "opacity-0"}`}>
            {([["FREE","TO JOIN","pink"],["256-BIT","ENCRYPT","cyan"],["24/7","SUPPORT","green"]] as const).map(([num, label, color]) => (
              <div key={label} className="flex flex-col gap-1">
                <span className={`font-orbitron text-lg font-black ${color==="cyan"?"text-[#00f5ff] glow-cyan":color==="pink"?"text-[#ff2d78] glow-pink":"text-[#39ff14] glow-green"}`}>{num}</span>
                <span className="font-orbitron text-[0.55rem] tracking-[0.2em] text-white/20">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ══ RIGHT PANEL ══ */}
        <div className="relative flex items-center justify-center px-6 py-8 md:px-12 bg-[#020204]">
          <div className="absolute inset-0 pointer-events-none"
               style={{ background: "radial-gradient(ellipse at 40% 50%, rgba(255,45,120,0.04) 0%, transparent 60%)" }} />

          <div className={`relative w-full max-w-sm transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="neon-card p-8 bg-[#030308]">
              <div className="corner-tl" /><div className="corner-tr" />
              <div className="corner-bl" /><div className="corner-br" />

              {/* Header */}
              <div className="mb-7">
                <p className="font-orbitron text-[0.55rem] tracking-[0.3em] uppercase text-[#00f5ff] glow-cyan mb-2">
                  // REGISTER_NEW_USER
                </p>
                <h2 className="font-orbitron text-2xl font-black text-white tracking-wider flicker">
                  JOIN THE <span className="text-[#ff2d78] glow-pink">GRID</span>
                </h2>
              </div>

              {/* Fields */}
              <div className="flex flex-col gap-4 mb-5">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-orbitron text-[0.55rem] tracking-[0.25em] uppercase text-[#ff2d7888]">&gt; AGENT_NAME</label>
                  <input className="neon-input" type="text" placeholder="Your display name"
                    value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-orbitron text-[0.55rem] tracking-[0.25em] uppercase text-[#ff2d7888]">&gt; EMAIL_ID</label>
                  <input className="neon-input" type="email" placeholder="user@system.net"
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>

                {/* Password */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-orbitron text-[0.55rem] tracking-[0.25em] uppercase text-[#ff2d7888]">&gt; SET_PASS_KEY</label>
                  <div className="relative">
                    <input className="neon-input" type={showPassword ? "text" : "password"} placeholder="Min 8 characters"
                      value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-[#00f5ff44] hover:text-[#00f5ff] transition-colors">
                      {showPassword
                        ? <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                        : <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>}
                    </button>
                  </div>
                  {form.password && (
                    <div className="mt-1.5">
                      <div className="flex gap-1 mb-1">
                        {[1,2,3,4].map((i) => (
                          <div key={i} className="flex-1 h-0.5 rounded-full bg-[#ffffff11]">
                            <div className="strength-bar rounded-full h-full"
                              style={{ width: strength >= i ? "100%" : "0%", backgroundColor: strengthColor[strength],
                                boxShadow: strength >= i ? `0 0 6px ${strengthColor[strength]}` : "none" }} />
                          </div>
                        ))}
                      </div>
                      <p className="font-orbitron text-[0.5rem] tracking-widest" style={{ color: strengthColor[strength] }}>
                        {strengthLabel[strength]}
                      </p>
                    </div>
                  )}
                </div>

                {/* Confirm */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-orbitron text-[0.55rem] tracking-[0.25em] uppercase text-[#ff2d7888]">&gt; CONFIRM_KEY</label>
                  <div className="relative">
                    <input className={`neon-input ${passwordMismatch ? "error" : ""} ${passwordMatch ? "success" : ""}`}
                      type={showConfirm ? "text" : "password"} placeholder="Repeat your password"
                      value={form.confirm} onChange={(e) => setForm({ ...form, confirm: e.target.value })} />
                    <button type="button" onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-[#00f5ff44] hover:text-[#00f5ff] transition-colors">
                      {showConfirm
                        ? <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                        : <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>}
                    </button>
                  </div>
                  {passwordMismatch && <p className="font-orbitron text-[0.5rem] tracking-widest text-[#ff2d78]">✗ KEYS DO NOT MATCH</p>}
                  {passwordMatch   && <p className="font-orbitron text-[0.5rem] tracking-widest text-[#39ff14] glow-green">✓ KEYS MATCHED</p>}
                </div>
              </div>

              {/* Firebase error */}
              {error && (
                <div className="mb-4 border border-[#ff2d7844] bg-[#ff2d7808] p-3">
                  <p className="font-orbitron text-[0.52rem] tracking-wide text-[#ff2d78]">
                    ✗ {error}
                  </p>
                </div>
              )}

              {/* Agree */}
              <div className="flex items-start gap-2 mb-6">
                <input type="checkbox" className="neon-check mt-0.5" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                <span className="font-orbitron text-[0.52rem] tracking-wide text-white/25 leading-relaxed">
                  I ACCEPT THE{" "}
                  <a href="#" className="text-[#00f5ff] hover:glow-cyan transition-all">TERMS OF SERVICE</a>
                  {" & "}
                  <a href="#" className="text-[#00f5ff] hover:glow-cyan transition-all">PRIVACY PROTOCOL</a>
                </span>
              </div>

              {/* Submit */}
              <button onClick={handleSubmit} disabled={isLoading || !agree || !!passwordMismatch}
                className="neon-btn w-full flex items-center justify-center gap-3 py-4 font-orbitron text-[0.65rem] tracking-[0.25em] uppercase font-bold transition-all active:scale-[0.98] text-[#ff2d78]">
                {isLoading ? (
                  <>
                    <div className="spinner w-4 h-4 border-2 border-[#ff2d7833] border-t-[#ff2d78] rounded-full" />
                    <span>REGISTERING...</span>
                  </>
                ) : <span>[ INITIALIZE ACCOUNT ]</span>}
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3 my-5">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#ff2d7833]" />
                <span className="font-orbitron text-[0.5rem] tracking-[0.2em] uppercase text-[#ffffff22]">OR</span>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#ff2d7833]" />
              </div>

              {/* Social */}
              <div className="flex gap-3">
                {[
                  { label: "GOOGLE", icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg> },
                  { label: "GITHUB",  icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
                ].map(({ label, icon }) => (
                  <button key={label} className="social-neon flex-1 flex items-center justify-center gap-2 py-3 font-orbitron text-[0.55rem] tracking-[0.15em] text-white/30">
                    {icon}{label}
                  </button>
                ))}
              </div>

              <p className="mt-5 text-center font-orbitron text-[0.55rem] tracking-widest text-white/20 uppercase">
                Already registered?{" "}
                <Link href="/login" className="text-[#00f5ff] hover:glow-cyan transition-all">
                  ACCESS LOGIN
                </Link>
              </p>
            </div>

            <p className="mt-4 text-center font-tech text-[0.6rem] text-white/10 tracking-widest">
              SYS_VER 4.2.1 · ENCRYPTED · {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}