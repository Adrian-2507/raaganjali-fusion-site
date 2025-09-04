import React from "react";

const About: React.FC = () => {
  return (
    <div className="bg-navy text-white min-h-screen">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-navy shadow-lg flex justify-between items-center px-6 py-4">
        <a href="/" className="flex items-center">
          <img
            src="/images/Raaganjali Logo.png"
            alt="Raaganjali Logo"
            className="h-12"
          />
        </a>
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="hover:text-orange">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-orange border-b-2 border-orange">
              About Us
            </a>
          </li>
          <li>
            <a href="/services" className="hover:text-orange">
              Services
            </a>
          </li>
          <li>
            <a href="/gallery" className="hover:text-orange">
              Gallery
            </a>
          </li>
          <li>
            <a href="/events" className="hover:text-orange">
              Events
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-orange">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* HEADER */}
      <header className="text-center py-16 bg-navy-dark">
        <h1 className="text-4xl font-bold text-orange">Our Team</h1>
        <p className="text-lg mt-2 text-gray-300">
          Meet the people who make Raaganjali possible
        </p>
      </header>

      {/* CORE MEMBERS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-orange text-center mb-10">
          Core Members
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {[
            { name: "Soumya Velpula", role: "President", img: "/images/Soumya[1].jpg" },
            { name: "Varalakshmi Aripirala", role: "Vice President", img: "/images/Lakshmi[4].jpg" },
            { name: "Ravichand Velpula", role: "Treasurer", img: "/images/Ravi{5].jpg" },
            { name: "Srikanth Aripirala", role: "Secretary & PR", img: "/images/Shrikant[1].jpg" },
            { name: "Adrian Gonsalves", role: "Technical Director", img: "/images/adrian.jpg" },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white text-navy p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105 text-center max-w-xs"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MEMBERS SLIDER */}
      <section className="bg-white text-navy py-12">
        <h2 className="text-3xl font-bold text-orange text-center mb-10">
          Raaganjali Members
        </h2>
        <div className="overflow-x-auto whitespace-nowrap px-6">
          <div className="flex space-x-6">
            {[
              { name: "Malay Das", role: "Vocalist", img: "/images/Malai[1].jpg" },
              { name: "Satvika Aripirala", role: "Vocalist", img: "/images/Satvika{1].jpg" },
              { name: "Varalakshmi Aripirala", role: "Vocalist", img: "/images/Lakshmi[2].jpg" },
              { name: "Arshiya", role: "Vocalist", img: "/images/Arshiya[2].jpg" },
              { name: "Ravichand Velpula", role: "Pianist", img: "/images/Ravi[1].jpg" },
              { name: "Allan Gonsalves", role: "Percussionist", img: "/images/Allan[1].jpg" },
              { name: "Saket Aripirala", role: "Guitarist", img: "/images/Saket[1].jpg" },
              { name: "Sachin", role: "Guitarist", img: "/images/Sachin[1].jpg" },
            ].map((member, index) => (
              <div
                key={index}
                className="inline-block bg-navy-dark text-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105 w-60 text-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-300">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
