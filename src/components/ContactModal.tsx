import React, { useState } from 'react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';
import { X, Mail, Copy, Check, ExternalLink, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [subject, setSubject] = useState<string>('Engineering Opportunity / Inquiry');
  const [message, setMessage] = useState<string>('Hello Mohammed,\n\nI reviewed your portfolio and Riyadh Metro project and would like to connect regarding...');

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendEmail = () => {
    const mailto = `mailto:${DEVELOPER_PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailto;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Get in Touch with Mohammed</h3>
              <p className="text-xs text-slate-400">{DEVELOPER_PROFILE.nameAr} &bull; Riyadh, KSA</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          {/* Direct channels */}
          <div className="space-y-2">
            <label className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">
              Official Email:
            </label>
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="font-mono text-xs text-sky-300 selection:bg-sky-500/30">
                {DEVELOPER_PROFILE.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy Email'}</span>
              </button>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="grid grid-cols-2 gap-2.5">
            <a
              href="https://www.linkedin.com/in/mohammed-albukhaiti-215a41302/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-900 transition-all text-xs font-medium text-slate-200 group"
            >
              <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-white" />
            </a>

            <a
              href={DEVELOPER_PROFILE.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-all text-xs font-medium text-slate-200 group"
            >
              <GithubIcon className="w-4 h-4 text-slate-300" />
              <span>GitHub Profile</span>
              <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-white" />
            </a>
          </div>

          {/* Quick Mail Composer */}
          <div className="space-y-3 pt-1 border-t border-slate-800">
            <div>
              <label className="text-xs text-slate-400 block mb-1">Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-sky-500"
              />
            </div>

            <div>
              <label className="text-xs text-slate-400 block mb-1">Message</label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-sky-500 resize-none font-mono"
              />
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950/80 border-t border-slate-800 flex items-center justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={handleSendEmail}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Launch Email Client</span>
          </button>
        </div>
      </div>
    </div>
  );
};
