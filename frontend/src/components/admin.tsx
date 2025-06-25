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

  useEffect(() => {
    fetch("https://fardeen-portfolio-production.up.railway.app/messages")
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching messages:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="pt-24 min-h-screen bg-gray-900 text-white px-6 sm:px-10 lg:px-20">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold">📬 Admin Dashboard</h1>
        <button
          onClick={() => {
            localStorage.removeItem("admin-auth");
            window.location.href = "/login";
          }}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-sm sm:text-base font-semibold"
        >
          Logout
        </button>
      </div>

      {loading ? (
        <p className="text-lg text-gray-300">Loading messages...</p>
      ) : messages.length === 0 ? (
        <p className="text-lg text-gray-400">No messages found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-yellow-400 transition-transform hover:scale-[1.02]"
            >
              <div className="mb-2">
                <h2 className="text-lg font-semibold">{msg.name}</h2>
                <p className="text-sm text-gray-400">{msg.email}</p>
              </div>
              <p className="text-sm mt-4 text-gray-100 whitespace-pre-wrap">{msg.message}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Admin;
