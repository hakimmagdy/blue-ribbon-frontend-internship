import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Full background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?cs=srgb&dl=pexels-pixabay-47730.jpg&fm=jpg')",
        }}
      />

      {/* Full black transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Page content (always visible on top) */}
      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        {/* Top Heading */}
        <div className="pt-10 px-6 text-center">
          <h1 className="text-white text-5xl font-bold drop-shadow-lg">
            🏆 Welcome to Blue Ribbon Sports Club
          </h1>
        </div>

        {/* Center Text */}
        <div className="flex-grow flex items-center justify-center px-6">
          <div className="max-w-4xl p-10 text-center">
            <p className="text-xl leading-relaxed">
              Manage your sports club effortlessly, from adding members to your database and organizing your sports to handling subscriptions.
              <br /><br />
              This platform helps you stay focused on what really matters: your game;
              this app has your back. Let’s get started!
            </p>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="flex justify-center flex-wrap gap-6 py-10">
          <Link
            href="/sports"
            className="text-white bg-cyan-700 hover:bg-cyan-800 hover:scale-105 active:scale-95 transition-all px-12 py-6 rounded-2xl text-2xl font-semibold shadow-xl"
          >
            SPORTS
          </Link>
          <Link
            href="/members"
            className="text-white bg-cyan-700 hover:bg-cyan-800 hover:scale-105 active:scale-95 transition-all px-12 py-6 rounded-2xl text-2xl font-semibold shadow-xl"
          >
            MEMBERS
          </Link>
          <Link
            href="/subscriptions"
            className="text-white bg-cyan-700 hover:bg-cyan-800 hover:scale-105 active:scale-95 transition-all px-12 py-6 rounded-2xl text-2xl font-semibold shadow-xl"
          >
            SUBSCRIPTIONS
          </Link>
        </div>
      </div>
    </div>
  );
}
