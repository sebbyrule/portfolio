import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [content, setContent] = useState("");

  // Predefined list of blog posts (in a real project, you'd fetch this from a backend or a JSON index)
  const postList = [
    {
      filename: "second-post.md",
      title: "Docker & Nginx Adventures",
      date: "2025-07-24",
      excerpt: "A quick guide to setting up Docker containers with Nginx for web hosting and reverse proxy."
    },
    {
      filename: "first-post.md",
      title: "Welcome to My Blog",
      date: "2025-07-01",
      excerpt: "Kickstarting my portfolio blog with a look at my interests and future plans."
    },
  ];


  useEffect(() => {
    setPosts(postList);
  }, []);

  const loadPost = (filename) => {
    fetch(`/posts/${filename}`)
      .then((res) => res.text())
      .then((data) => {
        setSelectedPost(filename);
        setContent(data);
      });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Blog</h2>

      {/* Blog Index */}
      {!selectedPost && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {posts.map((post) => (
            <div
              key={post.filename}
              className="p-4 border rounded-lg shadow hover:shadow-lg transition cursor-pointer bg-white animate-fadein"
              onClick={() => loadPost(post.filename)}
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-1">{post.title}</h3>
              <p className="text-gray-500 text-sm">Published on {post.date}</p>
              <p className="text-gray-600 text-sm mt-2">{post.excerpt}</p>
            </div>
          ))}
        </div>
      )}


      {/* Single Post View */}
      {selectedPost && (
        <div className="bg-white p-6 rounded-lg shadow">
          <button
            className="text-blue-600 mb-4 hover:underline"
            onClick={() => setSelectedPost(null)}
          >
            ← Back to Blog
          </button>
          <article className="prose lg:prose-lg mx-auto">
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>
        </div>
      )}
    </div>
  );
}
