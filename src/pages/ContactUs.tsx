import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, Info } from 'lucide-react';
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
        <div className="inline-flex items-center px-4 py-1.5 rounded-full glass text-purple-600 text-[10px] font-bold uppercase tracking-[0.2em] border-white/40">
          Inquiry Portal
        </div>
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Collaborate With Us</h1>
        <p className="text-slate-500 font-medium">Interested in our research? Contact our team for academic inquiries or partnership opportunities.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div className="space-y-8 lg:sticky lg:top-32">
          <div className="glass p-10 rounded-[3rem] border-white/40 shadow-sm space-y-8">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Information Hub</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-white/60 rounded-2xl text-purple-600 shadow-sm border border-white">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Official Email</h4>
                  <p className="font-bold text-slate-800">research@memora.llm</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-white/60 rounded-2xl text-purple-600 shadow-sm border border-white">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Laboratory</h4>
                  <p className="font-bold text-slate-800">AI Research Center, Room 402</p>
                  <p className="text-xs text-slate-500">Tech University Main Campus</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 glass rounded-[2.5rem] border-white/40 flex items-center space-x-5">
            <Info className="h-8 w-8 text-purple-400 flex-shrink-0" />
            <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wide leading-relaxed">
              Standard response time is within 48 academic hours. We prioritize peer-reviewed research inquiries.
            </p>
          </div>
        </div>

        {/* Email Template/Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onSubmit={handleSubmit}
          className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-white shadow-2xl shadow-purple-900/5 space-y-8"
        >
          <div className="space-y-2">
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
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-purple-500/5 transition-all font-medium text-sm"
                placeholder="Full Name"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4">Communication Address</label>
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-purple-500/5 transition-all font-medium text-sm"
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
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-purple-500/5 transition-all font-medium text-sm"
              placeholder="Thesis or Inquiry Subject"
            />
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4">Detailed Message</label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:outline-none focus:ring-4 focus:ring-purple-500/5 transition-all font-medium text-sm resize-none"
              placeholder="Describe your research inquiry..."
            ></textarea>
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
