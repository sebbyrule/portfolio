import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const languageIcons = {
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "Shell": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
  "Dockerfile": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "C": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "Go": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "Ruby": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
  "Rust": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg",
};

export default function Profile() {
  // Projects preview
  const [repos, setRepos] = useState([]);
  const [loadingRepos, setLoadingRepos] = useState(true);
  // Blog preview
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/sebbyrule/repos?sort=updated&per_page=3")
      .then((res) => res.json())
      .then((data) => {
        // Add demo image URLs for sample projects (replace with your own images as needed)
        const demoImages = {
          "report-generator": "https://placehold.co/300x180?text=Report+Generator",
          "iot-dashboard": "https://placehold.co/300x180?text=IoT+Dashboard",
          "docker-nginx": "https://placehold.co/300x180?text=Docker+Nginx",
        };
        setRepos(
          data.map((repo) => ({
            ...repo,
            demoImg: demoImages[repo.name] || "https://placehold.co/300x180?text=Project+Demo",
          }))
        );
        setLoadingRepos(false);
      });
    // Dynamically import blog posts for preview
    const importPosts = async () => {
      try {
        const modules = import.meta.glob('../posts/*.mdx', { as: 'raw' });
        const fm = (await import('front-matter')).default;
        const postPromises = Object.entries(modules).map(async ([path, resolver]) => {
          const raw = await resolver();
          const { attributes } = fm(raw);
          return {
            filename: path.split('/').pop(),
            ...attributes,
          };
        });
        let loadedPosts = await Promise.all(postPromises);
        loadedPosts = loadedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
        setPosts(loadedPosts);
        if (loadedPosts.length === 0) {
          console.warn('No blog posts found in ./src/posts/*.mdx');
        }
      } catch (err) {
        console.error('Error loading blog posts:', err);
      }
    };
    importPosts();
  }, []);

  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Home/Intro Section */}
      <section className="flex flex-col items-center text-center">
        <img
          src="https://avatars.githubusercontent.com/u/60407118?v=4"
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

      {/* Skills/Tech Stack Section */}
      <section className="bg-white rounded-xl shadow p-6 animate-fadein">
        <h3 className="text-2xl font-bold mb-4 text-blue-800 text-center">Skills & Tech Stack</h3>
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="flex flex-col items-center">
            <img src={languageIcons["Python"]} alt="Python" className="w-10 h-10 mb-1" />
            <span className="text-sm">Python</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={languageIcons["JavaScript"]} alt="JavaScript" className="w-10 h-10 mb-1" />
            <span className="text-sm">JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={languageIcons["Dockerfile"]} alt="Docker" className="w-10 h-10 mb-1" />
            <span className="text-sm">Docker</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={languageIcons["HTML"]} alt="HTML" className="w-10 h-10 mb-1" />
            <span className="text-sm">HTML</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={languageIcons["CSS"]} alt="CSS" className="w-10 h-10 mb-1" />
            <span className="text-sm">CSS</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={languageIcons["Shell"]} alt="Shell" className="w-10 h-10 mb-1" />
            <span className="text-sm">Shell</span>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="bg-white rounded-xl shadow p-6 animate-fadein">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-bold text-blue-800">Recent Projects</h3>
          <Link to="/projects" className="text-blue-600 hover:underline font-medium">See more projects</Link>
        </div>
        {loadingRepos ? (
          <p>Loading projects...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {repos.map((repo) => (
              <div key={repo.id} className="border rounded-lg shadow p-4 flex flex-col justify-between bg-gray-50 transition-transform duration-300 hover:scale-[1.03] animate-fadein">
                <img src={repo.demoImg} alt={repo.name + " demo"} className="rounded mb-2 w-full h-36 object-cover" />
                <div className="flex items-center gap-2 mb-1">
                  {repo.language && languageIcons[repo.language] && (
                    <img src={languageIcons[repo.language]} alt={repo.language} className="w-6 h-6" title={repo.language} />
                  )}
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-700 hover:underline">
                    {repo.name}
                  </a>
                </div>
                <p className="text-gray-700 text-sm mb-2">{repo.description || "No description provided."}</p>
                <span className="text-xs text-gray-500">Last updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Blog Preview Section */}
      <section className="bg-white rounded-xl shadow p-6 animate-fadein">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-bold text-blue-800">Recent Blog Posts</h3>
          <Link to="/blog" className="text-blue-600 hover:underline font-medium">See more blog posts</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {posts.slice(0, 3).map((post) => (
            <Link
              key={post.filename}
              to={`/blog/${post.filename.replace('.mdx', '')}`}
              className="border rounded-lg shadow p-4 bg-gray-50 transition-transform duration-300 hover:scale-[1.03] animate-fadein block"
            >
              <h4 className="text-lg font-semibold text-blue-700 mb-1">{post.title}</h4>
              <span className="text-xs text-gray-500">Published on {post.date}</span>
              <p className="text-gray-600 text-sm mt-2">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white rounded-xl shadow p-6 animate-fadein">
        <h3 className="text-2xl font-bold mb-2 text-blue-800">About Me</h3>
        <p className="text-gray-700">
          I'm an Electronics Engineering Technician with experience in IoT, homelab setups, and Docker services. Currently exploring cybersecurity and full-stack development.
        </p>
      </section>

      {/* Contact Section */}
      <section className="bg-white rounded-xl shadow p-6 animate-fadein">
        <h3 className="text-2xl font-bold mb-2 text-blue-800">Contact</h3>
        <p className="mb-2">Email: <a href="mailto:youremail@example.com" className="text-blue-500 hover:underline">youremail@example.com</a></p>
        <p>GitHub: <a href="https://github.com/sebbyrule" className="text-blue-500 hover:underline">github.com/sebbyrule</a></p>
      </section>
    </div>
  );
}

// Fade-in animation CSS should be added to src/index.css:
// .animate-fadein { animation: fadein 0.8s ease; }
// @keyframes fadein { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
