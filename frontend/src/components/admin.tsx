import { useEffect, useState } from "react";

type Message = {
  name: string;
  email: string;
  message: string;
};

const Admin = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbyN83AlFbIkDyq9Gg0KyTE8-Xc9KH0CONSVFdEGVkCs_Q1yQ5o21asBubH0ZLSd3d07zg/exec")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setMessages(data);
        } else if (Array.isArray(data.data)) {
          setMessages(data.data);
        } else {
          console.warn("Unexpected response:", data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch messages:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>

      {loading ? (
        <p>Loading messages...</p>
      ) : messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <div className="space-y-6">
          {messages.map((msg, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-yellow-400"
            >
              <h2 className="text-xl font-semibold">{msg.name}</h2>
              <p className="text-sm text-gray-400">{msg.email}</p>
              <p className="mt-3">{msg.message}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Admin;
