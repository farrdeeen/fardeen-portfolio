import { useEffect, useState } from "react";

type Message = {
  id: number;
  name: string;
  email: string;
  message: string;
};

const Admin = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetch(`${backendUrl}/messages`)
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching messages:", error);
        setLoading(false);
      });
  }, [backendUrl]);

  return (
    <section className="pt-24 min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>

      {loading ? (
        <p>Loading messages...</p>
      ) : messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <div className="space-y-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
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
