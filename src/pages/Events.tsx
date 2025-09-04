import React from "react";

const Events: React.FC = () => {
  return (
    <div className="bg-navy text-white min-h-screen">
      {/* HEADER */}
      <header className="text-center py-16 bg-navy-dark">
        <h1 className="text-4xl font-bold text-orange">Events</h1>
        <p className="mt-2 text-lg text-gray-300">
          Celebrating culture, music, and togetherness
        </p>
      </header>

      {/* UPCOMING EVENTS */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-orange mb-6">
          🔔 Upcoming Events (2025)
        </h2>
        <div className="space-y-6">
          <div className="p-6 rounded-lg bg-white text-navy shadow-md">
            <h3 className="text-xl font-bold">🌸 Durga Pooja – 3rd October</h3>
            <p>Hosted by Association of Bengal — devotional music for the celebration.</p>
          </div>
          <div className="p-6 rounded-lg bg-white text-navy shadow-md">
            <h3 className="text-xl font-bold">🎆 Diwali – 18th October</h3>
            <p>Traditional devotional music celebrating the festival of lights.</p>
          </div>
          <div className="p-6 rounded-lg bg-white text-navy shadow-md">
            <h3 className="text-xl font-bold">🪔 Dussehra & Bathukamma – 19th October</h3>
            <p>
              With Finland Telugu Association — festive music and cultural
              performances.
            </p>
          </div>
        </div>
      </section>

      {/* PAST EVENTS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-orange mb-8 text-center">
          📽️ Past Events
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Event 1 */}
          <div className="rounded-lg overflow-hidden shadow-lg bg-white text-navy">
            <video className="w-full" controls>
              <source src="/videos/performance video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="p-4">
              <h3 className="text-lg font-bold">Folklore Performance</h3>
              <p>Andhra and Telangana — Brahmamokate</p>
              <a
                href="https://youtu.be/BF-bZC6cUnE?si=5VxmbgRpa_fW2Y6w"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 bg-orange text-white rounded hover:bg-orange-dark transition"
              >
                ▶ Watch Full Video
              </a>
            </div>
          </div>

          {/* Event 2 */}
          <div className="rounded-lg overflow-hidden shadow-lg bg-white text-navy">
            <video className="w-full" controls>
              <source src="/videos/Folklore-2025-Goa video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="p-4">
              <h3 className="text-lg font-bold">Folklore Performance</h3>
              <p>Goa — Hanv Saiba</p>
              <a
                href="https://youtu.be/jq_FLERcfMo?si=0j3ekzPu71Cbq16G"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 bg-orange text-white rounded hover:bg-orange-dark transition"
              >
                ▶ Watch Full Video
              </a>
            </div>
          </div>

          {/* Event 3 */}
          <div className="rounded-lg overflow-hidden shadow-lg bg-white text-navy md:col-span-2">
            <img
              src="/images/Group[2].jpg"
              alt="India Day 2025"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">India Day 2025</h3>
              <p>
                Raaganjali proudly performed at India Day, celebrating culture,
                music, and unity.
              </p>
              <button
                disabled
                className="inline-block mt-2 px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed"
              >
                Watch Highlights (Coming Soon)
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
