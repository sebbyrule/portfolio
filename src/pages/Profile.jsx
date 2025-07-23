import React from "react";

export default function Profile() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Home/Intro Section */}
      <section className="flex flex-col items-center text-center">
        <img
          src="https://avatars.githubusercontent.com/u/your-github-id?v=4"
          alt="Sebastian Avatar"
          className="w-28 h-28 rounded-full shadow-lg mb-6 border-4 border-blue-200"
        />
        <h2 className="text-4xl font-extrabold mb-3 text-blue-900">Hi, I'm Sebastian <span className="animate-wave inline-block">👋</span></h2>
        <p className="text-lg max-w-xl mx-auto text-gray-700 mb-6">
          Electronics Engineering Technician with interests in IoT, cybersecurity, and homelab projects.<br />
          Welcome to my portfolio!
        </p>
        <div className="flex gap-6 mt-2 justify-center">
          <a href="https://github.com/sebbyrule" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/sebbyrule/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-8 h-8" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white rounded-xl shadow p-6">
        <h3 className="text-2xl font-bold mb-2 text-blue-800">About Me</h3>
        <p className="text-gray-700">
          I'm an Electronics Engineering Technician with experience in IoT, homelab setups, and Docker services. Currently exploring cybersecurity and full-stack development.
        </p>
      </section>

      {/* Contact Section */}
      <section className="bg-white rounded-xl shadow p-6">
        <h3 className="text-2xl font-bold mb-2 text-blue-800">Contact</h3>
        <p className="mb-2">Email: <a href="mailto:youremail@example.com" className="text-blue-500 hover:underline">youremail@example.com</a></p>
        <p>GitHub: <a href="https://github.com/sebbyrule" className="text-blue-500 hover:underline">github.com/sebbyrule</a></p>
      </section>
    </div>
  );
}
