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
      const res = await fetch('https://fardeen-portfolio-17v4.onrender.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('Message sent!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus(`Error: ${data.detail || 'Failed to send message'}`);
      }
    } catch (err) {
      console.error(err);
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <section id="contact" className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded"
          rows={5}
          required
        ></textarea>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded">
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-sm text-green-600">{status}</p>}
    </div>
    </section>
  );
};

export default Contact;
