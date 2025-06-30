import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Message = {
  id: number;
  name: string;
  email: string;
  message: string;
};

const Admin = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("admin-auth") === "true";
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

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
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("admin-auth");
    navigate("/login");
  };

  return (
    <section className="pt-24 min-h-screen bg-gray-900 text-white p-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-sm font-semibold"
        >
          Logout
        </button>
      </div>

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
