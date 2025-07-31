import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { MDXProvider } from '@mdx-js/react';
import React from 'react';

// Dynamically import all MDX files in src/posts
const modules = import.meta.glob('../posts/*.mdx');

export default function Blog() {
  const { postname } = useParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [Content, setContent] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      const postPromises = Object.entries(modules).map(async ([path, resolver]) => {
        const mod = await resolver();
        return {
          ...mod,
          slug: path.split('/').pop().replace('.mdx', ''),
        };
      });
      const loadedPosts = await Promise.all(postPromises);
      // Sort by date descending
      loadedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
      setPosts(loadedPosts);
    };
    loadPosts();
  }, []);

  useEffect(() => {
    if (postname) {
      const loadPostContent = async () => {
        const entry = Object.entries(modules).find(([path]) => path.endsWith(`${postname}.mdx`));
        if (entry) {
          const mod = await entry[1]();
          setContent(() => mod.default);
        }
      };
      loadPostContent();
    } else {
      setContent(null);
    }
  }, [postname]);

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Blog</h2>

      {/* Blog Index */}
      {!postname && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="p-4 border rounded-lg shadow hover:shadow-lg transition cursor-pointer bg-white animate-fadein no-underline"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-1">{post.title}</h3>
              <p className="text-gray-500 text-sm">Published on {post.date}</p>
              <p className="text-gray-600 text-sm mt-2">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      )}

      {/* Single Post View */}
      {postname && Content && (
        <div className="bg-white p-6 rounded-lg shadow">
          <button
            className="text-blue-600 mb-4 hover:underline"
            onClick={() => navigate('/portfolio')}
          >
            ← Back to Blog
          </button>
          <article className="prose lg:prose-xl mx-auto">
            <MDXProvider>{Content && <Content />}</MDXProvider>
          </article>
        </div>
      )}
    </div>
  );
}
