import { useEffect, useState } from "react";

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

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterLang, setFilterLang] = useState("All");
  const [sortBy, setSortBy] = useState("updated");

  useEffect(() => {
    fetch("https://api.github.com/users/sebbyrule/repos?per_page=100")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch repositories");
        return res.json();
      })
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Get unique languages for filter dropdown
  const languages = [
    ...new Set(repos.map((r) => r.language).filter(Boolean)),
  ];

  // Filter and sort repos
  let filteredRepos = filterLang === "All"
    ? repos
    : repos.filter((r) => r.language === filterLang);

  filteredRepos = [...filteredRepos].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return new Date(b.updated_at) - new Date(a.updated_at);
    }
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-8 text-center">Projects</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <label className="flex items-center gap-2">
          <span className="font-medium">Filter:</span>
          <select
            className="border rounded px-2 py-1"
            value={filterLang}
            onChange={(e) => setFilterLang(e.target.value)}
          >
            <option value="All">All</option>
            {languages.map((lang) => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
        </label>
        <label className="flex items-center gap-2">
          <span className="font-medium">Sort:</span>
          <select
            className="border rounded px-2 py-1"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="updated">Last Updated</option>
            <option value="name">Name</option>
          </select>
        </label>
      </div>
      {loading && <p className="text-center">Loading projects...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRepos.map((repo) => (
          <div key={repo.id} className="border rounded-xl shadow-lg bg-white p-6 flex flex-col justify-between hover:scale-[1.03] transition">
            <div className="flex items-center gap-3 mb-2">
              {repo.language && languageIcons[repo.language] && (
                <img src={languageIcons[repo.language]} alt={repo.language} className="w-7 h-7" title={repo.language} />
              )}
              <h3 className="text-xl font-bold text-blue-800">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {repo.name}
                </a>
              </h3>
            </div>
            <p className="text-gray-700 mb-4 min-h-[48px]">{repo.description || "No description provided."}</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-gray-500">Last updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">GitHub ↗</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}