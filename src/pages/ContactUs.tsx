import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';

// ─── EmailJS Configuration ─────────────────────────────────────────────────
// Replace these three values with your own from https://www.emailjs.com/
const EMAILJS_SERVICE_ID = 'service_pkqqrz9';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_1cg8a2m';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'IYgU8zWUm8EDQYlEa';   // e.g. 'user_XXXXXXXXX'
// ───────────────────────────────────────────────────────────────────────────

const TEAM_LEADER_NAME = 'De Vaas Gunawardana A. P. C. T';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactUs() {
  const formRef = useRef<HTMLFormElement>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <div className="space-y-12 pb-12">
      <header className="text-center max-w-2xl mx-auto space-y-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-4 py-1.5 rounded-full glass text-purple-600 text-[10px] font-bold uppercase tracking-[0.2em] border-white/40"
        >
          Inquiry Portal
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold text-slate-900 tracking-tight"
        >
          Collaborate With Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-500 font-medium"
        >
          Interested in our research? Fill in the form and we'll get back to you.
        </motion.p>
      </header>

      <div className="max-w-2xl mx-auto w-full">
        <motion.form
          ref={formRef}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25, ease: 'easeOut' }}
          onSubmit={handleSubmit}
          className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-white shadow-2xl shadow-purple-900/5 space-y-8"
        >
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-slate-900">Send Enquiry</h2>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Your message will be sent to the team leader</p>
          </div>

          {/* Recipient pill */}
          <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-purple-50 border border-purple-100">
            <Mail className="h-4 w-4 text-purple-400 shrink-0" />
            <div className="leading-tight">
              <p className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">Sending to</p>
              <p className="text-sm font-semibold text-purple-700">{TEAM_LEADER_NAME}</p>
            </div>
          </div>

          {/* Name + Email */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4">Your Name</label>
              <input
                required
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={status === 'sending'}
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-300 transition-all font-medium text-sm disabled:opacity-50"
                placeholder="Full Name"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4">Your Email</label>
              <input
                required
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'sending'}
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-300 transition-all font-medium text-sm disabled:opacity-50"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-3">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4">Subject</label>
            <input
              required
              type="text"
              name="title"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              disabled={status === 'sending'}
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-300 transition-all font-medium text-sm disabled:opacity-50"
              placeholder="Thesis or Inquiry Subject"
            />
          </div>

          {/* Message */}
          <div className="space-y-3">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4">Message</label>
            <textarea
              required
              rows={6}
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={status === 'sending'}
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-300 transition-all font-medium text-sm resize-none disabled:opacity-50"
              placeholder="Describe your research inquiry…"
            />
          </div>

          {/* Status messages */}
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700"
            >
              <CheckCircle className="h-5 w-5 shrink-0" />
              <p className="text-sm font-semibold">Message sent! We'll get back to you soon.</p>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-red-50 border border-red-200 text-red-700"
            >
              <AlertCircle className="h-5 w-5 shrink-0" />
              <p className="text-sm font-semibold">Something went wrong. Please try again.</p>
            </motion.div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full purple-gradient text-white font-bold py-5 rounded-[1.5rem] flex items-center justify-center space-x-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-purple-600/30 disabled:opacity-60 disabled:scale-100 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? (
              <>
                <Loader className="h-4 w-4 animate-spin" />
                <span className="text-sm">Sending…</span>
              </>
            ) : (
              <>
                <span className="text-sm">Send Message</span>
                <Send className="h-4 w-4" />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </div>
  );
}
