import React from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
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
          Interested in our research? Contact our team for academic inquiries or partnership opportunities.
        </motion.p>
      </header>

      <div className="max-w-2xl mx-auto w-full">
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25, ease: 'easeOut' }}
          onSubmit={handleSubmit}
          className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-white shadow-2xl shadow-purple-900/5 space-y-8"
        >
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-slate-900">Send Enquiry</h2>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Formal Template v1.0</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4">Researcher Name</label>
              <input
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-300 transition-all font-medium text-sm"
                placeholder="Full Name"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4">Communication Address</label>
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-300 transition-all font-medium text-sm"
                placeholder="Email Address"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4">Subject Matter</label>
            <input
              required
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-300 transition-all font-medium text-sm"
              placeholder="Thesis or Inquiry Subject"
            />
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4">Detailed Message</label>
            <textarea
              required
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-300 transition-all font-medium text-sm resize-none"
              placeholder="Describe your research inquiry..."
            />
          </div>

          <button
            type="submit"
            className="w-full purple-gradient text-white font-bold py-5 rounded-[1.5rem] flex items-center justify-center space-x-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-purple-600/30"
          >
            <span className="text-sm">Initiate Communication</span>
            <Send className="h-4 w-4" />
          </button>
        </motion.form>
      </div>
    </div>
  );
}
