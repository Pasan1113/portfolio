import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    alert('Message sent successfully!');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Let's <span className="text-violet-400">Connect</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-violet-500/20 text-violet-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <p className="text-white">hello@alex.dev</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Location</p>
                    <p className="text-white">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Response Time</h3>
              <p className="text-slate-400 text-sm">
                I typically respond within 24 hours. For urgent inquiries, please mention it in your message.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Name</label>
                <Input
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Your name"
                  required
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-violet-500"
                />
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-violet-500"
                />
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Message</label>
                <Textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-violet-500 resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-violet-500 hover:bg-violet-600 text-white py-6 text-lg font-semibold rounded-xl shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}