'use client';

import Link from 'next/link';
import { useContext, useState } from 'react';
import { AppContext } from "../context/AppContext.js";
// ✅ Correct relative path

export default function MembersPage() {
  const { members, setMembers } = useContext(AppContext);
  const [newMember, setNewMember] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const addMember = () => {
    if (!newMember.trim()) return;
    const exists = members.find((m) => m.name.toLowerCase() === newMember.toLowerCase());
    if (exists) return alert('Member already exists!');
    setMembers([...members, { id: Date.now(), name: newMember }]);
    setNewMember('');
  };

  return (
    <div className="relative min-h-screen overflow-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-blue-900 to-black z-0" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 z-10"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fh260/background/20230901/pngtree-a-group-of-sports-equipment-on-a-surface-image_13169788.jpg')"
        }}
      />

      <div className="relative z-20 flex flex-col items-center justify-center px-4 min-h-screen py-10">
        <div className="bg-white bg-opacity-10 backdrop-blur-md text-white p-10 rounded-xl max-w-md w-full shadow-xl text-center">
          <h2 className="text-3xl font-bold mb-6">MEMBERS</h2>

          {/* Dropdown toggle button */}
          <div className="mb-6 text-left w-full">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full text-left px-4 py-3 rounded-md bg-cyan-600 bg-opacity-100 text-white font-semibold text-lg  hover:bg-cyan-700 transition"
            >
              {isOpen ? 'Hide List of Members' : 'View List of Members'}
            </button>

            {isOpen && (
              <div className="mt-2 max-h-40 overflow-y-auto border border-white border-opacity-30 rounded-md bg-white bg-opacity-20 text-white p-3 text-lg space-y-2 transition">
                {members.map((member) => (
                  <div
                    key={member.id}
                    className="px-2 py-1 text-white hover:bg-white hover:bg-opacity-10 rounded cursor-default"
                  >
                    {member.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Add Member Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addMember();
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          >
            <input
              type="text"
              placeholder="Add a new member"
              value={newMember}
              onChange={(e) => setNewMember(e.target.value)}
              className="flex-1 p-3 rounded bg-white text-black text-lg"
              required
            />
            <button
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-700 transition px-6 py-3 rounded text-lg font-semibold text-white shadow"
            >
              Add
            </button>
          </form>

          {/* Navigation Links */}
          <div className="flex justify-center gap-6 pt-4 text-lg font-medium">
            <Link href="/sports" className="hover:underline hover:text-cyan-500 transition">
              Sports
            </Link>
            <Link href="/subscriptions" className="hover:underline hover:text-cyan-500 transition">
              Subscriptions
            </Link>
            <Link href="/" className="hover:underline hover:text-cyan-500 transition">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
