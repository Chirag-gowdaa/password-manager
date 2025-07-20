import React, { useEffect } from 'react';
import { useState } from 'react';
const Manager = () => {
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwords, setpasswords] = useState([]);
  useEffect(() => {
    fetchPasswords();
  }, []);
  const fetchPasswords = async () => {
    const res = await fetch("http://localhost:5000/api/passwords")
    const data = await res.json();
    setpasswords(data);
  }
  const savePassword = async () => {
    if (!form.site || !form.username || !form.password) return;

    const res = await fetch("http://localhost:5000/api/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setform({ site: "", username: "", password: "" }); // clear form
      fetchPasswords(); // reload passwords
    }
  }
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }
  const handleDelete = async (id) => {
    const res = await fetch(`${import.meta.env.VITE_API_BASE}/api/passwords/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      // setpasswords(passwords.filter((p) => p._id !== id)); //this removes the password from the state
      fetchPasswords();
    }
    else {
      console.error("Failed to delete")
    }
  }
  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E6EDF3] flex flex-col items-center justify-center px-4 py-10">

      <div className="w-full max-w-md bg-[#161B22] p-6 rounded-2xl shadow-md border border-[#2D333B] space-y-6">
        <h2 className="text-2xl font-semibold text-center text-[#00ADB5]">Store Credentials</h2>

        {/* URL Input */}
        <div>
          <label className="block text-sm font-medium mb-1">Website URL</label>
          <input
            value={form.site} onChange={handleChange}
            type="text"
            placeholder="Enter the URL"
            className="w-full px-4 py-2 rounded-lg bg-[#0D1117] border border-[#2D333B] text-sm focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
            name='site'
          />
        </div>

        {/* Name & Password Inputs */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              value={form.username} onChange={handleChange}
              type="text"
              placeholder="Enter Name"
              className="w-full px-4 py-2 rounded-lg bg-[#0D1117] border border-[#2D333B] text-sm focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
              name='username'
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              value={form.password} onChange={handleChange}
              type="password"
              placeholder="Enter Password"
              className="w-full px-4 py-2 rounded-lg bg-[#0D1117] border border-[#2D333B] text-sm focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
              name='password'
            />
          </div>
        </div>

        <button onClick={savePassword} className="w-full mt-4 py-2 bg-[#00ADB5] hover:bg-[#019ba5] transition rounded-lg text-black font-semibold flex items-center justify-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            className="w-5 h-5 text-black">
            <path d="M12 4v16m8-8H4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Save Password</span>
        </button>
      </div>
      <div className="w-full max-w-md bg-[#161B22] mt-6 p-4 rounded-2xl border border-[#2D333B]">
        <h3 className="text-lg font-semibold text-[#00ADB5] mb-2">Saved Passwords</h3>
        {passwords.length === 0 ? (
          <p className="text-sm text-gray-400">No passwords stored yet.</p>
        ) : (
          passwords.map((item) => (
            <div key={item._id} className="text-sm border-b border-[#2D333B] py-2  bg-gray-800 p-3 rounded">
              <p><strong>Site:</strong> {item.site}</p>
              <p><strong>Username:</strong> {item.username}</p>
              <div className="flex justify-between items-center">
                <p className="text-white">
                  <strong>Password:</strong> {item.password}
                </p>
                <button onClick={() => handleDelete(item._id)} className="text-red-500 hover:text-red-700">
                  <svg xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fillRule="evenodd"
                      d="M6 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8zm2-4a2 2 0 00-2-2H8a2 2 0 00-2 2v1H4a1 1 0 000 2h1v9a2 2 0 002 2h6a2 2 0 002-2V7h1a1 1 0 100-2h-2V4zM8 4h4v1H8V4z"
                      clipRule="evenodd" />
                  </svg>
                </button>
              </div>


            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default Manager;
