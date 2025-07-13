'use client';

import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

export default function SubscriptionsPage() {
  const { members, sports, subscriptions, setSubscriptions } = useContext(AppContext);
  const [selectedMember, setSelectedMember] = useState('');
  const [selectedSport, setSelectedSport] = useState('');
  const [message, setMessage] = useState('');
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('subscriptions');
    if (stored) setSubscriptions(JSON.parse(stored));
  }, []);


  useEffect(() => {
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
  }, [subscriptions]);

  const handleSubscribe = () => {
    if (!selectedMember || !selectedSport) return;

    const existing = subscriptions[selectedMember] || [];
    if (existing.includes(parseInt(selectedSport))) {
      setMessage('This member is already subscribed to this sport.');
      return;
    }

    const updated = {
      ...subscriptions,
      [selectedMember]: [...existing, parseInt(selectedSport)],
    };
    setSubscriptions(updated);

    const memberName = members.find(m => m.id.toString() === selectedMember)?.name;
    const sportName = sports.find(s => s.id.toString() === selectedSport)?.name;
    setMessage(`${memberName} has been subscribed to ${sportName}.`);
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
          <h2 className="text-3xl font-bold mb-6">SUBSCRIPTIONS</h2>


          <div className="mb-4 text-left w-full">
            <label className="block mb-2 font-semibold text-lg">Select Member</label>
            <select
              value={selectedMember}
              onChange={(e) => {
                setSelectedMember(e.target.value);
                setMessage('');
              }}
              className="w-full p-3 rounded-md bg-white bg-opacity-80 text-black font-semibold text-lg focus:outline-none"
            >
              <option value="">-- Choose Member --</option>
              {members.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>


          <div className="mb-6 text-left w-full">
            <label className="block mb-2 font-semibold text-lg">Select Sport</label>
            <select
              value={selectedSport}
              onChange={(e) => {
                setSelectedSport(e.target.value);
                setMessage('');
              }}
              className="w-full p-3 rounded-md bg-white bg-opacity-80 text-black font-semibold text-lg focus:outline-none"
            >
              <option value="">-- Choose Sport --</option>
              {sports.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleSubscribe}
            className="bg-cyan-600 hover:bg-cyan-700 transition px-6 py-3 rounded text-lg font-semibold text-white shadow"
          >
            Subscribe
          </button>

          {message && <p className="text-green-300 font-medium mb-4">{message}</p>}


          <div className="text-left mt-4 w-full">
            <button
              onClick={() => setShowList(!showList)}
             className="w-full text-left px-4 py-3 rounded-md bg-cyan-600 bg-opacity-100 text-white font-semibold text-lg  hover:bg-cyan-700 transition"
            >
              {showList ? 'Hide Subscriptions' : 'View Subscriptions'}
            </button>

            {showList && (
              <div className="mt-2 max-h-40 overflow-y-auto border border-white border-opacity-30 rounded-md bg-white bg-opacity-20 text-white p-3 text-lg space-y-2">
                {Object.entries(subscriptions).length === 0 ? (
                  <p className="text-white">No subscriptions yet.</p>
                ) : (
                  <ul className="list-disc pl-5 space-y-1">
                    {Object.entries(subscriptions).map(([memberId, sportIds]) => {
                      const member = members.find((m) => m.id.toString() === memberId);
                      const sportNames = (sportIds as number[])
                        .map((id) => sports.find((s) => s.id === id)?.name)
                        .join(', ');
                      return (
                        <li key={memberId}>
                          {member?.name} → {sportNames}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            )}
          </div>


          <div className="flex justify-center gap-6 pt-8 text-lg font-medium">
            <Link href="/sports" className="hover:underline hover:text-cyan-500 transition">
              Sports
            </Link>
            <Link href="/members" className="hover:underline hover:text-cyan-500 transition">
              Members
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
