import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(
        'postgresql://postgres:FEOJVTYCLlVBXJBoDlgxUsYCzQMnohlv@postgres.railway.internal:5432/railway',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();
      if (res.ok && data.status === 'success') {
        setStatus('Message sent!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (err) {
      console.error(err);
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <section id="contact" className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          aria-label="Your Name"
          className="w-full p-3 border border-gray-300 rounded"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          aria-label="Your Email"
          className="w-full p-3 border border-gray-300 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          aria-label="Your Message"
          className="w-full p-3 border border-gray-300 rounded"
          rows={5}
          required
        ></textarea>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded w-full">
          Send Message
        </button>
      </form>
      {status && (
        <p className={`mt-4 text-sm ${status.startsWith('Message') ? 'text-green-600' : 'text-red-600'}`}>
          {status}
        </p>
      )}
    </section>
  );
};

export default Contact;
