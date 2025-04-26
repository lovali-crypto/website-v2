import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import StakingProcess from '../components/home/StakingProcess';
import Statistics from '../components/home/Statistics';
import CTA from '../components/home/CTA';
import BlogCard from '../components/blog/BlogCard';
import { getBlogPosts } from '../utils/blogUtils';
import type { BlogPost } from '../types/blog';
import { useContext } from 'react';
import { DarkModeContext } from '../components/layout/DarkModeContext';

const Home: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const posts = await getBlogPosts();
      setBlogPosts(posts.slice(0, 3)); // Show latest 3 posts
    };
    fetchBlogPosts();
  }, []);

  return (
    <main>
      <Hero />
      <Features />
      <StakingProcess />
      {blogPosts.length > 0 && (
        <section className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              Latest <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Blog Posts</span>
              </h2>
              <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Stay updated with our latest insights and news about blockchain validation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogCard key={post.slug} post={post} darkMode={darkMode} />
              ))}
            </div>
          </div>
        </section>
      )}
      <Statistics />
      <CTA />
    </main>
  );
};

export default Home;
