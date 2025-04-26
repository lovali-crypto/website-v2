import React, { useEffect, useState } from 'react';
import BlogCard from '../components/blog/BlogCard';
import { getBlogPosts } from '../utils/blogUtils';
import type { BlogPost } from '../types/blog';
import { useContext } from 'react';
import { DarkModeContext } from '../components/layout/DarkModeContext';

const Blog: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);
  const backgroundColor = darkMode ? 'bg-gray-900' : 'bg-gray-50';
  const textColor = darkMode ? 'text-white' : 'text-gray-900';
  const buttonColor = darkMode ? 'bg-gradient-to-r from-emerald-500 to-blue-600' : 'bg-gradient-to-r from-emerald-400 to-blue-500';
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      const blogPosts = await getBlogPosts();
      setPosts(blogPosts);
      setLoading(false);
    };

    loadPosts();
  }, []);

  if (loading) {
    return (
      <div className={`min-h-screen ${backgroundColor} py-24`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`bg-gray-900/50 ${darkMode ? 'bg-gray-800/50' : ''} rounded-xl h-96`}></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${backgroundColor} py-24`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className={`text-4xl font-bold ${textColor} mb-4`}>
            Latest from our <span className={buttonColor + ' bg-clip-text text-transparent'}>Blog</span>
          </h1>
          <p className={`text-gray-400 max-w-2xl mx-auto ${textColor}`}>
            Stay updated with the latest news, insights, and updates about crypto validation and staking.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
